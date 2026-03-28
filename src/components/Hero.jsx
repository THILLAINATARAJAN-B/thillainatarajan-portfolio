import React from 'react'
import { Github, Linkedin, Mail, ArrowDown, Download } from 'lucide-react'
import profilePic from '../assets/profile.jpg';
import resume from '../assets/documents/resume.pdf'

const Hero = () => {
  return (
    <section id="hero" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '100px 30px 60px',
      position: 'relative',
      overflow: 'hidden',
      background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 50%, #f0f9ff 100%)'
    }}>
      {/* Subtle Background Elements */}
      <div style={{
        position: 'absolute', top: '15%', right: '8%',
        width: '350px', height: '350px',
        background: 'radial-gradient(circle, rgba(37, 99, 235, 0.06) 0%, transparent 70%)',
        borderRadius: '50%', animation: 'float 6s ease-in-out infinite', zIndex: 0
      }} />
      <div style={{
        position: 'absolute', bottom: '15%', left: '5%',
        width: '280px', height: '280px',
        background: 'radial-gradient(circle, rgba(14, 165, 233, 0.05) 0%, transparent 70%)',
        borderRadius: '50%', animation: 'float 8s ease-in-out infinite',
        animationDelay: '1s', zIndex: 0
      }} />

      <div style={{ maxWidth: '1300px', width: '100%', position: 'relative', zIndex: 1 }}>

        {/* Main Content Grid */}
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 400px',
          gap: '50px', alignItems: 'center', marginBottom: '40px'
        }} className="hero-grid">

          {/* Left Content */}
          <div>
            {/* Status Badge */}
            <div className="fade-in" style={{ animationDelay: '0.1s' }}>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: '10px',
                background: 'linear-gradient(135deg, #dbeafe, #bfdbfe)',
                padding: '8px 18px', borderRadius: '50px', marginBottom: '20px',
                border: '2px solid var(--primary-blue)'
              }}>
                <div style={{
                  width: '8px', height: '8px', background: '#10b981',
                  borderRadius: '50%', animation: 'pulse 2s ease-in-out infinite'
                }} />
                <span style={{
                  fontSize: '0.85rem', fontWeight: '700',
                  color: 'var(--primary-blue)', letterSpacing: '0.5px'
                }}>
                  AVAILABLE FOR OPPORTUNITIES
                </span>
              </div>
            </div>

            {/* Main Heading */}
            <div className="slide-in-left" style={{ animationDelay: '0.2s' }}>
              <h1 style={{
                fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', fontWeight: '900',
                marginBottom: '15px', lineHeight: '1.1',
                color: 'var(--text-primary)', letterSpacing: '-1.5px'
              }}>
                Hi, I'm{' '}
                <span style={{
                  background: 'linear-gradient(135deg, var(--primary-blue), var(--sky-blue))',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'
                }}>
                  Thillainatarajan B
                </span>
              </h1>
            </div>

            {/* Subtitle — Java First */}
            <div className="slide-in-left" style={{ animationDelay: '0.3s' }}>
              <h2 style={{
                fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)', fontWeight: '700',
                color: 'var(--text-secondary)', marginBottom: '20px', lineHeight: '1.3'
              }}>
                Java Developer • Backend Engineer
              </h2>
            </div>

            {/* Description — Java-first, Python + AI as supporting */}
            <div className="fade-in-up" style={{ animationDelay: '0.4s' }}>
              <p style={{
                fontSize: '1rem', color: 'var(--text-muted)',
                marginBottom: '25px', lineHeight: '1.7', maxWidth: '580px'
              }}>
                I build <strong style={{ color: 'var(--primary-blue)' }}>scalable backend systems</strong> and{' '}
                <strong style={{ color: 'var(--primary-blue)' }}>REST APIs</strong> using{' '}
                <strong style={{ color: 'var(--primary-blue)' }}>Java and Spring Boot</strong>, with hands-on
                experience in <strong style={{ color: 'var(--primary-blue)' }}>full-stack development</strong> using Angular.
                I also leverage <strong style={{ color: 'var(--primary-blue)' }}>Python</strong> for data pipelines
                and bring additional exposure to{' '}
                <strong style={{ color: 'var(--primary-blue)' }}>AI/ML integrations</strong> — delivering
                production-ready solutions end to end.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="fade-in" style={{
              animationDelay: '0.5s', display: 'flex',
              gap: '15px', flexWrap: 'wrap', marginBottom: '25px'
            }}>
              <a href="#contact" className="btn btn-primary" style={{ fontSize: '0.95rem', padding: '12px 28px' }}>
                Let's Connect
              </a>
              <a href="#projects" className="btn btn-secondary" style={{ fontSize: '0.95rem', padding: '12px 28px' }}>
                View My Work
              </a>
              <a href={resume} download className="btn btn-secondary" style={{ fontSize: '0.95rem', padding: '12px 28px' }}>
                <Download size={18} />
                Resume
              </a>
            </div>

            {/* Social Links */}
            <div className="fade-in" style={{ animationDelay: '0.6s', display: 'flex', gap: '15px' }}>
              {[
                { icon: Github, link: 'https://github.com/THILLAINATARAJAN-B', label: 'GitHub' },
                { icon: Linkedin, link: 'https://www.linkedin.com/in/thillainatarajan-balamurugan', label: 'LinkedIn' },
                { icon: Mail, link: 'mailto:thillainatarajan001@gmail.com', label: 'Email' }
              ].map((social, idx) => (
                <a key={idx} href={social.link}
                  target={social.icon !== Mail ? "_blank" : undefined}
                  rel={social.icon !== Mail ? "noopener noreferrer" : undefined}
                  title={social.label}
                  style={{
                    width: '45px', height: '45px', display: 'flex',
                    alignItems: 'center', justifyContent: 'center',
                    background: 'var(--primary-white)', border: '2px solid var(--border-gray)',
                    borderRadius: '10px', color: 'var(--text-secondary)',
                    transition: 'all 0.3s ease', boxShadow: 'var(--shadow-sm)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--primary-blue)'
                    e.currentTarget.style.color = 'var(--primary-blue)'
                    e.currentTarget.style.transform = 'translateY(-5px)'
                    e.currentTarget.style.boxShadow = 'var(--shadow-lg)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border-gray)'
                    e.currentTarget.style.color = 'var(--text-secondary)'
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.boxShadow = 'var(--shadow-sm)'
                  }}>
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="scale-in" style={{
            animationDelay: '0.4s', display: 'flex',
            justifyContent: 'center', alignItems: 'center'
          }}>
            <div style={{ position: 'relative', width: '100%', maxWidth: '400px' }}>

              <div style={{ position: 'relative', width: '280px', height: '280px', margin: '0 auto' }}>
                <div style={{
                  position: 'absolute', inset: '-15px',
                  background: 'linear-gradient(135deg, var(--primary-blue), var(--sky-blue))',
                  borderRadius: '50%', opacity: 0.08, animation: 'pulse 3s ease-in-out infinite'
                }} />
                <div style={{
                  position: 'relative', width: '100%', height: '100%',
                  borderRadius: '50%', overflow: 'hidden',
                  border: '6px solid var(--primary-white)',
                  boxShadow: '0 20px 40px rgba(37, 99, 235, 0.15)',
                  background: 'linear-gradient(135deg, var(--light-gray), var(--primary-white))', zIndex: 2
                }}>
                  <img src={profilePic} alt="Thillainatarajan B - Java Backend Developer"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    onError={(e) => {
                      e.target.style.display = 'none'
                      e.target.parentElement.innerHTML = `
                        <div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg, var(--primary-blue), var(--light-blue));color:white;font-size:5rem;font-weight:900;letter-spacing:-2px;">TB</div>
                      `
                    }} />
                </div>

                {/* Floating Badge — Java First */}
                <div style={{
                  position: 'absolute', top: '5%', right: '-20px',
                  background: 'var(--primary-white)', padding: '10px 16px',
                  borderRadius: '40px', boxShadow: 'var(--shadow-xl)',
                  border: '2px solid var(--primary-blue)', fontWeight: '700',
                  fontSize: '0.8rem', color: 'var(--primary-blue)',
                  animation: 'float 3s ease-in-out infinite', zIndex: 3, whiteSpace: 'nowrap'
                }}>
                  ☕ Java Developer
                </div>

                {/* Floating Badge — Backend */}
                <div style={{
                  position: 'absolute', bottom: '8%', left: '-25px',
                  background: 'var(--primary-white)', padding: '10px 16px',
                  borderRadius: '40px', boxShadow: 'var(--shadow-xl)',
                  border: '2px solid var(--sky-blue)', fontWeight: '700',
                  fontSize: '0.8rem', color: 'var(--sky-blue)',
                  animation: 'float 4s ease-in-out infinite', animationDelay: '1s',
                  zIndex: 3, whiteSpace: 'nowrap'
                }}>
                  ⚡ Backend Engineer
                </div>
              </div>

              {/* Skills Banner */}
              <div style={{
                marginTop: '30px', background: 'var(--primary-white)',
                border: '2px solid var(--border-gray)', borderRadius: '16px',
                padding: '20px', boxShadow: 'var(--shadow-lg)',
                textAlign: 'center', position: 'relative', overflow: 'hidden'
              }}>
                <div style={{
                  position: 'absolute', top: 0, right: 0, width: '80px', height: '80px',
                  background: 'linear-gradient(135deg, var(--primary-blue), var(--sky-blue))',
                  opacity: 0.1, borderRadius: '0 16px 0 100%'
                }} />

                {/* Skills Tags — Java-first order */}
                <div style={{
                  width: '100%', height: '120px', borderRadius: '12px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: '15px'
                }}>
                  <div style={{ width: '100%' }}>
                    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '8px' }}>
                      {['Java', 'Spring Boot', 'Angular'].map(skill => (
                        <span key={skill} style={{
                          background: 'var(--primary-blue)', color: 'white',
                          padding: '6px 14px', borderRadius: '20px',
                          fontSize: '0.75rem', fontWeight: '700'
                        }}>{skill}</span>
                      ))}
                    </div>
                    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', justifyContent: 'center' }}>
                      {['Python', 'REST APIs', 'MySQL'].map(skill => (
                        <span key={skill} style={{
                          background: 'var(--sky-blue)', color: 'white',
                          padding: '6px 14px', borderRadius: '20px',
                          fontSize: '0.75rem', fontWeight: '700'
                        }}>{skill}</span>
                      ))}
                    </div>
                  </div>
                </div>

                <p style={{
                  fontSize: '0.85rem', fontWeight: '700',
                  color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.5px'
                }}>
                  Core Technologies
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats Row */}
        <div className="fade-in" style={{
          animationDelay: '0.7s',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
          gap: '20px',
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          {[
            { value: '6+', label: 'Completed Projects' },
            { value: '4', label: 'National Hackathons' },
            { value: '2', label: 'International Hackathons' },
            { value: '3', label: 'Hackathon Wins' },
            { value: '8.2', label: 'CGPA' },
            { value: '2', label: 'Internships' }
          ].map((stat, idx) => (
            <div key={idx} style={{
              textAlign: 'center',
              padding: '15px',
              background: 'var(--primary-white)',
              border: '2px solid var(--border-gray)',
              borderRadius: '12px',
              transition: 'var(--transition)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--primary-blue)'
              e.currentTarget.style.transform = 'translateY(-5px)'
              e.currentTarget.style.boxShadow = 'var(--shadow-lg)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--border-gray)'
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = 'none'
            }}>
              <div style={{
                fontSize: '1.8rem',
                fontWeight: '900',
                color: 'var(--primary-blue)',
                marginBottom: '4px'
              }}>
                {stat.value}
              </div>
              <div style={{
                fontSize: '0.8rem',
                fontWeight: '600',
                color: 'var(--text-muted)',
                textTransform: 'uppercase',
                letterSpacing: '0.5px'
              }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>


      {/* Scroll Indicator */}
      <a href="#about" style={{
        position: 'absolute', bottom: '25px', left: '50%',
        transform: 'translateX(-50%)', display: 'flex',
        flexDirection: 'column', alignItems: 'center', gap: '8px',
        color: 'var(--text-muted)', textDecoration: 'none',
        animation: 'bounce 2s infinite', fontSize: '0.75rem',
        fontWeight: '600', opacity: 0.7
      }}>
        <span>SCROLL</span>
        <ArrowDown size={20} />
      </a>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(8px); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.08; transform: scale(1); }
          50% { opacity: 0.12; transform: scale(1.05); }
        }
        @media (max-width: 968px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            text-align: center;
            gap: 35px !important;
          }
          .hero-grid > div:first-child { order: 2; }
          .hero-grid > div:last-child { order: 1; }
          .hero-grid > div:first-child > div { align-items: center !important; }
          .hero-grid > div:first-child p { margin-left: auto !important; margin-right: auto !important; }
        }
        @media (max-width: 768px) {
          #hero { padding: 90px 20px 50px !important; }
        }
      `}</style>
    </section>
  )
}

export default Hero
