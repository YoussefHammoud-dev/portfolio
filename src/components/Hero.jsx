import "../styles/hero.css";
// import heroImage from "../assets/react.svg"; 
import heroImage from "../assets/heroImg.jpeg"; 

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1>
          Junior Full-Stack Developer <span>Youssef Hammoud</span>
        </h1>
        <p>React.js, Node.js, and FastAPI developer building responsive, API-driven web applications.</p>

        <a href="#projects" className="cta">
          Explore Projects
        </a>
      </div>

      <div className="hero-image">
        <img src={heroImage} alt="Youssef Hammoud" />
      </div>
    </section>
  );
}
