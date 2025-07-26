import { useState, useEffect } from 'react'

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
    
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const skills = [
    'React', 'TypeScript', 'Node.js', 'Python', 'AWS', 'Docker',
    'GraphQL', 'MongoDB', 'PostgreSQL', 'Redis', 'Kubernetes', 'CI/CD'
  ]

  const projects = [
    {
      title: 'AI-Powered Analytics Dashboard',
      tech: 'React, Python, TensorFlow',
      description: 'Real-time data visualization with machine learning insights',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Blockchain Voting System',
      tech: 'Solidity, Web3.js, React',
      description: 'Decentralized voting platform with smart contracts',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Cloud Infrastructure Manager',
      tech: 'AWS, Docker, Kubernetes',
      description: 'Automated deployment and scaling solution',
      gradient: 'from-green-500 to-emerald-500'
    }
  ]

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-cyan-900/20"></div>
        {/* Floating Particles */}
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-30 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          ></div>
        ))}
      </div>

      {/* Mouse Glow Effect */}
      <div
        className="fixed w-96 h-96 rounded-full pointer-events-none z-10 mix-blend-screen"
        style={{
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%)',
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
          transition: 'all 0.1s ease-out'
        }}
      ></div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 p-6">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className={`text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`}>
            YourName
          </div>
          <div className="flex space-x-8">
            {['home', 'about', 'projects', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => setActiveSection(section)}
                className={`capitalize relative px-4 py-2 rounded-lg transition-all duration-300 hover:bg-white/10 ${
                  activeSection === section ? 'text-blue-400' : 'text-gray-300 hover:text-white'
                }`}
              >
                {section}
                {activeSection === section && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 animate-pulse"></div>
                )}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative z-20 pt-20">
        {/* Home Section */}
        {activeSection === 'home' && (
          <section className="min-h-screen flex items-center justify-center px-6">
            <div className="text-center max-w-4xl">
              <h1 className={`text-6xl md:text-8xl font-bold mb-6 transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Full Stack
                </span>
                <br />
                <span className="text-white">Developer</span>
              </h1>
              <p className={`text-xl md:text-2xl text-gray-300 mb-8 transition-all duration-1000 delay-300 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
                Crafting digital experiences that push boundaries
              </p>
              <div className={`flex justify-center space-x-6 transition-all duration-1000 delay-600 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
                <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg font-semibold hover:scale-105 transition-transform duration-300 hover:shadow-lg hover:shadow-blue-500/25">
                  View My Work
                </button>
                <button className="px-8 py-4 border border-gray-600 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
                  Get In Touch
                </button>
              </div>
            </div>
          </section>
        )}

        {/* About Section */}
        {activeSection === 'about' && (
          <section className="min-h-screen flex items-center justify-center px-6">
            <div className="max-w-6xl grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  About Me
                </h2>
                <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                  I'm a passionate developer who loves creating innovative solutions that make a difference. 
                  With expertise spanning frontend, backend, and cloud technologies, I bring ideas to life 
                  through clean, efficient code.
                </p>
                <p className="text-lg text-gray-400 mb-8">
                  When I'm not coding, you'll find me exploring new technologies, contributing to open source, 
                  or sharing knowledge with the developer community.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {skills.map((skill, index) => (
                    <div
                      key={skill}
                      className="p-3 bg-gradient-to-r from-gray-800 to-gray-700 rounded-lg text-center font-medium hover:scale-105 transition-transform duration-300 hover:bg-gradient-to-r hover:from-blue-800/30 hover:to-purple-800/30"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="w-80 h-80 mx-auto relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-spin opacity-75" style={{ animationDuration: '8s' }}></div>
                  <div className="absolute inset-2 bg-black rounded-full flex items-center justify-center">
                    <div className="text-6xl">👨‍💻</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Projects Section */}
        {activeSection === 'projects' && (
          <section className="min-h-screen flex items-center justify-center px-6">
            <div className="max-w-6xl">
              <h2 className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Featured Projects
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                  <div
                    key={project.title}
                    className="group relative p-6 bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl hover:scale-105 transition-all duration-500 hover:shadow-2xl"
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300`}></div>
                    <div className="relative z-10">
                      <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-blue-300 transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-sm text-blue-400 mb-3 font-medium">{project.tech}</p>
                      <p className="text-gray-300 mb-6">{project.description}</p>
                      <div className="flex space-x-3">
                        <button className="px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-lg text-sm font-medium transition-colors duration-300">
                          Live Demo
                        </button>
                        <button className="px-4 py-2 border border-gray-600 hover:bg-white/10 rounded-lg text-sm font-medium transition-all duration-300">
                          GitHub
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Contact Section */}
        {activeSection === 'contact' && (
          <section className="min-h-screen flex items-center justify-center px-6">
            <div className="max-w-4xl text-center">
              <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Let's Build Something Amazing
              </h2>
              <p className="text-xl text-gray-300 mb-12">
                Ready to turn your ideas into reality? Let's connect and create something extraordinary together.
              </p>
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                {[
                  { icon: '📧', title: 'Email', value: 'hello@yourname.com' },
                  { icon: '💼', title: 'LinkedIn', value: '/in/yourname' },
                  { icon: '🐙', title: 'GitHub', value: '/yourusername' }
                ].map((contact) => (
                  <div key={contact.title} className="group p-6 bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl hover:scale-105 transition-all duration-300 cursor-pointer">
                    <div className="text-4xl mb-4">{contact.icon}</div>
                    <h3 className="text-xl font-bold mb-2 text-white group-hover:text-blue-300 transition-colors duration-300">
                      {contact.title}
                    </h3>
                    <p className="text-gray-400">{contact.value}</p>
                  </div>
                ))}
              </div>
              <button className="px-12 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg font-semibold text-lg hover:scale-105 transition-transform duration-300 hover:shadow-lg hover:shadow-blue-500/25">
                Start a Conversation
              </button>
            </div>
          </section>
        )}
      </div>
    </div>
  )
}

export default App