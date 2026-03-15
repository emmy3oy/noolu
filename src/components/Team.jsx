import { motion } from "framer-motion";
import { Link2, Twitter } from "lucide-react";
import "../App.css"; 

import t1 from "../assets/t1.png";
import t2 from "../assets/t2.png";
import t3 from "../assets/t3.png";
import t4 from "../assets/t4.png";


const team = [
  { name: "Alexander Yuu", role: "CEO & Founder", img: t1 },
  { name: "Muyiwa Dagrin", role: "CTO", img: t2 },
  { name: "Victory Kim", role: "Head of Art", img: t3 },
  { name: "Bilikisu Wonder", role: "Chief Marketing Officer", img: t4 },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

function SocialIcons() {
  return (
    <div className="social-icons">
      <button><Link2 size={16} /></button>
      <button><Twitter size={16} /></button>
    </div>
  );
}

export default function TeamSection() {
  return (
    <section className="team-section">
      <div className="team-container">

        <div className="team-header">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h2>Meet the Team</h2>
            <p>
              The creators pushing the boundaries of art and technology
            </p>
          </motion.div>
        </div>

        <motion.div
          className="team-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {team.map((member, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="team-card"
            >
              <img src={member.img} alt={member.name} />

              <div className="team-overlay">
                <SocialIcons />
                <h3>{member.name}</h3>
                <span>{member.role}</span>
              </div>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}