import { useState, useEffect} from "react"
import './App.css'
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaFigma } from "react-icons/fa";


export default function App() {

  function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer); }, []);
    const formatted = time.toLocaleTimeString("en-GB", { hour12: false });

  return <div className="clock">{formatted}</div>;
}



  

  return (
    <main>
      <div className="parent">
<div className="div1">
  <h4>Hi, I'm <span>Johanna</span> - Passionate about <span>frontend development</span>, 
  I enjoy combining logic and creativity to build functional, user-friendly,
  and visually engaging websites. I’m currently expanding my skills in HTML, 
  CSS, JavaScript, React, and Git through my university studies and a frontend
  development course.
  </h4>
</div>
<div className="div2">
  <h4>CONNECT</h4>
  <div className="connect-infos">
    <img src="src/profile.png" alt="Profile picture" />
    <div className='contact'>
      <h4>Feel free to contact me at:</h4>
      <a href="mailto:johannalang.14j@gmail.com">
      <h3>johannalang.14j@gmail.com</h3>
      </a>
      <div className='contact-icons'>
        <a  href="https://www.linkedin.com/in/johanna-lang-81aa0a30b"target="_blank">
        <i class="fa-brands fa-linkedin"></i>
        </a>
        <a href="https://github.com/jothegirlie?tab=repositories" target="_blank">
        <i class="fa-brands fa-github"></i>
        </a>
      </div>

    </div>
  </div>
</div>
<div className="div3"> 
  <h4>TECH I WORK WITH</h4>
  <div className="tech-icons">
  <FaHtml5 color="#E34F26" size={28} />
  <FaCss3Alt color="#1572B6" size={28} />
  <FaJs color="#F7DF1E" size={28} />
  <FaReact color="#61DAFB" size={28} />
  <FaGitAlt color="#F05032" size={28} />
  <FaFigma color="#F24E1E" size={28} />
</div>
</div>
<div className="div4">
  <h4>PROJECTS</h4>
  <div className="projects-list">
  <div className="projects">
    <img src="src/project1.png" alt="Expense Tracker project" />
    <div className="projects-info">
      <h3>Expense Tracker</h3>
      <p>HTML, CSS, React</p>
    </div>
    <div className="projects-icons">
       <a href="https://github.com/jothegirlie/Expense-Tracker" target="_blank">
       <i class="fa-solid fa-code"></i>
       </a>
       <a href="https://expense-tracker-ten-ruby-76.vercel.app/" target="_blank">
       <i class="fa-solid fa-link"></i>
       </a>
    </div>
  </div>
  <div className="projects">
    <img src="src/project2.png" alt="E-commerce Shoe Shop" />
    <div className="projects-info">
      <h3>E-commerce Shoe Shop</h3>
      <p>HTML, CSS, React</p>
    </div>
    <div className="projects-icons">
       <a href="https://github.com/jothegirlie/E-Commerce-Product-Page" target="_blank">
       <i class="fa-solid fa-code"></i>
       </a>
       <a href="https://e-commerce-product-page-3ax74f1cq-jothegirlies-projects.vercel.app/" target="_blank">
       <i class="fa-solid fa-link"></i>
       </a>
    </div>
  </div>
  <div className="projects">
    <img src="src/project3.png" alt="Weather Website" />
    <div className="projects-info">
      <h3>Weather Website</h3>
      <p>HTML, CSS, Javascript, API</p>
    </div>
    <div className="projects-icons">
       <a href="https://github.com/jothegirlie/API-based-Weather-App" target="_blank">
       <i class="fa-solid fa-code"></i>
       </a>
       <a href="https://jothegirlie.github.io/API-based-Weather-App/" target="_blank">
       <i class="fa-solid fa-link"></i>
       </a>
    </div>
  </div>
  </div>
</div>
<div className="div5">
  <h4>Frontend Developer · Cluj-Napoca, RO</h4>
  <h5>I build web applications using HTML, CSS, JavaScript,
      React, REST APIs, Git, and version control, creating
      responsive, user-friendly, and maintainable interfaces.</h5>
</div>
<div className="div6"> 
    <h4>JUST CODING</h4>
    <Clock/>
    <p>CLJ, RO · GMT + 2</p>
    <h3>OPEN TO WORK</h3>
</div>
</div>
</main>      
    
  )
}

