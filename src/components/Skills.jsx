import React from 'react'
import { TechIcon } from '../assets/TechIcons'
import { Brain, Code2, Database, Globe, Wrench, Zap } from 'lucide-react'

const Skills = () => {
  const skillCategories = [
    {
      title: 'AI & Machine Learning',
      icon: Brain,
      color: '#3b82f6',
      gradient: 'linear-gradient(135deg, #3b82f6, #2563eb)',
      skills: [
        'TensorFlow', 'PyTorch', 'Scikit-Learn', 'NLP', 'Computer Vision', 
        'LLMs', 'RAG', 'YOLO', 'OpenCV', 'Transformers'
      ]
    },
    {
      title: 'Programming Languages',
      icon: Code2,
      color: '#10b981',
      gradient: 'linear-gradient(135deg, #10b981, #059669)',
      skills: [
        'Python', 'JavaScript', 'Java', 'SQL', 'TypeScript'
      ]
    },
    {
      title: 'Web Development',
      icon: Globe,
      color: '#f59e0b',
      gradient: 'linear-gradient(135deg, #f59e0b, #d97706)',
      skills: [
        'React', 'Node.js', 'Express', 'Flask', 'FastAPI', 
        'MongoDB', 'PostgreSQL', 'REST API', 'HTML/CSS'
      ]
    },
    {
      title: 'Data & Analytics',
      icon: Database,
      color: '#8b5cf6',
      gradient: 'linear-gradient(135deg, #8b5cf6, #7c3aed)',
      skills: [
        'Power BI', 'Pandas', 'NumPy', 'Matplotlib', 'Excel', 
        'Data Visualization', 'Statistical Analysis'
      ]
    },
    {
      title: 'DevOps & Tools',
      icon: Wrench,
      color: '#ec4899',
      gradient: 'linear-gradient(135deg, #ec4899, #db2777)',
      skills: [
        'Git/GitHub', 'Docker', 'CI/CD', 'Linux', 'VS Code', 
        'Jupyter', 'Postman', 'Agile/Scrum'
      ]
    },
    {
      title: 'Specialized Skills',
      icon: Zap,
      color: '#06b6d4',
      gradient: 'linear-gradient(135deg, #06b6d4, #0891b2)',
      skills: [
        'Speech Recognition', 'Audio Processing', 'Mobile Development (Android)', 
        'Automation', 'API Integration', 'Cloud Platforms'
      ]
    }
  ]

  return (
    <section id="skills" className="section section-alt" style={{ 
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '60px 30px'
    }}>
      {/* Header */}
      <div className="fade-in-up" style={{ textAlign: 'center', marginBottom: '25px' }}>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '10px',
          background: 'linear-gradient(135deg, #dbeafe, #bfdbfe)',
          padding: '8px 20px',
          borderRadius: '30px',
          marginBottom: '15px',
          border: '2px solid var(--primary-blue)'
        }}>
          <Code2 size={18} color="var(--primary-blue)" />
          <span style={{
            fontSize: '0.85rem',
            fontWeight: '700',
            color: 'var(--primary-blue)',
            letterSpacing: '0.5px'
          }}>
            FULL-STACK AI/ML DEVELOPER
          </span>
        </div>
        <h2 className="section-title" style={{ 
          marginBottom: '5px',
          fontSize: 'clamp(1.8rem, 4vw, 2.3rem)'
        }}>
          Technical <span className="section-title-accent">Skills</span>
        </h2>
        <p className="section-subtitle" style={{ 
          marginBottom: '0',
          fontSize: '0.95rem'
        }}>
          Comprehensive tech stack for building production-ready AI systems
        </p>
      </div>

      {/* Skills Grid - 3 columns */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '20px',
        maxWidth: '1300px',
        margin: '0 auto',
        width: '100%'
      }}
      className="skills-grid">
        {skillCategories.map((category, idx) => (
          <div
            key={idx}
            className="card fade-in-up"
            style={{ 
              animationDelay: `${idx * 0.1}s`,
              position: 'relative',
              overflow: 'hidden',
              padding: '20px',
              transition: 'var(--transition)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)'
              e.currentTarget.style.boxShadow = 'var(--shadow-2xl)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = 'var(--shadow-md)'
            }}
          >
            {/* Decorative corner */}
            <div style={{
              position: 'absolute',
              top: 0,
              right: 0,
              width: '80px',
              height: '80px',
              background: category.gradient,
              opacity: 0.08,
              borderRadius: '0 0 0 100%'
            }} />

            {/* Header */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '18px'
            }}>
              <div style={{
                width: '50px',
                height: '50px',
                background: category.gradient,
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: `0 8px 20px ${category.color}30`,
                flexShrink: 0
              }}>
                <category.icon size={26} color="white" />
              </div>
              <div style={{ flex: 1 }}>
                <h3 style={{
                  fontSize: '1.1rem',
                  fontWeight: '800',
                  color: 'var(--text-primary)',
                  margin: 0,
                  lineHeight: 1.2
                }}>
                  {category.title}
                </h3>
                <span style={{
                  fontSize: '0.7rem',
                  fontWeight: '600',
                  color: 'var(--text-muted)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px'
                }}>
                  {category.skills.length} Skills
                </span>
              </div>
            </div>

            {/* Divider */}
            <div style={{
              height: '2px',
              background: 'var(--border-gray)',
              marginBottom: '15px'
            }} />

            {/* Skills Tags */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '8px'
            }}>
              {category.skills.map((skill, skillIdx) => (
                <span
                  key={skillIdx}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '5px',
                    background: 'var(--light-gray)',
                    color: 'var(--text-primary)',
                    padding: '6px 12px',
                    borderRadius: '20px',
                    fontSize: '0.8rem',
                    fontWeight: '600',
                    border: '2px solid var(--border-gray)',
                    transition: 'var(--transition)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = category.gradient
                    e.currentTarget.style.color = 'white'
                    e.currentTarget.style.borderColor = category.color
                    e.currentTarget.style.transform = 'translateY(-2px)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'var(--light-gray)'
                    e.currentTarget.style.color = 'var(--text-primary)'
                    e.currentTarget.style.borderColor = 'var(--border-gray)'
                    e.currentTarget.style.transform = 'translateY(0)'
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Summary Stats */}
      <div className="fade-in" style={{
        marginTop: '30px',
        display: 'flex',
        justifyContent: 'center',
        gap: '20px',
        flexWrap: 'wrap',
        animationDelay: '0.6s'
      }}>
        {[
          { label: 'AI/ML Skills', value: '10+', color: '#3b82f6' },
          { label: 'Languages', value: '5', color: '#10b981' },
          { label: 'Frameworks', value: '15+', color: '#f59e0b' },
          { label: 'Total Skills', value: '45+', color: '#8b5cf6' }
        ].map((stat, idx) => (
          <div key={idx} style={{
            textAlign: 'center',
            padding: '12px 20px',
            background: 'var(--primary-white)',
            border: '2px solid var(--border-gray)',
            borderRadius: '12px',
            minWidth: '110px',
            transition: 'var(--transition)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = stat.color
            e.currentTarget.style.transform = 'translateY(-3px)'
            e.currentTarget.style.boxShadow = 'var(--shadow-lg)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = 'var(--border-gray)'
            e.currentTarget.style.transform = 'translateY(0)'
            e.currentTarget.style.boxShadow = 'none'
          }}>
            <div style={{
              fontSize: '1.5rem',
              fontWeight: '900',
              color: stat.color,
              marginBottom: '2px'
            }}>
              {stat.value}
            </div>
            <div style={{
              fontSize: '0.7rem',
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

      <style>{`
        @media (max-width: 1024px) {
          .skills-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 640px) {
          .skills-grid {
            grid-template-columns: 1fr !important;
          }
          #skills {
            min-height: auto !important;
            padding: 50px 15px !important;
          }
        }
      `}</style>
    </section>
  )
}

export default Skills
