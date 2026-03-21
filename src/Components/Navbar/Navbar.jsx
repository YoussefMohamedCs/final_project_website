import React, { useEffect, useState } from 'react'
import { RxAvatar } from "react-icons/rx"
import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY >= 80)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const links = [
    { to: '/', label: 'Home' },
    { to: '/about-us', label: 'About Us' },
    { to: '/faculties', label: 'Faculties' },
  ]

  return (
    <>
      <style>{`
        .navbar-wrap {
          position: fixed; top: 0; left: 0; right: 0; z-index: 999;
          padding: 16px 0;
          transition: all 0.4s ease;
        }
        .navbar-wrap.scrolled {
          background: rgba(8, 28, 26, 0.88);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(7,168,137,0.15);
          padding: 12px 0;
          box-shadow: 0 4px 30px rgba(0,0,0,0.2);
        }
        .navbar-inner {
          display: flex; align-items: center;
          justify-content: space-between;
        }
        .navbar-logo img {
          height: 46px; width: auto;
          filter: drop-shadow(0 0 8px rgba(7,168,137,0.3));
        }
        .navbar-links {
          display: flex; align-items: center;
          gap: 6px; list-style: none; margin: 0; padding: 0;
        }
        .navbar-links li a {
          text-decoration: none;
          color: rgba(255,255,255,0.72);
          font-size: 15px; font-weight: 500;
          padding: 8px 18px; border-radius: 10px;
          position: relative; transition: all 0.25s;
          font-family: 'DM Sans', 'Satoshi', sans-serif;
          letter-spacing: 0.2px;
        }
        .navbar-links li a:hover {
          color: #fff;
          background: rgba(255,255,255,0.06);
        }
        .navbar-links li a.active {
          color: #07a889;
          background: rgba(7,168,137,0.1);
        }
        .navbar-links li a.active::after {
          content: '';
          position: absolute; bottom: 4px;
          left: 50%; transform: translateX(-50%);
          width: 18px; height: 2px;
          background: #07a889; border-radius: 2px;
        }
        .navbar-right {
          display: flex; align-items: center; gap: 12px;
        }
        .navbar-cta {
          background: #07a889; color: #fff;
          border: none; padding: 9px 20px;
          border-radius: 10px; font-size: 14px;
          font-weight: 600; cursor: pointer;
          font-family: 'DM Sans', 'Satoshi', sans-serif;
          transition: all 0.25s; letter-spacing: 0.2px;
        }
        .navbar-cta:hover {
          background: #059c7e;
          transform: translateY(-1px);
          box-shadow: 0 6px 20px rgba(7,168,137,0.3);
        }
        .navbar-avatar {
          width: 38px; height: 38px; border-radius: 50%;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.12);
          display: flex; align-items: center; justify-content: center;
          cursor: pointer; transition: all 0.25s; color: rgba(255,255,255,0.8);
        }
        .navbar-avatar:hover {
          background: rgba(7,168,137,0.12);
          border-color: rgba(7,168,137,0.3);
          color: #07a889;
        }
      `}</style>

      <nav className={`navbar-wrap ${scrolled ? 'scrolled' : ''}`}>
        <div className="container-lg">
          <div className="navbar-inner">

            {/* Logo */}
            <div className="navbar-logo">
              <Link to="/">
                <img src="/Assets/images/MTI-Logo-1.png" alt="MTI" />
              </Link>
            </div>

            {/* Links */}
            <ul className="navbar-links">
              {links.map((link, i) => (
                <li key={i}>
                  <Link
                    to={link.to}
                    className={location.pathname === link.to ? 'active' : ''}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Right side */}
            <div className="navbar-right">
              <button className="navbar-cta">Get Started</button>
              <div className="navbar-avatar">
                <RxAvatar size={22} />
              </div>
            </div>

          </div>
        </div>
      </nav>
    </>
  )
}