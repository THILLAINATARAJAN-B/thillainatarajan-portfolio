import React, { useState, useEffect } from 'react'
import { Github, X, Target, Lightbulb, TrendingUp, CheckCircle, ExternalLink, Award, Users } from 'lucide-react'

// Import project detail images
import remotePC1 from '../assets/projects/remote-pc-1.png'
import remotePC2 from '../assets/projects/remote-pc-2.png'
import eduPlatform1 from '../assets/projects/edu-platform-1.png'
import eduPlatform2 from '../assets/projects/edu-platform-2.png'
import maptizer1 from '../assets/projects/maptizer-1.png'
import maptizer2 from '../assets/projects/maptizer-2.png'
import maptizer3 from '../assets/projects/maptizer-3.png'
import empoweher1 from '../assets/projects/empoweher-1.png'
import empoweher2 from '../assets/projects/empoweher-2.png'
import attendance1 from '../assets/projects/attendance-1.png'
import attendance2 from '../assets/projects/attendance-2.png'
import atria1 from '../assets/projects/atria-1.png'
import atria2 from '../assets/projects/atria-2.png'
import atria3 from '../assets/projects/atria-3.png'

// Import thumbnail images
import remotePCThumb from '../assets/projects/thumbnails/remote-pc-thumb.jpg'
import eduPlatformThumb from '../assets/projects/thumbnails/edu-platform-thumb.jpg'
import maptizerThumb from '../assets/projects/thumbnails/maptizer-thumb.jpg'
import empoweherThumb from '../assets/projects/thumbnails/empoweher-thumb.jpg'
import attendanceThumb from '../assets/projects/thumbnails/attendance-thumb.jpg'
import artiaThumb from '../assets/projects/thumbnails/artia-thumb.jpg'

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Auto-slide images every 3 seconds
  useEffect(() => {
    if (selectedProject && selectedProject.images && selectedProject.images.length > 1) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) => 
          prev === selectedProject.images.length - 1 ? 0 : prev + 1
        )
      }, 3000)
      return () => clearInterval(interval)
    }
  }, [selectedProject])

  const projects = [
    {
      title: 'Intelligent Remote PC Task Automation',
      shortDesc: 'AI-powered agent system that remotely controls a PC through natural language commands, enabling file access, automation, and task execution from any device.',
      tech: ['Python', 'TensorFlow', 'Intel DeepNN', 'YOLO', 'Flask', 'NLP'],
      github: 'https://github.com/THILLAINATARAJAN-B/Project_oneAPI_hack_kpr',
      achievement: 'Intel oneAPI Hackathon – Team Leader',
      impact: 'Enterprise-Ready Automation System',
      category: 'AI/ML',
      thumbnail: remotePCThumb,
      
      challenge: `Carrying a laptop everywhere is not always possible. When I needed files or wanted to execute tasks on my PC remotely, traditional remote-desktop tools were slow, required high bandwidth, or lacked intelligent automation. There was no simple, natural way to control a PC using a mobile device or chat interface.`,
      
      solution: `We developed an AI agent system that lets users control their PC from anywhere through natural language—like talking to a smart assistant. Using Intel DeepNN for intent recognition and YOLO for on-screen element detection, our system could open applications, fetch files, automate tasks, and even send emails. We added secure QR-based authentication and a mobile-friendly interface for seamless remote control.`,
      
      results: [
        'Enabled full PC control from mobile using a chat-based AI agent',
        'Reduced manual task execution time by ~40% through automation',
        'Achieved 95% accuracy in intent detection using Intel DeepNN',
        'Secure QR-based authentication prevented unauthorized remote access',
        'Scalable architecture currently being extended for multi-device workflows'
      ],
      
      story: `This was my first hackathon, and I led a 3-member team. The idea came from a real personal problem: I have a desktop PC, but I cannot carry it everywhere. Often, I needed files, code, or to complete tasks urgently, but I had no way to access them remotely. That frustration inspired me to build a system where I could simply message my PC from my phone and it would perform the task—whether retrieving a file, running a script, or sending an email.

During the hackathon, we worked intensely for 48 hours learning Intel's DeepNN toolkit, synchronizing real-time computer vision with NLP, and building an automation pipeline that felt like a real AI assistant. This project taught me how powerful AI becomes when it solves a personal pain point, and it motivated me to continue scaling the system even after the event.`,
      
      skillsGained: [
        'AI Agent System Design',
        'Intel oneAPI & DeepNN Toolkit',
        'Real-Time NLP Intent Detection',
        'YOLO-based Computer Vision Automation',
        'Secure Authentication Architecture',
        'Team Leadership & Rapid Prototyping'
      ],
      
      images: [remotePC1, remotePC2]
    },
    {
      title: 'Multilingual Education Platform',
      shortDesc: 'AI-powered academic assistant that converts educational videos into structured notes, summaries, and assessments with multilingual support.',
      tech: ['Python', 'YOLO', 'OCR', 'RAG', 'BART', 'Mixtral-8x7B'],
      github: 'https://github.com/THILLAINATARAJAN-B/Multilingual-Education-Platform',
      achievement: ' 2nd Place – Hack Beyond Limit',
      impact: 'Potential to support 10K+ learners',
      category: 'AI/Education',
      thumbnail: eduPlatformThumb,
      
      challenge: `Engineering students rely heavily on textbooks and slides for learning, but understanding concepts requires external sources such as Google or GPT—often leading to distraction instead of focused learning. Additionally, writing notes from YouTube lecture slides is time-consuming, especially when the content includes images, formulas, or fast explanations. A tool was needed to extract structured knowledge directly from the learning material while keeping students focused on the original content.`,
      
      solution: `We built an end-to-end AI system combining multiple modern AI technologies. YOLO and OCR extracted text, diagrams, and key frames from educational videos; RAG ensured explanations stayed grounded in the textbook; BART generated summaries and MCQs; and Mixtral-8x7B enabled Tamil–English multilingual learning. This created a complete academic pipeline—video to PDF notes, concept explanation, summarization, and test preparation—all within one seamless platform.`,
      
      results: [
        'Converted full-length lecture videos into structured notes in under 2 minutes',
        'Achieved 85% summarization and topical accuracy through RAG grounding',
        'Automatically generated 90% relevant MCQs and exam-oriented questions',
        'Enabled Tamil language learning for 100M+ native speakers',
        'Smoothly integrated a multi-model pipeline with zero runtime failures during the hackathon'
      ],
      
      story: `This was our third hackathon, and winning 2nd place became a major turning point for our team. The idea originally came from our academic struggles—we studied from multiple textbooks, and whenever we had doubts, online search engines or GPT gave too much extra information, causing diversion. We needed a tool that explained concepts *only* from our books, including mathematical reasoning, and kept our learning focused.

During development, I built the video-to-PDF note generation system—extracting text, diagrams, and audio insights. My teammate Siva engineered the RAG system that kept answers grounded to the textbook. Another teammate designed the UI and supported model training. I led the team as the core developer, orchestrating the architecture and integrating all systems into one unified pipeline.

We worked continuously for 24 hours, and the moment everything integrated successfully without errors—it felt like magic. After the event, our Dean personally reviewed the project and encouraged us to turn it into a startup-level educational platform, telling us: "Do not stop. This is scalable." That recognition motivated us to continue building the platform beyond the hackathon.`,
      
      skillsGained: [
        'RAG Architecture & Grounded Learning',
        'Multi-Model Pipeline Integration',
        'OCR & Frame Extraction Optimization',
        'LLM-based Notes, Summary & MCQ Generation',
        'Team Leadership & System Architecture',
        'Scalable AI Product Development'
      ],
      
      images: [eduPlatform1, eduPlatform2]
    },
    {
      title: 'Maptizer: Geo-AI Analytics Platform',
      shortDesc: 'A geospatial AI platform that analyzes business feasibility using cultural data, statistical modeling, and intelligent location insights.',
      tech: ['React', 'Node.js', 'Qloo API', 'Leaflet', 'AI/ML', 'Statistical Analysis'],
      github: 'https://github.com/THILLAINATARAJAN-B/Maptizer',
      achievement: 'Company-level API Integration & Production-Ready System',
      impact: 'Business Intelligence Tool',
      category: 'AI/Analytics',
      thumbnail: maptizerThumb,
      
      challenge: `Businesses often struggle to decide where to open new outlets or expand operations because they lack tools that merge cultural preferences, location dynamics, demographic data, and statistical feasibility analysis. Existing platforms are either too technical or do not provide AI-driven insights based on real geospatial patterns.`,
      
      solution: `We built Maptizer, an end-to-end Geo-AI platform that predicts business feasibility using location intelligence. Using the Qloo API for cultural and behavioral insights, we combined statistical analysis (Z-test, T-test) with custom AI scoring models to evaluate how well a business would perform at a specific location. Leaflet enabled us to build interactive maps, heatmaps, and intuitive visual dashboards—transforming complex analytics into easy-to-understand insights.`,
      
      results: [
        'Analyzed 50K+ location and demographic data points',
        'Generated feasibility scores with ~82% prediction accuracy',
        'Reduced business research and analysis time by more than 60%',
        'Delivered clear, interactive visualizations for technical and non-technical users',
        'Produced automated reports summarizing cultural fit and business growth potential'
      ],
      
      story: `This project was built during an international hackathon—the Qloo LLM Hackathon—where we were tasked with using Qloo's cultural intelligence data to build impactful real-world solutions.

Our team decided to address a major challenge faced by entrepreneurs: understanding whether a business would succeed in a chosen location. I designed and developed the full system architecture, implemented the API integrations, and built the geospatial interface using React and Leaflet. One teammate handled statistical modeling (Z-test, T-test) and data analysis, while another teammate performed continuous testing to maintain system reliability.

Although we didn't receive formal recognition, the experience was extremely valuable. We built a production-ready Geo-AI platform within the hackathon timeline, and the project demonstrated our ability to combine data science, AI scoring, statistical analysis, and geospatial visualization into a single cohesive product. This hackathon taught us the importance of scalability, presentation clarity, and collaborative system building.`,
      
      skillsGained: [
        'Geospatial AI & Mapping',
        'Statistical Modeling (Z-test, T-test)',
        'Qloo API Integration',
        'Interactive Visualizations',
        'Full-Stack Architecture',
        'Team Collaboration & System Design'
      ],
      
      images: [maptizer1, maptizer2, maptizer3]
    },
    {
      title: 'WE-EmpoweHer AI Platform',
      shortDesc: 'AI-powered platform designed to empower women in democracy, governance, and leadership through personalized learning and intelligent support.',
      tech: ['Python', 'Flask', 'React', 'NLP', 'LLM', 'TailwindCSS'],
      github: 'https://github.com/THILLAINATARAJAN-B/WE-EmpoweHer-AI',
      achievement: 'Top 10 Selection – GenAI x GenderTech Hackathon (International)',
      impact: 'Empowering Women Leaders Across India',
      category: 'AI/Social',
      thumbnail: empoweherThumb,
      
      challenge: `Women across India face barriers in accessing political education, legal awareness, and governance-related resources. Existing platforms lack personalized learning paths, actionable guidance, and AI-driven tools that simplify complex information such as constitutional rights, government schemes, leadership pathways, and civic engagement processes.`,
      
      solution: `We developed WE-EmpoweHer, a holistic AI platform combining personalized learning, governance education, real-time NLP-powered political analysis, and community support. The system features an LLM assistant for answering queries, modules on constitutional rights, leadership development resources, and tools that help women report complaints effectively with clear procedural guidance.`,
      
      results: [
        'Designed personalized learning journeys tailored to users goals',
        'Processed & analyzed 1000+ political/governance documents using NLP',
        'Enabled community-driven collaboration and peer learning',
        'Delivered a fully accessible and responsive UI for diverse audiences',
        'Created an AI assistant to simplify legal, civic, and governance concepts'
      ],
      
      story: `This project was built during our first international hackathon—the GenAI x GenderTech Hackathon by Amrita University (Dec 2024 – Jan 2025), where we were selected among the Top 10 finalists from 250+ teams.

The experience pushed us to work at our highest level. The night before the final presentation, our team stayed awake almost the entire night, preparing the demo, polishing the workflows, and practicing how to communicate our vision clearly. After resting only a few hours (3:00 AM to 6:00 AM), we refined the pitch and presented it to international judges, including engineers from Japan and South America.

Presenting to global experts was a turning point—it taught us the importance of storytelling, user empathy, and the responsibility of building technology that serves society. Through this project, we aimed to empower women across India with accessible knowledge about the constitution, leadership pathways, rights, governance processes, and a supportive AI that can guide them whenever they need clarity.`,
      
      skillsGained: [
        'Social Impact AI Development',
        'NLP for Governance & Political Analysis',
        'Community Platform Architecture',
        'Human-Centered Design',
        'Full-Stack Development',
        'International Hackathon Presentation Skills'
      ],
      
      images: [empoweher1, empoweher2]
    },
    {
      title: 'QR-Based Attendance System',
      shortDesc: 'A cloud-powered automated attendance platform using dynamic QR codes for secure and seamless student verification.',
      tech: ['Python', 'Flask', 'PostgreSQL', 'QR Code', 'Cloud Deployment'],
      github: 'https://github.com/THILLAINATARAJAN-B/Attendance-System',
      achievement: 'Academic Project – Naan Mudhalvan',
      impact: 'Designed for University Use',
      category: 'Full-Stack',
      thumbnail: attendanceThumb,
      
      challenge: `Traditional attendance methods are slow, prone to errors, and vulnerable to proxy attendance. Universities require a fast, fraud-resistant, and scalable system that works reliably for large classrooms while remaining simple for students and faculty to use.`,
      
      solution: `We developed a cloud-based attendance platform that generates dynamic, session-specific QR codes for secure check-ins. Students scan the QR code to mark attendance, while faculty access real-time dashboards, automated reporting, and department-level management tools. Role-based authentication ensures controlled access and data integrity.`,
      
      results: [
        'Completely prevented proxy and fraudulent attendance attempts',
        'Reduced attendance time from 10 minutes to under 30 seconds',
        'Handled 500+ students in concurrent sessions',
        'Automatically generated daily and monthly attendance reports'
      ],
      
      story: `This was my first full-stack project, built as part of the Naan Mudhalvan academic program. As the team lead, I came up with the idea after observing how much time teachers lost taking attendance and how often students exploited manual systems.

Originally, the project started with a simple ID-and-password–based check-in process. But I realized this wasn't fast enough for real classrooms. I designed and implemented the transition to a QR-based system, which transformed the platform into a fast, secure, and user-friendly solution.

Working with a 4-member team taught me leadership, system design, and cloud deployment fundamentals. Seeing the concept evolve—from a basic login system to a dynamic QR attendance platform—was a major milestone in my journey as a developer.`,
      
      skillsGained: [
        'Full-Stack Development',
        'QR Code Authentication',
        'Database Optimization',
        'Concurrent User Handling',
        'Cloud Deployment',
        'Team Leadership & System Design'
      ],
      
      images: [attendance1, attendance2]
    },
    {
      title: 'ATRIA AI Smart Education',
      shortDesc: 'A multilingual AI-powered education platform that generates personalized learning content, evaluates memorization, and creates fully automated explanation videos.',
      tech: ['Python', 'Llama 3.3', 'GroQ', 'RAG', 'GAN', 'TTS'],
      github: 'https://github.com/THILLAINATARAJAN-B/ARTIA-AI-SMART-EDUCATION',
      achievement: 'Top 5 – Cepheus Hackathon (Atria University x Google Developer Groups)',
      impact: 'Transforming How Students & Professors Create and Learn Content',
      category: 'AI/Education',
      thumbnail: artiaThumb,
      
      challenge: `Students often struggle with learning materials that are not personalized, while professors spend significant time creating explanation videos, slide content, and structured notes. Existing tools fail to combine multilingual learning support, RAG-based knowledge extraction, and AI-powered video generation into a single platform.`,
      
      solution: `We built a next-generation AI education platform featuring: Llama 3.3 with RAG for generating personalized notes from textbooks; a multilingual pipeline supporting Tamil & English; AI-based memorization evaluation using dynamic scoring; an automated text-to-video engine that generates explanation videos with slides, images, voiceovers, and structured narratives; GAN-generated visuals for enhanced educational content. This system helps both students and professors create high-quality learning material effortlessly.`,
      
      results: [
        'Generated personalized notes and explanations using RAG',
        'Achieved 88% accuracy in memorization scoring',
        'Created fully AI-generated educational videos (slides + audio + visuals)',
        'Enabled multilingual access for diverse learners'
      ],
      
      story: `This project was developed during our 6th hackathon—Cepheus Hackathon in Bangalore, organized by Google Developer Groups. It was our dream to participate in a major hackathon in Bangalore, and building this platform within 24 hours was a turning point for us.

Our goal was to redesign our previous multilingual education system into something far more powerful: a platform that helps both students and professors. Students get AI-driven personalized notes and evaluations, while professors can generate complete explanation videos from any textbook content using our pipeline.

My teammate led the DevOps and workflow engineering, training the video-generation model and designing the GAN-based visuals. Another teammate built and optimized the multilingual RAG system. I worked on integrating all the components, building the end-to-end flow, and ensuring the whole system worked flawlessly under time pressure.

We finished with a fully working multilingual AI education platform—and placed in the Top 5. Meeting engineers from Google and other tech companies inspired us deeply to aim for global opportunities.`,
      
      skillsGained: [
        'RAG Architecture & Optimization',
        'Multilingual NLP Systems',
        'AI Video Generation Pipelines',
        'GAN-based Image Synthesis',
        'End-to-End System Integration',
        'Team Collaboration in High-Pressure Environments'
      ],
      
      images: [atria1, atria2, atria3]
    }
  ]

  return (
    <section id="projects" className="section section-alt" style={{ 
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
            6 HACKATHONS • 3 WINS • 10+ AI/ML PROJECTS
          </span>
        </div>
        <h2 className="section-title" style={{ 
          marginBottom: '5px',
          fontSize: 'clamp(1.8rem, 4vw, 2.3rem)'
        }}>
          Featured <span className="section-title-accent">Projects</span>
        </h2>
        <p className="section-subtitle" style={{ 
          marginBottom: '0',
          fontSize: '0.95rem'
        }}>
          Production-ready AI systems solving real-world problems with measurable impact
        </p>
      </div>

      {/* Projects Grid - 3 columns */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '20px',
        maxWidth: '1300px',
        margin: '0 auto',
        width: '100%'
      }}
      className="projects-grid">
        {projects.map((project, idx) => (
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
              flexDirection: 'column',
              cursor: 'pointer'
            }}
            onClick={() => {
              setSelectedProject(project)
              setCurrentImageIndex(0)
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
            {/* Thumbnail Banner */}
            <div style={{
              width: '100%',
              height: '140px',
              background: project.thumbnail 
                ? `url(${project.thumbnail}) center/cover` 
                : 'linear-gradient(135deg, #3b82f6, #2563eb)',
              position: 'relative',
              overflow: 'hidden'
            }}>
              {/* Category Badge */}
              <div style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                background: 'linear-gradient(135deg, #10b981, #059669)',
                color: 'white',
                padding: '4px 10px',
                borderRadius: '12px',
                fontSize: '0.65rem',
                fontWeight: '700',
                boxShadow: 'var(--shadow-md)',
                zIndex: 2
              }}>
                {project.category}
              </div>

              {/* Hover Overlay */}
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
              className="project-overlay">
                <span style={{
                  color: 'white',
                  fontSize: '0.85rem',
                  fontWeight: '700'
                }}>
                  📖 Click to read full case study
                </span>
              </div>
            </div>

            {/* Content */}
            <div style={{ padding: '18px' }}>
              {/* Title */}
              <h3 style={{
                fontSize: '1.05rem',
                fontWeight: '800',
                color: 'var(--text-primary)',
                marginBottom: '8px',
                lineHeight: '1.3',
                minHeight: '45px',
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden'
              }}>
                {project.title}
              </h3>

              {/* Description */}
              <p style={{
                color: 'var(--text-secondary)',
                lineHeight: '1.5',
                marginBottom: '12px',
                fontSize: '0.82rem',
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
                flex: 1
              }}>
                {project.shortDesc}
              </p>

              {/* Tech Stack */}
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '5px',
                marginBottom: '12px'
              }}>
                {project.tech.slice(0, 3).map((tech, tIdx) => (
                  <span key={tIdx} style={{
                    background: 'var(--light-gray)',
                    color: 'var(--text-primary)',
                    padding: '3px 9px',
                    borderRadius: '10px',
                    fontSize: '0.68rem',
                    fontWeight: '600',
                    border: '1px solid var(--border-gray)'
                  }}>
                    {tech}
                  </span>
                ))}
                {project.tech.length > 3 && (
                  <span style={{
                    background: 'var(--primary-blue)',
                    color: 'white',
                    padding: '3px 9px',
                    borderRadius: '10px',
                    fontSize: '0.68rem',
                    fontWeight: '600'
                  }}>
                    +{project.tech.length - 3}
                  </span>
                )}
              </div>

              {/* Achievement Badge */}
              <div style={{
                background: 'linear-gradient(135deg, #fef3c7, #fde68a)',
                padding: '8px 12px',
                borderRadius: '10px',
                border: '2px solid #fbbf24',
                marginBottom: '10px'
              }}>
                <p style={{
                  fontSize: '0.72rem',
                  fontWeight: '700',
                  color: '#78350f',
                  margin: 0,
                  textAlign: 'center'
                }}>
                  🏆 {project.achievement}
                </p>
              </div>

              {/* Action Button */}
              <div style={{
                paddingTop: '10px',
                borderTop: '2px solid var(--border-gray)',
                textAlign: 'center'
              }}>
                <span style={{
                  fontSize: '0.75rem',
                  fontWeight: '700',
                  color: 'var(--primary-blue)'
                }}>
                  Click to view case study →
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Project Modal (same as before - keeping your existing modal code) */}
      {selectedProject && (
        <div
          className="image-modal"
          onClick={() => setSelectedProject(null)}
          style={{ 
            padding: '20px',
            overflowY: 'auto',
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'center'
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="modal-content"
            style={{
              background: 'var(--primary-white)',
              borderRadius: '16px',
              maxWidth: '900px',
              width: '100%',
              position: 'relative',
              boxShadow: 'var(--shadow-2xl)',
              maxHeight: '95vh',
              overflowY: 'auto',
              margin: '20px auto'
            }}
          >
            {/* Sticky Header with Close Button */}
            <div style={{
              position: 'sticky',
              top: 0,
              background: 'var(--primary-white)',
              zIndex: 10,
              padding: '20px 25px 15px',
              borderBottom: '2px solid var(--border-gray)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              gap: '15px'
            }}>
              <div style={{ flex: 1 }}>
                <div style={{
                  display: 'inline-block',
                  background: 'linear-gradient(135deg, #10b981, #059669)',
                  color: 'white',
                  padding: '6px 14px',
                  borderRadius: '18px',
                  fontSize: '0.75rem',
                  fontWeight: '700',
                  marginBottom: '10px'
                }}>
                  {selectedProject.achievement}
                </div>
                <h2 style={{
                  fontSize: 'clamp(1.3rem, 4vw, 1.9rem)',
                  fontWeight: '900',
                  color: 'var(--text-primary)',
                  margin: 0,
                  lineHeight: '1.2'
                }}>
                  {selectedProject.title}
                </h2>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                style={{
                  background: 'var(--light-gray)',
                  border: 'none',
                  borderRadius: '50%',
                  width: '40px',
                  height: '40px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  flexShrink: 0,
                  boxShadow: 'var(--shadow-md)'
                }}
              >
                <X size={22} />
              </button>
            </div>

            <div style={{ padding: '25px' }}>
              {/* Auto-sliding Banner */}
              {selectedProject.images && selectedProject.images.length > 0 && (
                <div style={{
                  marginBottom: '25px',
                  position: 'relative',
                  borderRadius: '14px',
                  overflow: 'hidden',
                  boxShadow: 'var(--shadow-lg)'
                }}>
                  <div style={{
                    width: '100%',
                    height: 'clamp(220px, 40vw, 320px)',
                    background: 'linear-gradient(135deg, #f0f9ff, #e0f2fe)',
                    position: 'relative',
                    overflow: 'hidden'
                  }}>
                    {selectedProject.images.map((img, idx) => (
                      <img
                        key={idx}
                        src={img}
                        alt={`${selectedProject.title} screenshot ${idx + 1}`}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          opacity: currentImageIndex === idx ? 1 : 0,
                          transition: 'opacity 0.8s ease-in-out'
                        }}
                        onError={(e) => {
                          e.target.style.display = 'none'
                        }}
                      />
                    ))}
                  </div>

                  {/* Slide Indicators */}
                  {selectedProject.images.length > 1 && (
                    <div style={{
                      position: 'absolute',
                      bottom: '12px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      display: 'flex',
                      gap: '6px',
                      background: 'rgba(0,0,0,0.7)',
                      padding: '8px 12px',
                      borderRadius: '20px'
                    }}>
                      {selectedProject.images.map((_, idx) => (
                        <div
                          key={idx}
                          style={{
                            width: currentImageIndex === idx ? '24px' : '8px',
                            height: '8px',
                            borderRadius: '4px',
                            background: currentImageIndex === idx ? 'white' : 'rgba(255,255,255,0.5)',
                            transition: 'all 0.3s ease'
                          }}
                        />
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Tech Stack */}
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '8px',
                marginBottom: '22px'
              }}>
                {selectedProject.tech.map((tech, idx) => (
                  <span key={idx} style={{
                    background: 'linear-gradient(135deg, var(--light-gray), #f8fafc)',
                    color: 'var(--text-primary)',
                    padding: '7px 15px',
                    borderRadius: '18px',
                    fontSize: '0.85rem',
                    fontWeight: '700',
                    border: '2px solid var(--border-gray)',
                    boxShadow: 'var(--shadow-sm)'
                  }}>
                    {tech}
                  </span>
                ))}
              </div>

              {/* Case Study Sections */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {/* The Challenge */}
                <div style={{
                  background: 'linear-gradient(135deg, #fef3c7, #fde68a)',
                  padding: '18px',
                  borderRadius: '14px',
                  border: '2px solid #fbbf24',
                  boxShadow: 'var(--shadow-sm)'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                    <Target size={22} color="#d97706" />
                    <h3 style={{ fontSize: '1.2rem', fontWeight: '800', color: '#78350f', margin: 0 }}>
                      The Challenge
                    </h3>
                  </div>
                  <p style={{ fontSize: '0.94rem', lineHeight: '1.7', color: '#78350f', margin: 0, whiteSpace: 'pre-wrap' }}>
                    {selectedProject.challenge}
                  </p>
                </div>

                {/* The Solution */}
                <div style={{
                  background: 'linear-gradient(135deg, #dbeafe, #bfdbfe)',
                  padding: '18px',
                  borderRadius: '14px',
                  border: '2px solid var(--primary-blue)',
                  boxShadow: 'var(--shadow-sm)'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                    <Lightbulb size={22} color="var(--primary-blue)" />
                    <h3 style={{ fontSize: '1.2rem', fontWeight: '800', color: 'var(--deep-blue)', margin: 0 }}>
                      The Solution
                    </h3>
                  </div>
                  <p style={{ fontSize: '0.94rem', lineHeight: '1.7', color: 'var(--deep-blue)', margin: 0, whiteSpace: 'pre-wrap' }}>
                    {selectedProject.solution}
                  </p>
                </div>

                {/* Results & Impact */}
                <div style={{
                  background: 'linear-gradient(135deg, #d1fae5, #a7f3d0)',
                  padding: '18px',
                  borderRadius: '14px',
                  border: '2px solid #10b981',
                  boxShadow: 'var(--shadow-sm)'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
                    <TrendingUp size={22} color="#047857" />
                    <h3 style={{ fontSize: '1.2rem', fontWeight: '800', color: '#064e3b', margin: 0 }}>
                      Results & Impact
                    </h3>
                  </div>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {selectedProject.results.map((result, idx) => (
                      <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                        <CheckCircle size={19} color="#047857" style={{ flexShrink: 0, marginTop: '3px' }} />
                        <span style={{ fontSize: '0.94rem', fontWeight: '600', color: '#064e3b', lineHeight: '1.6' }}>
                          {result}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* My Story & Learning Journey */}
                <div style={{
                  background: 'linear-gradient(135deg, #f9fafb, #f3f4f6)',
                  padding: '18px',
                  borderRadius: '14px',
                  border: '2px solid var(--border-gray)',
                  boxShadow: 'var(--shadow-sm)'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                    <Users size={22} color="var(--primary-blue)" />
                    <h3 style={{ fontSize: '1.2rem', fontWeight: '800', color: 'var(--text-primary)', margin: 0 }}>
                      My Story & Learning Journey
                    </h3>
                  </div>
                  <p style={{ fontSize: '0.94rem', lineHeight: '1.7', color: 'var(--text-secondary)', marginBottom: '16px', fontStyle: 'italic', whiteSpace: 'pre-wrap' }}>
                    {selectedProject.story}
                  </p>
                  <div>
                    <h4 style={{ fontSize: '0.88rem', fontWeight: '700', color: 'var(--text-muted)', marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                      Skills & Technologies Mastered
                    </h4>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                      {selectedProject.skillsGained.map((skill, idx) => (
                        <span key={idx} style={{
                          background: 'linear-gradient(135deg, var(--primary-blue), var(--deep-blue))',
                          color: 'white',
                          padding: '6px 14px',
                          borderRadius: '18px',
                          fontSize: '0.82rem',
                          fontWeight: '700',
                          boxShadow: 'var(--shadow-sm)'
                        }}>
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* GitHub Button */}
              <div style={{
                marginTop: '25px',
                paddingTop: '22px',
                borderTop: '3px solid var(--border-gray)'
              }}>
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  style={{
                    width: '100%',
                    justifyContent: 'center',
                    fontSize: '1.05rem',
                    padding: '16px',
                    boxShadow: 'var(--shadow-lg)'
                  }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <Github size={22} />
                  View Full Project on GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .card:hover .project-overlay {
          opacity: 1 !important;
        }

        .modal-content::-webkit-scrollbar {
          width: 8px;
        }
        .modal-content::-webkit-scrollbar-track {
          background: var(--light-gray);
          border-radius: 10px;
        }
        .modal-content::-webkit-scrollbar-thumb {
          background: var(--primary-blue);
          border-radius: 10px;
        }
        
        @media (max-width: 1200px) {
          .projects-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr !important;
          }
          #projects {
            min-height: auto !important;
            padding: 50px 15px !important;
          }
          .modal-content {
            margin: 10px !important;
            border-radius: 12px !important;
          }
        }
        @media (max-width: 480px) {
          .modal-content {
            max-height: 100vh !important;
            border-radius: 0 !important;
          }
        }
      `}</style>
    </section>
  )
}

export default Projects
