import React, { useEffect, useState } from 'react'
import "./Home.scoped.css"
import Timeline from "../../Components/Timeline/Timeline"
import { FaWindows, FaApple, FaLinux, FaDownload } from "react-icons/fa"
import { FiArrowRight, FiBookOpen, FiUsers, FiAward, FiZap, FiTarget, FiTrendingUp, FiShield, FiStar, FiChevronDown, FiChevronUp } from "react-icons/fi"

export default function Home() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [openFaq, setOpenFaq] = useState(null)

  useEffect(() => {
    const handleMove = (e) => setMousePos({ x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight })
    window.addEventListener('mousemove', handleMove)
    return () => window.removeEventListener('mousemove', handleMove)
  }, [])

  const cards = [
    { icon: <FaWindows />, platform: "Windows", text: "Download and explore everything offline. Quick to install, easy to use." },
    { icon: <FaApple />, platform: "macOS", text: "Smooth on macOS. Clean design and fast performance for your Apple device." },
    { icon: <FaLinux />, platform: "Linux", text: "Lightweight and runs great on most distributions. Built for speed and privacy." },
  ]

  const stats = [
    { icon: <FiUsers />, value: "12K+", label: "Students" },
    { icon: <FiBookOpen />, value: "300+", label: "Courses" },
    { icon: <FiAward />, value: "98%", label: "Satisfaction" },
    { icon: <FiZap />, value: "24/7", label: "Support" },
  ]

  const features = [
    { icon: <FiTarget />, title: "Adaptive Learning", desc: "Our AI-powered system adjusts to your learning pace and style, making every session more effective." },
    { icon: <FiTrendingUp />, title: "Progress Tracking", desc: "Visual dashboards show your growth in real time. Know exactly where you stand." },
    { icon: <FiShield />, title: "Expert Instructors", desc: "Learn from industry professionals with years of real-world experience." },
    { icon: <FiZap />, title: "Instant Feedback", desc: "Get immediate responses on quizzes and assignments — no waiting, just improvement." },
    { icon: <FiAward />, title: "Certificates", desc: "Earn recognized certificates upon completion to showcase your skills worldwide." },
    { icon: <FiUsers />, title: "Community", desc: "Join thousands of learners, share knowledge, and grow together." },
  ]

  const steps = [
    { num: "01", title: "Create Your Account", desc: "Sign up in seconds — no credit card required. Just your email and a goal." },
    { num: "02", title: "Pick Your Path", desc: "Browse 300+ courses. Filter by topic, level, or rating." },
    { num: "03", title: "Learn & Practice", desc: "Watch lessons, complete exercises, and track your progress." },
    { num: "04", title: "Earn & Shine", desc: "Pass assessments, collect certificates, and share your achievement." },
  ]

  const courses = [
    { tag: "CS", title: "Database Systems", lessons: 24, students: "3.2K", rating: 4.9, color: "#07a889" },
    { tag: "CS", title: "Algorithms & Data Structures", lessons: 32, students: "5.1K", rating: 4.8, color: "#6366f1" },
    { tag: "CS", title: "Computer Networks", lessons: 18, students: "2.8K", rating: 4.7, color: "#f59e0b" },
    { tag: "CS", title: "Artificial Intelligence", lessons: 28, students: "4.5K", rating: 4.9, color: "#ec4899" },
  ]

  const faqs = [
    { q: "Is the platform free to use?", a: "Yes! The core platform is completely free. Premium features like certificates are available on paid plans." },
    { q: "Can I learn at my own pace?", a: "Absolutely. All courses are self-paced. You can pause, rewind, and revisit any lesson anytime." },
    { q: "Do I get a certificate after completing a course?", a: "Yes. Every completed course awards a digital certificate you can share on LinkedIn." },
    { q: "What subjects are available?", a: "We cover Computer Science, Engineering, Mathematics, and more — with new courses every month." },
    { q: "Is there support if I get stuck?", a: "Yes! Our community forum and 24/7 AI assistant are always available." },
  ]

  return (
    <div className="main__section">

      {/* ── HERO ── */}
      <section className="hero">
        <div className="orb orb-1" style={{ transform: `translate(${mousePos.x * 30}px, ${mousePos.y * 30}px)` }} />
        <div className="orb orb-2" style={{ transform: `translate(${-mousePos.x * 20}px, ${-mousePos.y * 20}px)` }} />
        <div className="orb orb-3" style={{ transform: `translate(${mousePos.x * 15}px, ${-mousePos.y * 15}px)` }} />

        <div className="container-lg">
          <div className="row align-items-center g-5">

            <div className="col-lg-6">
              <div className="hero__left">
                <div className="hero__badge">
                  <span className="badge__dot" />
                  New courses available now
                </div>
                <h1 className="hero__title">
                  Explore Your<br />
                  <span className="hero__title--accent">Learning</span><br />
                  Universe
                </h1>
                <p className="hero__desc">An interactive platform that adapts to your pace — track progress, build real skills, and unlock your potential.</p>
                <div className="hero__actions">
                  <button className="btn__primary">Get Started <FiArrowRight /></button>
                  <button className="btn__ghost">Watch Demo</button>
                </div>
              </div>
            </div>

            <div className="col-lg-6 d-flex justify-content-center">
              <div className="hero__visual">
                <div className="floating__card card--top">
                  <FiBookOpen size={18} />
                  <div>
                    <p className="fc__label">Currently Learning</p>
                    <p className="fc__value">Database Systems</p>
                  </div>
                </div>
                <div className="hero__img__wrap">
                  <img src="/Assets/Images/wired-outline-112-book-hover-pinch (1).gif" alt="Learning" />
                </div>
                <div className="floating__card card--bottom">
                  <FiAward size={18} />
                  <div>
                    <p className="fc__label">Achievement</p>
                    <p className="fc__value">Top Learner 🏆</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="features__section">
        <div className="container-lg">
          <div className="section__header">
            <span className="section__tag">Why Choose Us</span>
            <h2>Everything You Need to <span>Succeed</span></h2>
            <p>Powerful tools and expert content designed to accelerate your growth.</p>
          </div>
          <div className="row g-4">
            {features.map((f, i) => (
              <div className="col-lg-4 col-md-6" key={i}>
                <div className="feature__card">
                  <div className="feature__icon">{f.icon}</div>
                  <h3>{f.title}</h3>
                  <p>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="how__section">
        <div className="container-lg">
          <div className="section__header">
            <span className="section__tag">Simple Process</span>
            <h2>How It <span>Works</span></h2>
            <p>Four easy steps to start your learning journey today.</p>
          </div>
          <div className="row g-4 justify-content-center steps__row">
            {steps.map((s, i) => (
              <div className="col-lg-3 col-md-6" key={i}>
                <div className="step__card">
                  <div className="step__num">{s.num}</div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COURSES ── */}
      <section className="courses__section">
        <div className="container-lg">
          <div className="section__header">
            <span className="section__tag">Popular Courses</span>
            <h2>Start With the <span>Best</span></h2>
            <p>Top-rated courses loved by thousands of students.</p>
          </div>
          <div className="row g-4">
            {courses.map((c, i) => (
              <div className="col-lg-3 col-md-6" key={i}>
                <div className="course__card" style={{ '--accent': c.color }}>
                  <div className="course__top">
                    <span className="course__tag">{c.tag}</span>
                    <div className="course__rating"><FiStar size={13} fill={c.color} color={c.color} /> {c.rating}</div>
                  </div>
                  <h3 className="course__title">{c.title}</h3>
                  <div className="course__meta">
                    <span><FiBookOpen size={12} /> {c.lessons} Lessons</span>
                    <span><FiUsers size={12} /> {c.students} Students</span>
                  </div>
                  <button className="course__btn">Explore <FiArrowRight size={13} /></button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TIMELINE ── */}

      {/* ── FAQ ── */}
      <section className="faq__section">
        <div className="container-lg">
          <div className="section__header">
            <span className="section__tag">Got Questions?</span>
            <h2>Frequently Asked <span>Questions</span></h2>
            <p>Everything you need to know before getting started.</p>
          </div>
          <div className="faq__list">
            {faqs.map((f, i) => (
              <div className={`faq__item ${openFaq === i ? 'open' : ''}`} key={i} onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                <div className="faq__q">
                  <span>{f.q}</span>
                  {openFaq === i ? <FiChevronUp size={18} /> : <FiChevronDown size={18} />}
                </div>
                <div className="faq__a">{f.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DOWNLOAD ── */}
      <section className="download">
        <div className="container-lg">
          <div className="section__header">
            <span className="section__tag">Available Everywhere</span>
            <h2>Transform Your <span>Experience</span></h2>
            <p>Install on all your devices and never miss a lesson.</p>
          </div>
          <div className="row g-4">
            {cards.map((card, i) => (
              <div className="col-lg-4 col-md-6" key={i}>
                <div className="dl__card">
                  <div className="card__top">
                    <div className="icon">{card.icon}</div>
                    <span className="card__platform">{card.platform}</span>
                  </div>
                  <p>{card.text}</p>
                  <button><FaDownload size={13} />Download for {card.platform}</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}