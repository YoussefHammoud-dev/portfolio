import "../styles/navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">YH.dev</h1>
      <ul>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contacts</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#experience">Experience</a></li>


      </ul>
    </nav>
  );
}
