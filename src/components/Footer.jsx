import { Link2, Twitter } from "lucide-react";
import "../App.css"; 

const columns = [
  {
    title: "Company",
    links: ["Services", "About us", "Support", "Contact Us"],
  },
  {
    title: "Legal",
    links: ["Privacy Policy", "Terms & Condition"],
  },
  {
    title: "Location",
    links: ["Nigeria", "United States"],
  },
];

export default function FooterSection() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Brand Section */}
        <div className="footer-brand">
          <h3>Extricator.</h3>

          <p>
            Join the ranks of visionary collectors and own a piece of history
          </p>

          <div className="social-icons">
            <button><Link2 size={16} /></button>
            <button><Twitter size={16} /></button>
          </div>
        </div>

        {/* Footer Links */}
        {columns.map((col) => (
          <div key={col.title} className="footer-column">
            <h4>{col.title}</h4>

            <ul>
              {col.links.map((link) => (
                <li key={link}>
                  <a href="#">{link}</a>
                </li>
              ))}
            </ul>

          </div>
        ))}

      </div>
    </footer>
  );
}