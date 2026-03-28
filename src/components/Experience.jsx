import React, { useState } from 'react'
import { Briefcase, TrendingUp, Calendar, MapPin, Award, X } from 'lucide-react'

import cloudZooCert from '../assets/Internships/Cloude Zoo.jpg'
import codeGalattaCert from '../assets/Internships/Code Galatta.png'

const Experience = () => {
  const [selectedImage, setSelectedImage] = useState(null)

  const experiences = [
    {
      title: 'Artificial Intelligence Intern',
      company: 'Cogtis Technologies Pvt. Ltd. (CodeGalatta)',
      location: 'Chennai',
      duration: 'Mar 2024 - Aug 2024',
      period: '6 Months',
      type: 'Internship',
      color: '#3b82f6',
      gradient: 'linear-gradient(135deg, #2563eb, #3b82f6)',
      certificateImage: codeGalattaCert,
      achievements: [
        'Designed and deployed Flask-based REST APIs to integrate machine learning models for real-time application usage.',
        'Developed ML/NLP components in Python using TensorFlow and PyTorch for speech-related applications.',
        'Built data preprocessing and feature extraction pipelines to support model training and evaluation workflows.',
        'Documented API specifications, input/output formats, and edge cases to improve maintainability and developer onboarding.'
      ],
      impact: 'Flask REST API Integration'
    },
    {
      title: 'Data Analyst Intern',
      company: 'CloudZoo India Softwares',
      location: 'Tiruppur',
      duration: 'Aug 2024 - Sep 2024',
      period: '2 Months',
      type: 'Internship',
      color: '#0ea5e9',
      gradient: 'linear-gradient(135deg, #0ea5e9, #38bdf8)',
      certificateImage: cloudZooCert,
      achievements: [
        'Processed and analyzed 100,000+ records using Python (Pandas, NumPy), improving dataset consistency by 30%.',
        'Developed automated ETL workflows using SQL (MySQL, PostgreSQL) to transform and prepare datasets for analysis.',
        'Automated processing pipelines in Python, reducing manual intervention by 40% and improving turnaround time.',
        'Standardized dataset schemas and data dictionaries to improve data usability and reduce downstream integration issues.'
      ],
      impact: '40% Pipeline Automation'
    }
  ]

  return (
    <section id="experience" className="section" style={{ 
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '60px 30px'
    }}>
      {/* Header */}
      <div className="fade-in-up" style={{ textAlign: 'center', marginBottom: '30px' }}>
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
          <Briefcase size={18} color="var(--primary-blue)" />
          <span style={{
            fontSize: '0.85rem',
            fontWeight: '700',
            color: 'var(--primary-blue)',
            letterSpacing: '0.5px'
          }}>
            7 MONTHS PROFESSIONAL EXPERIENCE
          </span>
        </div>
        <h2 className="section-title" style={{ 
          marginBottom: '5px',
          fontSize: 'clamp(1.8rem, 4vw, 2.3rem)'
        }}>
          Professional <span className="section-title-accent">Experience</span>
        </h2>
        <p className="section-subtitle" style={{ 
          marginBottom: '0',
          fontSize: '0.95rem'
        }}>
          Real-world backend and data engineering impact with measurable results
        </p>
      </div>

      {/* Experience Cards - Side by Side */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '25px',
        maxWidth: '1200px',
        margin: '0 auto',
        width: '100%'
      }}
      className="experience-grid">
        {experiences.map((exp, idx) => (
          <div
            key={idx}
            className="card fade-in-up"
            style={{
              animationDelay: `${idx * 0.15}s`,
              position: 'relative',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              padding: '0'
            }}
          >
            {/* Certificate Banner - Clickable */}
            <div 
              style={{
                width: '100%',
                height: '160px',
                background: exp.certificateImage 
                  ? `url(${exp.certificateImage}) center/cover` 
                  : exp.gradient,
                position: 'relative',
                cursor: 'pointer',
                overflow: 'hidden'
              }}
              onClick={(e) => {
                e.stopPropagation()
                if (exp.certificateImage) {
                  setSelectedImage(exp.certificateImage)
                }
              }}
            >
              {/* Impact Badge */}
              <div style={{
                position: 'absolute',
                top: '12px',
                right: '12px',
                background: exp.gradient,
                color: 'white',
                padding: '6px 14px',
                borderRadius: '18px',
                fontSize: '0.7rem',
                fontWeight: '800',
                boxShadow: 'var(--shadow-lg)',
                display: 'flex',
                alignItems: 'center',
                gap: '5px'
              }}>
                <Award size={12} />
                {exp.impact}
              </div>

              {/* Type Badge */}
              <div style={{
                position: 'absolute',
                top: '12px',
                left: '12px',
                background: 'rgba(255,255,255,0.95)',
                color: exp.color,
                padding: '5px 12px',
                borderRadius: '15px',
                fontSize: '0.7rem',
                fontWeight: '800',
                boxShadow: 'var(--shadow-md)'
              }}>
                {exp.type}
              </div>

              {/* Hover overlay */}
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'rgba(0,0,0,0.5)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                opacity: 0,
                transition: 'opacity 0.3s'
              }}
              className="cert-overlay">
                <span style={{
                  color: 'white',
                  fontSize: '0.85rem',
                  fontWeight: '700'
                }}>
                  🔍 Click to view certificate
                </span>
              </div>
            </div>

            {/* Content */}
            <div style={{ padding: '20px' }}>
              {/* Header Section */}
              <div style={{ marginBottom: '18px' }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  marginBottom: '12px'
                }}>
                  <div style={{
                    width: '50px',
                    height: '50px',
                    background: exp.gradient,
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: `0 8px 20px ${exp.color}30`,
                    flexShrink: 0
                  }}>
                    <Briefcase size={24} color="white" />
                  </div>

                  <div style={{ flex: 1, minWidth: 0 }}>
                    <h3 style={{
                      fontSize: '1.2rem',
                      fontWeight: '800',
                      color: 'var(--text-primary)',
                      marginBottom: '3px',
                      lineHeight: 1.2
                    }}>
                      {exp.title}
                    </h3>
                    <p style={{
                      fontSize: '0.95rem',
                      fontWeight: '700',
                      color: exp.color,
                      margin: 0,
                      lineHeight: 1.2
                    }}>
                      {exp.company}
                    </p>
                  </div>
                </div>

                {/* Meta Info */}
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '8px'
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px',
                    background: 'var(--light-gray)',
                    padding: '5px 10px',
                    borderRadius: '15px',
                    border: '1px solid var(--border-gray)',
                    fontSize: '0.75rem',
                    fontWeight: '600',
                    color: 'var(--text-secondary)'
                  }}>
                    <Calendar size={12} color={exp.color} />
                    {exp.duration}
                  </div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px',
                    background: 'var(--light-gray)',
                    padding: '5px 10px',
                    borderRadius: '15px',
                    border: '1px solid var(--border-gray)',
                    fontSize: '0.75rem',
                    fontWeight: '600',
                    color: 'var(--text-secondary)'
                  }}>
                    <MapPin size={12} color={exp.color} />
                    {exp.location}
                  </div>
                  <div style={{
                    background: exp.gradient,
                    color: 'white',
                    padding: '5px 10px',
                    borderRadius: '15px',
                    fontSize: '0.75rem',
                    fontWeight: '700'
                  }}>
                    {exp.period}
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div style={{
                height: '2px',
                background: 'var(--border-gray)',
                marginBottom: '15px'
              }} />

              {/* Achievements */}
              <div>
                <h4 style={{
                  fontSize: '0.8rem',
                  fontWeight: '700',
                  color: 'var(--text-muted)',
                  marginBottom: '10px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px'
                }}>
                  Key Achievements
                </h4>
                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px'
                }}>
                  {exp.achievements.map((achievement, achIdx) => (
                    <li key={achIdx} style={{
                      display: 'flex',
                      gap: '8px',
                      color: 'var(--text-secondary)',
                      lineHeight: '1.5',
                      fontSize: '0.85rem'
                    }}>
                      <TrendingUp
                        size={14}
                        style={{
                          color: exp.color,
                          flexShrink: 0,
                          marginTop: '3px'
                        }}
                      />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
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
        animationDelay: '0.3s'
      }}>
        {[
          { label: 'Total Experience', value: '7 Months', color: '#3b82f6' },
          { label: 'Companies', value: '2', color: '#10b981' },
          { label: 'MiniProjects', value: '13+', color: '#f59e0b' }
        ].map((stat, idx) => (
          <div key={idx} style={{
            textAlign: 'center',
            padding: '12px 20px',
            background: 'var(--primary-white)',
            border: '2px solid var(--border-gray)',
            borderRadius: '12px',
            minWidth: '120px',
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

      {/* Certificate Image Popup */}
      {selectedImage && (
        <div
          className="image-modal"
          onClick={() => setSelectedImage(null)}
          style={{ 
            padding: '20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: 'relative',
              maxWidth: '95vw',
              maxHeight: '95vh',
              background: 'var(--primary-white)',
              borderRadius: '16px',
              padding: '15px',
              boxShadow: 'var(--shadow-2xl)'
            }}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                background: 'rgba(0,0,0,0.8)',
                border: 'none',
                borderRadius: '50%',
                width: '45px',
                height: '45px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                zIndex: 10,
                transition: 'var(--transition)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(0,0,0,1)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(0,0,0,0.8)'
              }}
            >
              <X size={24} color="white" />
            </button>

            {/* Full Certificate Image */}
            <img 
              src={selectedImage}
              alt="Internship Certificate"
              style={{
                width: '100%',
                height: 'auto',
                maxHeight: '90vh',
                objectFit: 'contain',
                borderRadius: '12px',
                display: 'block'
              }}
            />

            {/* Click to Close Hint */}
            <p style={{
              textAlign: 'center',
              fontSize: '0.85rem',
              color: 'var(--text-muted)',
              marginTop: '12px',
              fontWeight: '600'
            }}>
              Click outside or press ✕ to close
            </p>
          </div>
        </div>
      )}

      <style>{`
        .card:hover .cert-overlay {
          opacity: 1 !important;
        }

        @media (max-width: 968px) {
          .experience-grid {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
          #experience {
            min-height: auto !important;
            padding: 50px 15px !important;
          }
        }
      `}</style>
    </section>
  )
}

export default Experience
