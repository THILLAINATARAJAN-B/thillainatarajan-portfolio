import React, { useState } from 'react'
import { Trophy, Award, Medal, X, ExternalLink, Link } from 'lucide-react'

// Import achievement images
import hackBeyondImg from '../assets/Achievements/Hack beyond limit.jpg'
import cepheusImg from '../assets/Achievements/cephus Hackthon.jpg'
import amirthaImg from '../assets/Achievements/Amirtha Team.jpg'
import intelImg from '../assets/Achievements/Intel Team.jpg'

const Achievements = () => {
  const [selectedImage, setSelectedImage] = useState(null)

  const achievements = [
    {
      icon: Trophy,
      title: '🥈 2nd Place',
      event: 'Hack Beyond Limit 2024',
      date: 'November 2024',
      color: '#f59e0b',
      gradient: 'linear-gradient(135deg, #f59e0b, #d97706)',
      image: hackBeyondImg,
      linkedinPost: 'https://www.linkedin.com/posts/thillainatarajan-balamurugan_aiforeducation-machinelearning-hackbeyondlimits-activity-7300356426923741184-zW5N?utm_source=share&utm_medium=member_desktop'
    },
    {
      icon: Medal,
      title: 'Top 5 Finalist',
      event: 'Cepheus Hackathon',
      date: 'January 2025',
      color: '#10b981',
      gradient: 'linear-gradient(135deg, #10b981, #059669)',
      image: cepheusImg,
      linkedinPost: null
    },
    {
      icon: Award,
      title: 'Top 10 Selection',
      event: 'GenAI x GenderTech Hackathon',
      date: 'December 2024 - January 2025',
      color: '#8b5cf6',
      gradient: 'linear-gradient(135deg, #8b5cf6, #7c3aed)',
      image: amirthaImg,
      linkedinPost: null
    },
    {
      icon: Award,
      title: 'Participant',
      event: 'Intel oneAPI Hackathon',
      date: 'March 2024',
      color: '#3b82f6',
      gradient: 'linear-gradient(135deg, #3b82f6, #2563eb)',
      image: intelImg,
      linkedinPost: null
    },
    {
      icon: Medal,
      title: 'Participant',
      event: 'Qloo LLM Hackathon',
      date: 'October 2024',
      color: '#ec4899',
      gradient: 'linear-gradient(135deg, #ec4899, #db2777)',
      image: null,
      devpostLink: 'https://devpost.com/software/mapetizer'
    }
  ]

  return (
    <section id="achievements" className="section section-alt" style={{ 
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
          background: 'linear-gradient(135deg, #fef3c7, #fde68a)',
          padding: '8px 20px',
          borderRadius: '30px',
          marginBottom: '15px',
          border: '2px solid #f59e0b'
        }}>
          <Trophy size={18} color="#d97706" />
          <span style={{
            fontSize: '0.85rem',
            fontWeight: '700',
            color: '#78350f',
            letterSpacing: '0.5px'
          }}>
            5 HACKATHONS • 3 WINS • TOP 10 INTERNATIONAL
          </span>
        </div>
        <h2 className="section-title" style={{ 
          marginBottom: '5px',
          fontSize: 'clamp(1.8rem, 4vw, 2.3rem)'
        }}>
          Achievements & <span className="section-title-accent">Recognition</span>
        </h2>
        <p className="section-subtitle" style={{ 
          marginBottom: '0',
          fontSize: '0.95rem'
        }}>
          Hackathon wins and competitive accomplishments
        </p>
      </div>

      {/* Achievements Grid - 3 columns */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '20px',
        maxWidth: '1200px',
        margin: '0 auto',
        width: '100%'
      }}
      className="achievements-grid">
        {achievements.map((achievement, idx) => (
          <div
            key={idx}
            className="card fade-in-up"
            style={{
              animationDelay: `${idx * 0.1}s`,
              position: 'relative',
              overflow: 'hidden',
              transition: 'var(--transition)',
              padding: '0',
              display: 'flex',
              flexDirection: 'column'
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
            {/* Image Section - Clickable */}
            <div 
              style={{
                width: '100%',
                height: '180px',
                background: achievement.image 
                  ? `url(${achievement.image}) center/cover` 
                  : 'linear-gradient(135deg, #f0f9ff, #e0f2fe)',
                position: 'relative',
                cursor: achievement.image ? 'pointer' : 'default',
                overflow: 'hidden'
              }}
              onClick={(e) => {
                if (achievement.image) {
                  e.stopPropagation()
                  setSelectedImage(achievement.image)
                }
              }}
            >
              {/* Title Badge Overlay */}
              <div style={{
                position: 'absolute',
                top: '12px',
                left: '12px',
                background: achievement.gradient,
                color: 'white',
                padding: '6px 14px',
                borderRadius: '18px',
                fontSize: '0.75rem',
                fontWeight: '800',
                boxShadow: 'var(--shadow-lg)'
              }}>
                {achievement.title}
              </div>

              {/* Icon in corner */}
              <div style={{
                position: 'absolute',
                bottom: '12px',
                right: '12px',
                width: '45px',
                height: '45px',
                background: achievement.gradient,
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: 'var(--shadow-lg)'
              }}>
                <achievement.icon size={24} color="white" />
              </div>

              {/* No Image Placeholder */}
              {!achievement.image && (
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text-muted)'
                }}>
                  <Award size={40} opacity={0.3} />
                  <p style={{ fontSize: '0.8rem', marginTop: '8px', fontWeight: '600' }}>
                    Achievement Photo
                  </p>
                </div>
              )}

              {/* Click to Enlarge hint */}
              {achievement.image && (
                <div style={{
                  position: 'absolute',
                  bottom: '12px',
                  left: '12px',
                  background: 'rgba(0,0,0,0.7)',
                  color: 'white',
                  padding: '4px 10px',
                  borderRadius: '12px',
                  fontSize: '0.7rem',
                  fontWeight: '600',
                  opacity: 0,
                  transition: 'opacity 0.3s'
                }}
                className="enlarge-hint"
              >
                🔍 Click to enlarge
              </div>
              )}
            </div>

            {/* Content Section */}
            <div style={{ padding: '18px' }}>
              {/* Event Name */}
              <h3 style={{
                fontSize: '1.1rem',
                fontWeight: '800',
                color: 'var(--text-primary)',
                marginBottom: '8px',
                lineHeight: '1.3'
              }}>
                {achievement.event}
              </h3>

              {/* Date */}
              <p style={{
                fontSize: '0.8rem',
                color: 'var(--text-muted)',
                marginBottom: '14px',
                fontWeight: '600',
                display: 'flex',
                alignItems: 'center',
                gap: '5px'
              }}>
                📅 {achievement.date}
              </p>

              {/* Action Links */}
              <div style={{
                display: 'flex',
                gap: '10px',
                paddingTop: '12px',
                borderTop: '2px solid var(--border-gray)'
              }}>
                {achievement.linkedinPost && (
                  <a
                    href={achievement.linkedinPost}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    style={{
                      flex: 1,
                      padding: '8px 12px',
                      background: achievement.gradient,
                      color: 'white',
                      border: 'none',
                      borderRadius: '10px',
                      fontSize: '0.75rem',
                      fontWeight: '700',
                      textDecoration: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '5px',
                      transition: 'var(--transition)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.opacity = '0.9'
                      e.currentTarget.style.transform = 'translateY(-2px)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.opacity = '1'
                      e.currentTarget.style.transform = 'translateY(0)'
                    }}
                  >
                    <ExternalLink size={14} />
                    LinkedIn
                  </a>
                )}
                {achievement.devpostLink && (
                  <a
                    href={achievement.devpostLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    style={{
                      flex: 1,
                      padding: '8px 12px',
                      background: achievement.gradient,
                      color: 'white',
                      border: 'none',
                      borderRadius: '10px',
                      fontSize: '0.75rem',
                      fontWeight: '700',
                      textDecoration: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '5px',
                      transition: 'var(--transition)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.opacity = '0.9'
                      e.currentTarget.style.transform = 'translateY(-2px)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.opacity = '1'
                      e.currentTarget.style.transform = 'translateY(0)'
                    }}
                  >
                    <Link size={14} />
                    Devpost
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Image Popup Modal - Full Screen */}
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
              maxWidth: '90vw',
              maxHeight: '90vh',
              background: 'var(--primary-white)',
              borderRadius: '16px',
              padding: '10px',
              boxShadow: 'var(--shadow-2xl)'
            }}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              style={{
                position: 'absolute',
                top: '15px',
                right: '15px',
                background: 'rgba(0,0,0,0.7)',
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
                e.currentTarget.style.background = 'rgba(0,0,0,0.9)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(0,0,0,0.7)'
              }}
            >
              <X size={24} color="white" />
            </button>

            {/* Full Image */}
            <img 
              src={selectedImage}
              alt="Achievement certificate"
              style={{
                width: '100%',
                height: '100%',
                maxWidth: '1200px',
                maxHeight: '85vh',
                objectFit: 'contain',
                borderRadius: '12px'
              }}
            />

            {/* Click to Close Hint */}
            <p style={{
              textAlign: 'center',
              fontSize: '0.85rem',
              color: 'var(--text-muted)',
              marginTop: '10px',
              fontWeight: '600'
            }}>
              Click outside or press ✕ to close
            </p>
          </div>
        </div>
      )}

      <style>{`
        .card:hover .enlarge-hint {
          opacity: 1 !important;
        }

        @media (max-width: 1024px) {
          .achievements-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 640px) {
          .achievements-grid {
            grid-template-columns: 1fr !important;
          }
          #achievements {
            min-height: auto !important;
            padding: 50px 15px !important;
          }
        }
      `}</style>
    </section>
  )
}

export default Achievements
