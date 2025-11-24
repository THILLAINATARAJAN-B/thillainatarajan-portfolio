import React, { useState } from 'react'
import { Award, ExternalLink, X, CheckCircle, Code, Brain, Briefcase, Wrench, ChevronDown, ChevronUp } from 'lucide-react'

// Import certificate images - All from the same folder
import mernstackCert from '../assets/Certificate/Images/Mernstack.jpg'
import devopsCert from '../assets/Certificate/Images/Devops.jpg'
import agileCert from '../assets/Certificate/Images/Agile.jpg'
import AIEnabledCS from '../assets/Certificate/Images/AIEnabledCS.jpg'
import AIFundamentals from '../assets/Certificate/Images/AIFundamentals.jpg'
import CIandCD from '../assets/Certificate/Images/CIandDD.jpg'
import EBPL from '../assets/Certificate/Images/Experience Based Project Learning.jpg'
import Microsoft from '../assets/Certificate/Images/Microsoft Office Essentials.jpg'
import AndroidApp from '../assets/Certificate/Images/Android App Development.jpg'

const Certifications = () => {
  const [selectedImage, setSelectedImage] = useState(null)
  const [showAll, setShowAll] = useState(false)

  const certifications = [
    // AI & Machine Learning
    {
      title: 'AI-Enabled Applications for Customer Service',
      issuer: 'IBM SkillsBuild',
      date: 'October 2024',
      category: 'AI/ML',
      icon: Brain,
      color: '#3b82f6',
      gradient: 'linear-gradient(135deg, #3b82f6, #2563eb)',
      verifyLink: 'https://www.credly.com/go/4VRGkeO2',
      certificateImage: AIEnabledCS,
      skills: ['AI Applications', 'Customer Service AI', 'Machine Learning']
    },
    {
      title: 'Artificial Intelligence Fundamentals',
      issuer: 'IBM SkillsBuild',
      date: 'October 2024',
      category: 'AI/ML',
      icon: Brain,
      color: '#3b82f6',
      gradient: 'linear-gradient(135deg, #3b82f6, #2563eb)',
      verifyLink: 'https://www.credly.com/badges/c63727ed-e585-487c-a1de-ba9546554c84',
      certificateImage: AIFundamentals,
      skills: ['AI Fundamentals', 'Machine Learning', 'Neural Networks']
    },
    
    // DevOps & Agile
    {
      title: 'Continuous Integration and Delivery',
      issuer: 'Wingspan (Naan Mudhalvan)',
      date: 'November 2024',
      category: 'DevOps',
      icon: Wrench,
      color: '#10b981',
      gradient: 'linear-gradient(135deg, #10b981, #059669)',
      verifyLink: 'https://verify.onwingspan.com',
      certificateImage: CIandCD,
      skills: ['CI/CD', 'DevOps', 'Automation']
    },
    {
      title: 'Introduction to Agile Methodology',
      issuer: 'Wingspan (Naan Mudhalvan)',
      date: 'November 2024',
      category: 'DevOps',
      icon: Wrench,
      color: '#10b981',
      gradient: 'linear-gradient(135deg, #10b981, #059669)',
      verifyLink: 'https://verify.onwingspan.com',
      certificateImage: agileCert,
      skills: ['Agile', 'Scrum', 'Project Management']
    },
    {
      title: 'DevOps',
      issuer: 'Infosys Springboard',
      date: 'November 2024',
      category: 'DevOps',
      icon: Wrench,
      color: '#10b981',
      gradient: 'linear-gradient(135deg, #10b981, #059669)',
      verifyLink: null,
      certificateImage: devopsCert,
      skills: ['DevOps Tools', 'Infrastructure', 'Cloud Deployment']
    },
    
    // Full-Stack Development
    {
      title: 'MERN Stack Development',
      issuer: 'KGiSL MicroCollege',
      date: 'August 2024',
      category: 'Full-Stack',
      icon: Code,
      color: '#8b5cf6',
      gradient: 'linear-gradient(135deg, #8b5cf6, #7c3aed)',
      verifyLink: null,
      certificateImage: mernstackCert,
      skills: ['MongoDB', 'Express', 'React']
    },
    {
      title: 'Android App Development',
      issuer: 'Google - Smart Bridge',
      date: 'October 2024',
      category: 'Full-Stack',
      icon: Code,
      color: '#8b5cf6',
      gradient: 'linear-gradient(135deg, #8b5cf6, #7c3aed)',
      verifyLink: null,
      certificateImage: AndroidApp,
      skills: ['Android Studio', 'Java', 'Mobile Development']
    },
    
    // Professional Skills
    {
      title: 'Microsoft Office Essentials',
      issuer: 'Microsoft',
      date: 'May 2024',
      category: 'Professional',
      icon: Briefcase,
      color: '#ec4899',
      gradient: 'linear-gradient(135deg, #ec4899, #db2777)',
      verifyLink: null,
      certificateImage: Microsoft,
      skills: ['Excel', 'Word', 'PowerPoint']
    },
    {
      title: 'Experience Based Project Learning',
      issuer: 'Oracle',
      date: 'March 2024',
      category: 'Professional',
      icon: Briefcase,
      color: '#ec4899',
      gradient: 'linear-gradient(135deg, #ec4899, #db2777)',
      verifyLink: null,
      certificateImage: EBPL,
      skills: ['Project Management', 'Team Collaboration', 'Problem Solving']
    }
  ]

  // Show only first 6 certificates initially
  const displayedCerts = showAll ? certifications : certifications.slice(0, 6)
  const hasMore = certifications.length > 6

  const categories = [
    { name: 'AI/ML', icon: Brain, color: '#3b82f6', count: certifications.filter(c => c.category === 'AI/ML').length },
    { name: 'DevOps', icon: Wrench, color: '#10b981', count: certifications.filter(c => c.category === 'DevOps').length },
    { name: 'Full-Stack', icon: Code, color: '#8b5cf6', count: certifications.filter(c => c.category === 'Full-Stack').length },
    { name: 'Professional', icon: Briefcase, color: '#ec4899', count: certifications.filter(c => c.category === 'Professional').length }
  ]

  return (
    <section id="certifications" className="section" style={{ 
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
          <Award size={18} color="var(--primary-blue)" />
          <span style={{
            fontSize: '0.85rem',
            fontWeight: '700',
            color: 'var(--primary-blue)',
            letterSpacing: '0.5px'
          }}>
            {certifications.length} PROFESSIONAL CERTIFICATIONS
          </span>
        </div>
        <h2 className="section-title" style={{ 
          marginBottom: '5px',
          fontSize: 'clamp(1.8rem, 4vw, 2.3rem)'
        }}>
          Certifications & <span className="section-title-accent">Learning</span>
        </h2>
        <p className="section-subtitle" style={{ 
          marginBottom: '0',
          fontSize: '0.95rem'
        }}>
          Continuous learning in AI, DevOps, and full-stack technologies
        </p>
      </div>

      {/* Category Summary */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '12px',
        maxWidth: '900px',
        margin: '0 auto 30px',
        width: '100%'
      }}
      className="category-grid">
        {categories.map((cat, idx) => (
          <div
            key={idx}
            className="fade-in-up"
            style={{
              animationDelay: `${idx * 0.1}s`,
              background: 'var(--primary-white)',
              padding: '12px',
              borderRadius: '10px',
              border: '2px solid var(--border-gray)',
              textAlign: 'center',
              transition: 'var(--transition)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = cat.color
              e.currentTarget.style.transform = 'translateY(-3px)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--border-gray)'
              e.currentTarget.style.transform = 'translateY(0)'
            }}
          >
            <div style={{
              width: '40px',
              height: '40px',
              background: `linear-gradient(135deg, ${cat.color}, ${cat.color}dd)`,
              borderRadius: '10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 8px'
            }}>
              <cat.icon size={20} color="white" />
            </div>
            <h4 style={{
              fontSize: '0.75rem',
              fontWeight: '800',
              color: 'var(--text-primary)',
              marginBottom: '2px'
            }}>
              {cat.name}
            </h4>
            <p style={{
              fontSize: '1.1rem',
              fontWeight: '900',
              color: cat.color,
              margin: 0
            }}>
              {cat.count}
            </p>
          </div>
        ))}
      </div>

      {/* Certifications Grid - 3 columns */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '18px',
        maxWidth: '1200px',
        margin: '0 auto',
        width: '100%'
      }}
      className="certs-grid">
        {displayedCerts.map((cert, idx) => (
          <div
            key={idx}
            className="card fade-in-up"
            style={{
              animationDelay: `${idx * 0.05}s`,
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
            {/* Certificate Preview Image - Clickable */}
            <div 
              style={{
                width: '100%',
                height: '140px',
                background: cert.certificateImage 
                  ? `url(${cert.certificateImage}) center/cover` 
                  : cert.gradient,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden',
                cursor: 'pointer'
              }}
              onClick={(e) => {
                e.stopPropagation()
                if (cert.certificateImage) {
                  setSelectedImage(cert.certificateImage)
                }
              }}
            >
              {!cert.certificateImage && (
                <cert.icon size={50} color="white" opacity={0.3} />
              )}
              
              {/* Category Badge */}
              <div style={{
                position: 'absolute',
                top: '8px',
                left: '8px',
                background: cert.gradient,
                color: 'white',
                padding: '4px 10px',
                borderRadius: '12px',
                fontSize: '0.65rem',
                fontWeight: '800',
                boxShadow: 'var(--shadow-md)'
              }}>
                {cert.category}
              </div>

              {/* Hover overlay */}
              {cert.certificateImage && (
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
                    fontSize: '0.8rem',
                    fontWeight: '700'
                  }}>
                    🔍 Click to enlarge
                  </span>
                </div>
              )}
            </div>

            {/* Content */}
            <div style={{ padding: '14px' }}>
              {/* Title */}
              <h3 style={{
                fontSize: '0.95rem',
                fontWeight: '800',
                color: 'var(--text-primary)',
                marginBottom: '6px',
                lineHeight: '1.3',
                minHeight: '38px',
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden'
              }}>
                {cert.title}
              </h3>

              {/* Issuer */}
              <p style={{
                color: 'var(--text-secondary)',
                fontWeight: '600',
                fontSize: '0.78rem',
                marginBottom: '4px',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis'
              }}>
                {cert.issuer}
              </p>

              {/* Date */}
              <p style={{
                fontSize: '0.7rem',
                color: 'var(--text-muted)',
                marginBottom: '10px',
                fontWeight: '600'
              }}>
                📅 {cert.date}
              </p>

              {/* Skills - Show exactly 3 */}
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '4px',
                marginBottom: '10px'
              }}>
                {cert.skills.slice(0, 3).map((skill, sIdx) => (
                  <span key={sIdx} style={{
                    background: 'var(--light-gray)',
                    color: 'var(--text-primary)',
                    padding: '3px 8px',
                    borderRadius: '8px',
                    fontSize: '0.65rem',
                    fontWeight: '600',
                    border: '1px solid var(--border-gray)'
                  }}>
                    {skill}
                  </span>
                ))}
              </div>

              {/* Verify Link */}
              {cert.verifyLink && (
                <a
                  href={cert.verifyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  style={{
                    display: 'block',
                    paddingTop: '8px',
                    borderTop: '1px solid var(--border-gray)',
                    textAlign: 'center',
                    textDecoration: 'none'
                  }}
                >
                  <span style={{
                    fontSize: '0.7rem',
                    fontWeight: '700',
                    color: cert.color,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '4px'
                  }}>
                    <ExternalLink size={12} />
                    Verify Certificate
                  </span>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* View More/Less Button */}
      {hasMore && (
        <div style={{
          textAlign: 'center',
          marginTop: '25px'
        }}>
          <button
            onClick={() => setShowAll(!showAll)}
            className="btn btn-secondary"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '12px 24px',
              fontSize: '0.95rem',
              fontWeight: '700'
            }}
          >
            {showAll ? (
              <>
                <ChevronUp size={20} />
                Show Less Certificates
              </>
            ) : (
              <>
                <ChevronDown size={20} />
                View All {certifications.length} Certificates
              </>
            )}
          </button>
        </div>
      )}

      {/* Image-Only Modal */}
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
              alt="Certificate"
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

        @media (max-width: 1024px) {
          .certs-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .category-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 640px) {
          .certs-grid, .category-grid {
            grid-template-columns: 1fr !important;
          }
          #certifications {
            min-height: auto !important;
            padding: 50px 15px !important;
          }
        }
      `}</style>
    </section>
  )
}

export default Certifications
