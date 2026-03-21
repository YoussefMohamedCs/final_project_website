import React, { useState } from 'react'
import Markdown from 'react-markdown'
import { FiCopy, FiThumbsUp, FiThumbsDown, FiRotateCcw } from 'react-icons/fi'

export default function LLMcomponent({ LLMtext, onRegenerate, isLoading }) {
  const [copied, setCopied] = useState(false)
  const [liked, setLiked] = useState(null)

  const handleCopy = () => {
    navigator.clipboard.writeText(LLMtext)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className='LLMcomponent d-flex justify-content-start'>
      <div style={{ display: "flex", flexDirection: "column", gap: "6px", maxWidth: "60%" }}>

        <div className='LLMtext'>
          {isLoading
            ? (
              <div className='thinking-wrapper'>
                <div className='thinking-dots'>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <span className='thinking-label'>Thinking…</span>
              </div>
            )
            : <Markdown>{LLMtext}</Markdown>
          }
        </div>

        {!isLoading && (
          <div className='llm-actions'>
            <button className={`llm-action-btn ${copied ? 'active-copy' : ''}`} onClick={handleCopy} title="Copy">
              <FiCopy size={15} />
              {copied && <span style={{ fontSize: "11px", marginLeft: "4px" }}>Copied!</span>}
            </button>
            <button className={`llm-action-btn ${liked === 'up' ? 'active-like' : ''}`} onClick={() => setLiked(liked === 'up' ? null : 'up')} title="Like">
              <FiThumbsUp size={15} />
            </button>
            <button className={`llm-action-btn ${liked === 'down' ? 'active-dislike' : ''}`} onClick={() => setLiked(liked === 'down' ? null : 'down')} title="Dislike">
              <FiThumbsDown size={15} />
            </button>
            <button className='llm-action-btn' onClick={onRegenerate} title="Regenerate">
              <FiRotateCcw size={15} />
            </button>
          </div>
        )}

      </div>

      <style>{`
        .LLMcomponent {
          display: flex;
          justify-content: flex-start;
          margin: 8px 0;
        }

        .LLMtext {
          background: linear-gradient(135deg, #0d9488, #14b8a6);
          color: #ffffff;
          padding: 12px 20px;
          border-radius: 20px 20px 20px 4px;
          font-weight: 600;
          font-size: 15px;
          box-shadow: 0 4px 15px rgba(13, 148, 136, 0.4);
          line-height: 1.5;
        }

        .LLMtext p { margin: 0; }
        .LLMtext pre {
          background: rgba(0,0,0,0.2);
          padding: 10px;
          border-radius: 8px;
          overflow-x: auto;
          margin-top: 8px;
        }
        .LLMtext code {
          background: rgba(0,0,0,0.2);
          padding: 2px 6px;
          border-radius: 4px;
          font-size: 13px;
        }
        .LLMtext ul, .LLMtext ol {
          padding-left: 20px;
          margin: 4px 0;
        }

        /* Thinking animation */
        .thinking-wrapper {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .thinking-label {
          font-size: 14px;
          opacity: 0.85;
          font-style: italic;
        }

        .thinking-dots {
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .thinking-dots span {
          width: 7px;
          height: 7px;
          background: white;
          border-radius: 50%;
          display: inline-block;
          animation: bounce 1.2s infinite ease-in-out;
        }

        .thinking-dots span:nth-child(1) { animation-delay: 0s; }
        .thinking-dots span:nth-child(2) { animation-delay: 0.2s; }
        .thinking-dots span:nth-child(3) { animation-delay: 0.4s; }

        @keyframes bounce {
          0%, 80%, 100% { transform: scale(0.7); opacity: 0.4; }
          40%            { transform: scale(1.2); opacity: 1; }
        }

        /* Actions bar */
        .llm-actions {
          display: flex;
          align-items: center;
          gap: 4px;
          padding: 2px 6px;
        }

        .llm-action-btn {
          background: transparent;
          border: none;
          color: rgba(255,255,255,0.45);
          cursor: pointer;
          padding: 5px 7px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          transition: color 0.2s, background 0.2s;
        }

        .llm-action-btn:hover {
          color: rgba(255,255,255,0.9);
          background: rgba(255,255,255,0.08);
        }

        .active-copy    { color: #14b8a6 !important; }
        .active-like    { color: #4ade80 !important; }
        .active-dislike { color: #f87171 !important; }
      `}</style>
    </div>
  )
}