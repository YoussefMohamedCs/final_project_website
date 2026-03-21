import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaRecordVinyl, FaStop } from "react-icons/fa";
import UserComponent from '../../Model/Components/UserComponent';
import LLMcomponent from '../../Model/Components/LLMcomponent';
import { OpenAI } from "openai";
import { FiPlus, FiMessageSquare, FiTrash2, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { FiArrowLeft } from 'react-icons/fi'
import { Link, useNavigate } from 'react-router-dom';
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

export default function MainModelQuery() {
  const navigate = useNavigate()
  const [listening, setListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [embedding, setEmbedding] = useState('');
  const [conversation, setConversation] = useState([]);
  const [textWriten, setTextWriten] = useState("");
  const [book, setBook] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [chats, setChats] = useState([]); // [ { id, title, messages } ]
  const [activeChatId, setActiveChatId] = useState(null);

  // ── Load chats from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("query_chats");
    if (saved) {
      const parsed = JSON.parse(saved);
      setChats(parsed);
      if (parsed.length > 0) {
        setActiveChatId(parsed[0].id);
        setConversation(parsed[0].messages);
      }
    }
  }, []);

  // ── Save chats to localStorage whenever they change
  useEffect(() => {
    if (chats.length > 0) {
      localStorage.setItem("query_chats", JSON.stringify(chats));
    }
  }, [chats]);

  // ── Sync conversation into active chat
  useEffect(() => {
    if (!activeChatId) return;
    setChats(prev => prev.map(c =>
      c.id === activeChatId ? { ...c, messages: conversation } : c
    ));
  }, [conversation]);

  useEffect(() => {
    fetch("/DBbook.json")
      .then((response) => response.json())
      .then((json) => setBook(json));
  }, []);

  const createNewChat = () => {
    const newChat = {
      id: Date.now().toString(),
      title: "New Chat",
      messages: []
    };
    setChats(prev => [newChat, ...prev]);
    setActiveChatId(newChat.id);
    setConversation([]);
  };

  const switchChat = (chat) => {
    setActiveChatId(chat.id);
    setConversation(chat.messages);
  };

  const deleteChat = (e, chatId) => {
    e.stopPropagation();
    const updated = chats.filter(c => c.id !== chatId);
    setChats(updated);
    localStorage.setItem("query_chats", JSON.stringify(updated));
    if (chatId === activeChatId) {
      if (updated.length > 0) {
        setActiveChatId(updated[0].id);
        setConversation(updated[0].messages);
      } else {
        setActiveChatId(null);
        setConversation([]);
      }
    }
  };

  const LLM = async (text) => {
    // إذا مفيش chat نعمل واحد جديد
    let currentChatId = activeChatId;
    if (!currentChatId) {
      const newChat = { id: Date.now().toString(), title: text.slice(0, 30), messages: [] };
      setChats(prev => [newChat, ...prev]);
      setActiveChatId(newChat.id);
      currentChatId = newChat.id;
    } else {
      // نحدّث العنوان من أول رسالة
      setChats(prev => prev.map(c =>
        c.id === currentChatId && c.title === "New Chat"
          ? { ...c, title: text.slice(0, 30) }
          : c
      ));
    }

    setIsLoading(true);
    const client = new OpenAI({
      baseURL: "https://router.huggingface.co/v1",
      apiKey: "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",
      dangerouslyAllowBrowser: true,
    });

    const fullMessages = [
      {
        role: "system",
        content: `You are a database expert. You must answer only questions related to databases using *exclusively* the content provided from the book.  
If the answer is not found in the provided text, first respond with: "The answer is not available in the Book," and then give your best possible answer based on your knowledge.  
If the question is unrelated to databases, respond with: "I only answer database-related questions."`
      },
      ...conversation,
      { role: "user", content: text },
    ];

    try {
      const chatCompletion = await client.chat.completions.create({
        model: "Qwen/Qwen3-VL-8B-Instruct:novita",
        messages: fullMessages,
      });
      const reply = chatCompletion?.choices[0]?.message?.content;
      handleAddLLMText(reply);
    } catch (error) {
      console.error("LLM error:", error);
      handleAddLLMText("Sorry, I couldn't process that.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleAddLLMText = (text) => {
    setConversation(prev => [...prev, { role: "assistant", content: text }]);
  };

  const handleEnter = (e) => {
    if (e.key === "Enter" && textWriten.trim()) {
      const userText = textWriten;
      setConversation(prev => [...prev, { role: "user", content: userText }]);
      setTextWriten("");
      LLM(userText);
    }
  };

  const handleRegenerate = () => {
    const lastUserMsg = [...conversation].reverse().find(msg => msg.role === "user");
    if (lastUserMsg) {
      setConversation(prev => prev.slice(0, -1));
      LLM(lastUserMsg.content);
    }
  };

  useEffect(() => {
    window.scrollBy({ top: 10000, behavior: "smooth" });
  }, [conversation, isLoading]);

  const recognition = new SpeechRecognition();
  recognition.continuous = false;
  recognition.interimResults = false;
  recognition.lang = 'en-US';

  recognition.onresult = async (event) => {
    const text = event.results[0][0].transcript;
    setTranscript(text);
    setConversation(prev => [...prev, { role: "user", content: text }]);
    LLM(text);
    try {
      const response = await axios.post(
        'http://127.0.0.1:5000/embedding',
        { text },
        { headers: { 'Content-Type': 'application/json' } }
      );
      setEmbedding(JSON.stringify(response.data, null, 2));
    } catch (error) {
      console.error('Error sending to /embedding:', error);
    }
  };

  recognition.onend = () => setListening(false);

  const startListening = () => {
    setTranscript('');
    setEmbedding('');
    setListening(true);
    recognition.start();
  };

  return (
    <>
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }

        .page-layout {
          display: flex;
          min-height: 100vh;
          background: linear-gradient(135deg, #0a1628 0%, #0d3b4f 50%, #0a4a5c 100%);
          font-family: sans-serif;
        }

        /* ── Sidebar ── */
        .sidebar {
          width: ${sidebarOpen ? '260px' : '0px'};
          min-width: ${sidebarOpen ? '260px' : '0px'};
          height: 100vh;
          position: sticky;
          top: 0;
          background: rgba(0,0,0,0.35);
          backdrop-filter: blur(12px);
          border-right: 1px solid rgba(255,255,255,0.07);
          display: flex;
          flex-direction: column;
          overflow: hidden;
          transition: width 0.3s ease, min-width 0.3s ease;
        }

        .sidebar-header {
          padding: 20px 16px 12px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid rgba(255,255,255,0.07);
          flex-shrink: 0;
        }

        .sidebar-title {
          color: rgba(255,255,255,0.7);
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.8px;
          text-transform: uppercase;
          white-space: nowrap;
        }

        .new-chat-btn {
          background: linear-gradient(135deg, #0d9488, #14b8a6);
          border: none;
          border-radius: 8px;
          color: white;
          padding: 6px 10px;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 5px;
          font-size: 13px;
          font-weight: 600;
          white-space: nowrap;
          transition: opacity 0.2s;
          flex-shrink: 0;
        }

        .new-chat-btn:hover { opacity: 0.85; }

        .chat-list {
          flex: 1;
          overflow-y: auto;
          padding: 10px 8px;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .chat-list::-webkit-scrollbar { width: 4px; }
        .chat-list::-webkit-scrollbar-track { background: transparent; }
        .chat-list::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.15); border-radius: 4px; }

        .chat-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 10px 12px;
          border-radius: 10px;
          cursor: pointer;
          transition: background 0.2s;
          gap: 8px;
        }

        .chat-item:hover { background: rgba(255,255,255,0.07); }
        .chat-item.active { background: rgba(13,148,136,0.2); border: 1px solid rgba(13,148,136,0.3); }

        .chat-item-left {
          display: flex;
          align-items: center;
          gap: 8px;
          overflow: hidden;
          flex: 1;
        }

        .chat-item-icon { color: rgba(255,255,255,0.4); flex-shrink: 0; }
        .chat-item.active .chat-item-icon { color: #14b8a6; }

        .chat-item-title {
          color: rgba(255,255,255,0.75);
          font-size: 13px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .chat-item.active .chat-item-title { color: white; font-weight: 600; }

        .delete-btn {
          background: transparent;
          border: none;
          color: rgba(255,255,255,0.25);
          cursor: pointer;
          padding: 3px;
          border-radius: 5px;
          display: flex;
          align-items: center;
          transition: color 0.2s;
          flex-shrink: 0;
        }

        .delete-btn:hover { color: #f87171; }

        .sidebar-empty {
          color: rgba(255,255,255,0.3);
          font-size: 13px;
          text-align: center;
          padding: 30px 16px;
        }

        /* ── Toggle button ── */
        .toggle-btn {
          position: fixed;
          top: 50%;
          left: ${sidebarOpen ? '248px' : '0px'};
          transform: translateY(-50%);
          z-index: 100;
          background: rgba(13,148,136,0.85);
          border: none;
          border-radius: 0 8px 8px 0;
          color: white;
          width: 20px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: left 0.3s ease;
        }

        .toggle-btn:hover { background: #0d9488; }

        /* ── Chat area ── */
        .chat-wrapper {
          flex: 1;
          min-height: 100vh;
          padding: 50px 120px;
          display: flex;
          flex-direction: column;
        }

        .messages-container {
          flex: 1;
          margin-bottom: 100px;
          padding-bottom: 20px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .empty-state {
          height: 79vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .empty-state h1 {
          color: white;
          font-weight: bolder;
          font-size: 2.5rem;
          opacity: 0.85;
        }

        .text-and-audio {
          position: fixed;
          bottom: 30px;
          left: calc(${sidebarOpen ? '260px' : '0px'} + (100vw - ${sidebarOpen ? '260px' : '0px'}) / 2);
          transform: translateX(-50%);
          width: 55%;
          display: flex;
          align-items: center;
          background: rgba(255, 255, 255, 0.95);
          border-radius: 50px;
          padding: 8px 8px 8px 20px;
          box-shadow: 0 8px 32px rgba(0,0,0,0.3);
          gap: 10px;
          transition: left 0.3s ease, width 0.3s ease;
        }

        .text-write {
          flex: 1;
          border: none;
          outline: none;
          background: transparent;
          font-size: 16px;
          color: #1a1a2e;
          font-family: sans-serif;
        }

        .text-write::placeholder { color: #94a3b8; }

        .button-record {
           margin: 5px 0px;
          background: linear-gradient(135deg, #1a1a2e, #0f3460);
          border: none;
          border-radius: 50%;
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: white;
          transition: transform 0.2s, box-shadow 0.2s;
          flex-shrink: 0;
        }

        .button-record:hover { transform: scale(1.05); box-shadow: 0 4px 15px rgba(0,0,0,0.4); }

        .button-record:disabled {
          background: linear-gradient(135deg, #dc2626, #ef4444);
          box-shadow: 0 4px 15px rgba(220,38,38,0.4);
        }
          .sidebar-footer {
  padding: 12px 8px;
  border-top: 1px solid rgba(255,255,255,0.07);
  flex-shrink: 0;
}

.exit-btn {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 14px;
  background: red;
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 10px;
  color: rgb(255, 255, 255);
  font-size: 14px;
  font-weight: bolder;
  cursor: pointer;
  transition: all 0.2s;
  white-space: nowrap;
}

.exit-btn:hover {
  background: rgba(253, 2, 2, 0.15);
  border-color: rgba(235, 0, 0, 0.4);
  color: #fffefe;
}
      `}</style>

      <div className="page-layout">

        {/* ── Sidebar ── */}
        <div className="sidebar">
          <div className="sidebar-header">
            <span className="sidebar-title">History</span>
            <button className="new-chat-btn" onClick={createNewChat}>
              <FiPlus size={14} /> New
            </button>
          </div>

          <div className="chat-list">
            {chats.length === 0
              ? <p className="sidebar-empty">No chats yet</p>
              : chats.map(chat => (
                <div
                  key={chat.id}
                  className={`chat-item ${chat.id === activeChatId ? 'active' : ''}`}
                  onClick={() => switchChat(chat)}
                >
                  <div className="chat-item-left">
                    <FiMessageSquare size={14} className="chat-item-icon" />
                    <span className="chat-item-title">{chat.title || "New Chat"}</span>
                  </div>
                  <button className="delete-btn" onClick={(e) => deleteChat(e, chat.id)}>
                    <FiTrash2 size={13} />
                  </button>
                </div>
              ))
            }
          </div>
          <div className="sidebar-footer">
  <Link className="exit-btn" onClick={() => window.history.back()} to={'faculties/cs/database/assistant/'}>
    <FiArrowLeft size={16} />
    <span>Exit</span>
  </Link>
</div>
        </div>

        {/* ── Toggle ── */}
        <button className="toggle-btn" onClick={() => setSidebarOpen(p => !p)}>
          {sidebarOpen ? <FiChevronLeft size={13} /> : <FiChevronRight size={13} />}
        </button>

        {/* ── Main Chat ── */}
        <div className="chat-wrapper">
          <div className='messages-container'>
            {conversation.length === 0 && !isLoading
              ? <div className='empty-state'><h1>What are you working on?</h1></div>
              : <></>
            }

            {conversation.map((msg, index) => (
              msg.role === "assistant"
                ? <LLMcomponent key={index} LLMtext={msg.content} onRegenerate={handleRegenerate} isLoading={false} />
                : <UserComponent key={index} UserText={msg.content} />
            ))}

            {isLoading && (
              <LLMcomponent LLMtext="" onRegenerate={handleRegenerate} isLoading={true} />
            )}
          </div>

          <div className='text-and-audio'>
            <input
              type="text"
              placeholder='Ask about anything…'
              className='text-write'
              onKeyPress={handleEnter}
              onChange={(e) => setTextWriten(e.target.value)}
              value={textWriten}
            />
            <button onClick={startListening} disabled={listening} className='button-record'>
              {listening
                ? <FaStop size={22} style={{ cursor: "pointer" }} />
                : <FaRecordVinyl size={22} style={{ cursor: "pointer" }} />}
            </button>
          </div>
        </div>

      </div>
    </>
  );
}