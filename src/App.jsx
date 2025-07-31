import React from 'react'
import './App.css'
import pic from './assets/pic.jpg'
import donut from './assets/half-donut.png'
import square from './assets/square.png'
import line from './assets/line.png'
import arrow from './assets/arrow.png'
import bugblaze from './assets/bugblaze.png'
import weather from './assets/weather-music.png'
import cryptomarket from './assets/cryptomarket.png'
import onepercent from './assets/onepercent.png'
import geminiclone from './assets/gemini-clone.png'
import devmarks from './assets/devmarks.png'

const projectsData = [
  {
    img: bugblaze,
    title: 'Bugblaze: AI CLI Tool',
    description: 'BugBlaze is a command-line tool that helps developers find and fix bugs in their code using AI.',
    link: 'https://bugblaze.vercel.app'
  },
  {
    img: weather,
    title: 'Weather Music',
    description: 'A website that plays music based on current weather moods.',
    link: 'https://weather-music-app.vercel.app'
  },
  {
    img: cryptomarket,
    title: 'Crypto Market',
    description: 'A dashboard to track cryptocurrency prices and market trends in real-time.',
    link: 'https://cryptomarket-place.netlify.app'
  },
  {
    img: onepercent,
    title: 'One Percent',
    description: 'A platform to made to help African youths to learn and grow in tech especially Web3 and AI with incentives.',
    link: 'https://onepercentng.com'
  },
  {
    img: geminiclone,
    title: 'Gemini (Clone)',
    description: 'A website I made to learn about APIs and other tools in React. Its one of my first React projects.',
    link: 'https://gemini1-clone.netlify.app/'
  },
  {
    img: devmarks,
    title: 'DevMarks',
    description: 'A platform for developers to save useful links, resources, articles and docs.',
    link: 'https://lp-devmarks.vercel.app'
  }
]

const App = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if(element) element.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="container">
      {/* Navigation */}
      <nav className="navigation">
        <div className="logo"><span></span><p>LP</p></div>
        <div className="middle">
          <ul>
            <li onClick={() => scrollToSection('about')}>About Me</li>
            <li onClick={() => scrollToSection('projects')}>Projects</li>
            <li onClick={() => scrollToSection('contact')}>Contact Me</li>
          </ul>
        </div>
        <div className="end">
          <div className="cta" onClick={() => scrollToSection('contact')}>Hire Me</div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero">
          <div className="left">
            <div className="top"><span></span> <p>I'm</p></div>
            <div className="hero-text">
              Little Prince.
              <p>A Fullstack Dev</p>
            </div>
          </div>
          <div className="right">
            <img src={pic} alt="My Portrait" className="profile-pic" />
          </div>
        </div>
        <img className='img one' src={line} alt="" />
        <img className='img two' src={donut} alt="" />
        <img className='img three' src={square} alt="" />
        <div className="mouse-scroll">Scroll <i className="fa-solid fa-computer-mouse"></i></div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <img className="about-img" src={pic} alt="Little Prince" />
          <p>
            I'm a Fullstack Developer with a passion for creating dynamic and responsive web applications. I have experience in both frontend and backend development, and I'm always eager to learn new technologies and improve my skills. I am proficient in HTML, CSS, and JavaScript for front-end development, and Node.js, Express, and MongoDB for back-end development. I also have experience with React, and other modern web development tools. I am a quick learner and I am always looking for new challenges. I am a team player and I am always willing to help others. I value clean code, collaboration, and continuous learning. My goal is to build impactful products and grow with a forward-thinking team.
          </p>
        </div>
        <div className="about-bottom">
          <div className="about-btop">Languages I specialize In</div>
          <div className="languages">
            <i className="fa-brands fa-html5"></i>
            <i className="fa-brands fa-css3-alt"></i>
            <i className="fa-brands fa-js"></i>
            <i className="fa-brands fa-react"></i>
            <i className="fa-brands fa-node-js"></i>
          </div>
          <div className="about-btop">And More</div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <h2 className="section-title">My Projects</h2>
        <div className="projects-grid">
          {projectsData.map(({ img, title, description, link }) => (
            <div key={title} className="project-card">
              <img src={img} alt={title} className="project-img" />
              <div className="project-title">{title}</div>
              <div className="project-description">{description}</div>
              <a href={link} target="_blank" rel="noopener noreferrer">
                <button className="live-demo">View Project</button>
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <h2 className="section-title">Contact Me</h2>
        <form 
          action="https://api.web3forms.com/submit" 
          method="POST"
          className="contact-form"
        >
          <input type="hidden" name="access_key" value="YOUR_WEB3FORMS_ACCESS_KEY" />
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
          <button type="submit" className="send-btn">Send</button>
        </form>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} Little Prince. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
