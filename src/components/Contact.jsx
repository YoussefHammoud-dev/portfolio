import "../styles/contact.css";

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Let's Connect</h2>
      <form>
        <input placeholder="Email Address" />
        <textarea placeholder="Project, role, or collaboration details" />
        <button>Send Message</button>
      </form>
    </section>
  );
}
