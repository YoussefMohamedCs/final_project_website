import React, { useState, useEffect, useRef } from 'react';
import { Rocket, Target, Zap, Award, TrendingUp, CheckCircle2 } from 'lucide-react';
import { FaRegImage } from "react-icons/fa6";

export default function AnimatedTimeline() {
  const [lineHeight, setLineHeight] = useState(0);
  const timelineRef = useRef(null);

  const timelineData = [
    { date: 'January 2024', title: 'Project Kickoff', desc: 'Initial planning and team assembly. Setting up the foundation for success.', icon: Rocket },
    { date: 'March 2024', title: 'First Milestone', desc: 'Completed the core infrastructure and established key partnerships.', icon: Target },
    { date: 'June 2024', title: 'Rapid Growth', desc: 'Achieved 100% user growth and expanded to three new markets.', icon: Zap },
    { date: 'September 2024', title: 'Industry Recognition', desc: 'Received awards for innovation and customer satisfaction.', icon: Award },

  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;
      
      const rect = timelineRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Start filling when timeline enters viewport
      const triggerPoint = windowHeight * 0.5; // Middle of viewport
      
      // Only animate when timeline is visible
      if (rect.top <= triggerPoint && rect.bottom >= 0) {
        // Calculate how much of timeline has been scrolled
        const scrolled = Math.max(0, triggerPoint - rect.top);
        const total = rect.height;
        const percent = Math.min(105, Math.max(0, (scrolled / total) * 140));
        setLineHeight(percent);
      } else if (rect.top > triggerPoint) {
        // Timeline hasn't reached trigger point yet
        setLineHeight(0);
      } else if (rect.bottom < 0) {
        // Timeline is completely scrolled past
        setLineHeight(100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 py-16 px-4">
      <h1 className="text-5xl font-bold text-center mb-5 text-white" style={{"fontSize" : "40px" , "fontWeight" : "bolder"}}>Road Map</h1>


      <div ref={timelineRef} className="max-w-6xl mx-auto relative" style={{ paddingTop: '40px', paddingBottom: '40px', minHeight: '200vh' }}>
        {/* Gray background line */}
        <div style={{
          position: 'absolute',
          left: '50%',
          top: "125%",
          height: '105%',
          width: '5px',
          backgroundColor: '#4b5563',
          marginLeft: '-2px',
          zIndex: 1
        }}></div>

        {/* Animated colored line */}
        <div style={{
          position: 'absolute',
          left: '50%',
               top: "130%",
          width: '4px',
          height: `${lineHeight}%`,
          background: 'var( --back_ground_color_line)',
          marginLeft: '-2px',
          transition: 'height 0.5s ease-out',
          boxShadow: '0 0 30px rgba(139, 92, 246, 1), 0 0 60px rgba(139, 92, 246, 0.5)',
          zIndex: 2
        }}></div>

        {/* Timeline items */}
        {timelineData.map((item, idx) => {
          const Icon = item.icon;
          const isLeft = idx % 2 === 0;
          const delay = idx * 0.2;

          return (
            <div key={idx} style={{ marginBottom: '80px', position: 'relative' }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative'
              }}>
                {/* Left content */}
                <div style={{ 
                  width: '45%', 
                  textAlign: isLeft ? 'right' : 'left',
                  paddingRight: isLeft ? '40px' : '0',
                  paddingLeft: isLeft ? '0' : '0',
                  order: 1
                }}>
                  {isLeft && (
                    <div 
                      className="timeline-card"
                      style={{
                        background: 'transparent',
                        padding: '24px',
                        borderRadius: '12px',
                        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                        animation: `slideInLeft 0.8s ease-out ${delay}s both`
                      }}
                    >
                    
                      {/* <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '8px', color: '#111' }}>
                        {item.title}
                      </h3>
                      <p style={{ color: '#6b7280', fontSize: '14px' }}>{item.desc}</p> */}
                                            <FaRegImage size={"50px"} style={{"width" : "500px" , "height" : "200px"}}   />


                    </div>
                  )}
                </div>

                {/* Center icon */}
                <div style={{ 
                  width: '10%', 
                  display: 'flex', 
                  justifyContent: 'center',
                  zIndex: 10,
                  order: 2
                }}>
                  <div style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    background: 'var(--button_in_main_background)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 4px 12px rgba(59, 130, 246, 0.4)',
                    animation: `scaleIn 0.6s ease-out ${delay + 0.3}s both`
                  }}>
                    <Icon size={28} color="white" />
                  </div>
                </div>

                {/* Right content */}
                <div style={{ 
                  width: '45%',
                  textAlign: isLeft ? 'left' : 'right',
                  paddingLeft: !isLeft ? '0' : '0',
                  paddingRight: !isLeft ? '40px' : '0',
                  order: 3
                }}>
                  {!isLeft && (
                    <div 
                      className="timeline-card"
                      style={{
                        background: 'transparent',
                        padding: '24px',
                        borderRadius: '12px',
                        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                        animation: `slideInRight 0.8s ease-out ${delay}s both`
                      }}
                    >
                 
                      {/* <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '8px', color: '#111' }}>
                        {item.title}
                      </h3>
                      
                      <p style={{ color: '#6b7280', fontSize: '14px' }}>{item.desc}</p> */}
                      <FaRegImage size={"50px"} style={{"width" : "500px" , "height" : "200px"}}   />

                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <style>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.3) rotate(180deg);
          }
          to {
            opacity: 1;
            transform: scale(1) rotate(0deg);
          }
        }

        .timeline-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 24px rgba(0,0,0,0.15);
          transition: all 0.3s ease;
        }
      `}</style>
    </div>
  );
}