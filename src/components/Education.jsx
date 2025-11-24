import React from 'react'
import { GraduationCap, BookOpen } from 'lucide-react'

const Education = () => {
  const education = [
    {
      degree: 'B.Tech in AI & Data Science',
      institution: 'Anna University Regional Campus, Coimbatore',
      year: '2022 - 2026',
      grade: 'CGPA: 8.2 (82%)',
      icon: <GraduationCap size={32} />
    },
    {
      degree: 'Higher Secondary (HSC)',
      institution: 'K.G. Matric Higher Secondary School, Annur',
      year: '2022',
      grade: 'Marks: 89%',
      icon: <BookOpen size={32} />
    },
    {
      degree: 'SSLC',
      institution: 'K.G. Matric Higher Secondary School, Annur',
      year: '2020',
      grade: 'Marks: 98%',
      icon: <BookOpen size={32} />
    }
  ]

  return (
    <section id="education" className="section" style={{ background: 'var(--dark-bg)' }}>
      <h2 className="section-title">Education</h2>

      <div style={{
        maxWidth: '900px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        gap: '25px'
      }}>
        {education.map((edu, index) => (
          <div key={index} className="card slide-up" style={{
            animationDelay: `${index * 0.15}s`,
            display: 'flex',
            alignItems: 'flex-start',
            gap: '25px'
          }}>
            <div style={{
              background: 'rgba(37, 99, 235, 0.1)',
              padding: '15px',
              borderRadius: '12px',
              border: '1px solid rgba(37, 99, 235, 0.2)',
              color: 'var(--primary-blue)'
            }}>
              {edu.icon}
            </div>

            <div style={{ flex: 1 }}>
              <h3 style={{
                fontSize: '1.4rem',
                fontWeight: '700',
                marginBottom: '8px',
                color: 'var(--text-primary)'
              }}>
                {edu.degree}
              </h3>

              <p style={{
                fontSize: '1.1rem',
                color: 'var(--primary-blue)',
                fontWeight: '600',
                marginBottom: '5px'
              }}>
                {edu.institution}
              </p>

              <div style={{
                display: 'flex',
                gap: '20px',
                flexWrap: 'wrap',
                marginTop: '10px'
              }}>
                <span style={{
                  color: 'var(--text-muted)',
                  fontSize: '0.95rem'
                }}>
                  {edu.year}
                </span>
                <span style={{
                  color: 'var(--accent-blue)',
                  fontSize: '0.95rem',
                  fontWeight: '600'
                }}>
                  {edu.grade}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Education
