import React from 'react'
import { GraduationCap, Sparkles, MapPin, Calendar, TrendingUp, Quote } from 'lucide-react'

const About = () => {
  return (
    <section id="about" className="section" style={{ 
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '60px 30px'
    }}>
      {/* Compact Header */}
      <div className="fade-in-up" style={{ textAlign: 'center', marginBottom: '35px' }}>
        <h2 className="section-title" style={{ 
          marginBottom: '8px',
          fontSize: 'clamp(2rem, 4vw, 2.5rem)'
        }}>
          About <span className="section-title-accent">Me</span>
        </h2>
        <p className="section-subtitle" style={{ 
          marginBottom: '0',
          fontSize: '1rem'
        }}>
          Final-year AI & Data Science student architecting intelligent systems
        </p>
      </div>

      {/* Main Content Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1.2fr 1fr',
        gap: '30px',
        maxWidth: '1200px',
        margin: '0 auto',
        width: '100%'
      }}
      className="about-grid">
        {/* Left Column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
          {/* My Journey Card */}
          <div className="card fade-in-up" style={{ 
            animationDelay: '0.1s',
            flex: 1
          }}>
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '12px', 
              marginBottom: '18px' 
            }}>
              <div style={{
                width: '45px',
                height: '45px',
                background: 'linear-gradient(135deg, var(--primary-blue), var(--light-blue))',
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Sparkles size={22} color="white" />
              </div>
              <h3 style={{ 
                fontSize: '1.3rem', 
                fontWeight: '800', 
                color: 'var(--text-primary)',
                margin: 0
              }}>
                My Journey
              </h3>
            </div>
            
            <p style={{ 
              color: 'var(--text-secondary)', 
              lineHeight: '1.65', 
              marginBottom: '14px',
              fontSize: '0.95rem'
            }}>
              As a <strong>B.Tech AI & Data Science</strong> student at <strong>Anna University Regional Campus, Coimbatore</strong>, 
              I specialize in building production-ready AI/ML systems, autonomous agents, and data-driven applications.
            </p>

            <p style={{ 
              color: 'var(--text-secondary)', 
              lineHeight: '1.65', 
              marginBottom: '14px',
              fontSize: '0.95rem'
            }}>
              My passion lies in <strong style={{ color: 'var(--primary-blue)' }}>solving complex problems</strong> through 
              <strong style={{ color: 'var(--primary-blue)' }}> Machine Learning, Deep Learning, and NLP</strong>. 
              To showcase these AI capabilities, I mastered <strong style={{ color: 'var(--primary-blue)' }}>full-stack development</strong> — 
              not as my core focus, but as a <strong style={{ color: 'var(--primary-blue)' }}>powerful tool</strong> that demonstrates my 
              <strong style={{ color: 'var(--primary-blue)' }}> ability to learn rapidly and ship complete solutions</strong>.
            </p>

            <p style={{ 
              color: 'var(--text-secondary)', 
              lineHeight: '1.65',
              fontSize: '0.95rem',
              marginBottom: '18px'
            }}>
              I thrive in <strong style={{ color: 'var(--primary-blue)' }}>fast-paced environments</strong>, 
              bringing a unique blend of <strong style={{ color: 'var(--primary-blue)' }}>deep AI expertise</strong> and 
              <strong style={{ color: 'var(--primary-blue)' }}> versatile engineering skills</strong> to deliver 
              <strong style={{ color: 'var(--primary-blue)' }}> end-to-end AI-powered products</strong>.
            </p>

            {/* Personal Info Badges */}
            <div style={{ 
              paddingTop: '16px',
              borderTop: '2px solid var(--border-gray)',
              display: 'flex',
              flexWrap: 'wrap',
              gap: '10px'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                background: 'var(--light-gray)',
                padding: '6px 14px',
                borderRadius: '25px',
                border: '2px solid var(--border-gray)'
              }}>
                <MapPin size={14} color="var(--primary-blue)" />
                <span style={{ 
                  fontSize: '0.8rem', 
                  fontWeight: '600',
                  color: 'var(--text-secondary)'
                }}>
                  Coimbatore, TN
                </span>
              </div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                background: 'var(--light-gray)',
                padding: '6px 14px',
                borderRadius: '25px',
                border: '2px solid var(--border-gray)'
              }}>
                <Calendar size={14} color="var(--primary-blue)" />
                <span style={{ 
                  fontSize: '0.8rem', 
                  fontWeight: '600',
                  color: 'var(--text-secondary)'
                }}>
                  20 Years Old
                </span>
              </div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                background: 'linear-gradient(135deg, var(--primary-blue), var(--light-blue))',
                padding: '6px 14px',
                borderRadius: '25px',
                border: '2px solid var(--primary-blue)'
              }}>
                <TrendingUp size={14} color="white" />
                <span style={{ 
                  fontSize: '0.8rem', 
                  fontWeight: '700',
                  color: 'white'
                }}>
                  Graduating 2026
                </span>
              </div>
            </div>
          </div>

          {/* Motivational Quote Card */}
          <div className="card fade-in-up" style={{ 
            animationDelay: '0.3s',
            background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)',
            border: '2px solid var(--primary-blue)',
            position: 'relative',
            padding: '20px 25px'
          }}>
            <Quote size={32} color="var(--primary-blue)" style={{ 
              opacity: 0.2,
              position: 'absolute',
              top: '10px',
              left: '15px'
            }} />
            <div style={{ position: 'relative', zIndex: 1 }}>
              <p style={{
                fontSize: '1.05rem',
                fontWeight: '600',
                color: 'var(--text-primary)',
                lineHeight: '1.6',
                marginBottom: '10px',
                fontStyle: 'italic'
              }}>
                "The best way to predict the future is to invent it. I build AI systems that don't just adapt to tomorrow—they create it."
              </p>
              <p style={{
                fontSize: '0.85rem',
                fontWeight: '700',
                color: 'var(--primary-blue)',
                textAlign: 'right'
              }}>
                — My Philosophy
              </p>
            </div>
          </div>
        </div>

        {/* Right Column - Education */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
          {/* Education Card */}
          <div className="card card-highlight fade-in-up" style={{ 
            animationDelay: '0.2s',
            flex: 1
          }}>
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '12px', 
              marginBottom: '20px' 
            }}>
              <div style={{
                width: '45px',
                height: '45px',
                background: 'linear-gradient(135deg, var(--primary-blue), var(--sky-blue))',
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <GraduationCap size={22} color="white" />
              </div>
              <h3 style={{ 
                fontSize: '1.3rem', 
                fontWeight: '800', 
                color: 'var(--text-primary)',
                margin: 0
              }}>
                Education
              </h3>
            </div>

            {/* Undergraduate */}
            <div style={{ 
              marginBottom: '18px',
              padding: '16px',
              background: 'var(--primary-white)',
              borderRadius: '12px',
              border: '2px solid var(--primary-blue)'
            }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                marginBottom: '10px',
                flexWrap: 'wrap',
                gap: '8px'
              }}>
                <h4 style={{
                  fontSize: '1.05rem',
                  fontWeight: '800',
                  color: 'var(--primary-blue)',
                  margin: 0
                }}>
                  B.Tech in AI & Data Science
                </h4>
                <span style={{
                  background: 'var(--primary-blue)',
                  color: 'white',
                  padding: '4px 10px',
                  borderRadius: '15px',
                  fontSize: '0.75rem',
                  fontWeight: '700'
                }}>
                  2022 - 2026
                </span>
              </div>
              <p style={{
                color: 'var(--text-secondary)',
                fontWeight: '600',
                marginBottom: '8px',
                fontSize: '0.88rem'
              }}>
                Anna University Regional Campus, Coimbatore
              </p>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                background: 'linear-gradient(135deg, #dbeafe, #bfdbfe)',
                padding: '5px 12px',
                borderRadius: '20px'
              }}>
                <TrendingUp size={14} color="var(--primary-blue)" />
                <span style={{
                  color: 'var(--primary-blue)',
                  fontSize: '0.82rem',
                  fontWeight: '700'
                }}>
                  CGPA: 8.2 / 10.0 (~82%)
                </span>
              </div>
            </div>

            {/* HSC */}
            <div style={{ 
              marginBottom: '18px',
              padding: '14px',
              background: 'var(--light-gray)',
              borderRadius: '10px',
              border: '2px solid var(--border-gray)'
            }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '8px',
                flexWrap: 'wrap',
                gap: '6px'
              }}>
                <h4 style={{
                  fontSize: '0.95rem',
                  fontWeight: '700',
                  color: 'var(--text-primary)',
                  margin: 0
                }}>
                  Higher Secondary (HSC)
                </h4>
                <span style={{
                  background: 'var(--primary-white)',
                  color: 'var(--text-primary)',
                  padding: '3px 10px',
                  borderRadius: '12px',
                  fontSize: '0.72rem',
                  fontWeight: '700',
                  border: '2px solid var(--border-gray)'
                }}>
                  2022
                </span>
              </div>
              <p style={{
                color: 'var(--text-secondary)',
                fontWeight: '600',
                fontSize: '0.84rem',
                marginBottom: '4px'
              }}>
                K.G. Matric HSS, Annur
              </p>
              <p style={{
                color: 'var(--text-muted)',
                fontSize: '0.8rem',
                fontWeight: '600'
              }}>
                <strong style={{ color: 'var(--primary-blue)' }}>Score:</strong> 89%
              </p>
            </div>

            {/* SSLC */}
            <div style={{ 
              padding: '14px',
              background: 'var(--light-gray)',
              borderRadius: '10px',
              border: '2px solid var(--border-gray)'
            }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '8px',
                flexWrap: 'wrap',
                gap: '6px'
              }}>
                <h4 style={{
                  fontSize: '0.95rem',
                  fontWeight: '700',
                  color: 'var(--text-primary)',
                  margin: 0
                }}>
                  Secondary (SSLC)
                </h4>
                <span style={{
                  background: 'var(--primary-white)',
                  color: 'var(--text-primary)',
                  padding: '3px 10px',
                  borderRadius: '12px',
                  fontSize: '0.72rem',
                  fontWeight: '700',
                  border: '2px solid var(--border-gray)'
                }}>
                  2020
                </span>
              </div>
              <p style={{
                color: 'var(--text-secondary)',
                fontWeight: '600',
                fontSize: '0.84rem',
                marginBottom: '4px'
              }}>
                K.G. Matric HSS, Annur
              </p>
              <p style={{
                color: 'var(--text-muted)',
                fontSize: '0.8rem',
                fontWeight: '600'
              }}>
                <strong style={{ color: 'var(--primary-blue)' }}>Score:</strong> 98%
              </p>
            </div>
          </div>

          {/* Core Values Card */}
          <div className="card fade-in-up" style={{ 
            animationDelay: '0.4s',
            background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
            padding: '18px 20px'
          }}>
            <h4 style={{
              fontSize: '1rem',
              fontWeight: '700',
              color: 'var(--text-primary)',
              marginBottom: '12px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              <div style={{
                width: '6px',
                height: '6px',
                background: 'var(--primary-blue)',
                borderRadius: '50%'
              }} />
              Core Values
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {[
                '🎯 Results-Driven Excellence',
                '⚡ Rapid Learning & Adaptation',
                '🚀 Innovation Through AI',
                '🤝 Collaborative Problem Solving'
              ].map((value, idx) => (
                <div key={idx} style={{
                  fontSize: '0.85rem',
                  color: 'var(--text-secondary)',
                  fontWeight: '600',
                  padding: '6px 10px',
                  background: 'var(--light-gray)',
                  borderRadius: '8px',
                  border: '1px solid var(--border-gray)'
                }}>
                  {value}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 968px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
          #about {
            min-height: auto !important;
            padding: 50px 20px !important;
          }
        }
      `}</style>
    </section>
  )
}

export default About
