import { motion } from "framer-motion";
import apeImg from "../assets/ape.png";
import alpacaImg from "../assets/alpaca.png";
import flameImg from "../assets/flame.png";

import "../App.css"; 

const images = [
  { src: apeImg, alt: "Ape NFT", rotate: -6 },
  { src: alpacaImg, alt: "Alpaca NFT", rotate: 0 },
  { src: flameImg, alt: "Flame NFT", rotate: 6 },
];

export default function HeroSection() {
  return (
    <section className="hero-section">

      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>
          Get Ready to Own <br /> a Piece of History
        </h1>

        <p>
          Join the ranks of visionary collectors and own a piece of history
        </p>

        <div className="hero-buttons">
          <button className="primary-btn">Explore</button>
          <button className="secondary-btn">Go to Market</button>
        </div>
      </motion.div>

      <motion.div
        className="hero-images"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.3 }}
      >
        {images.map((img, i) => (
          <motion.div
            key={i}
            className="hero-card"
            style={{ rotate: img.rotate }}
            whileHover={{ scale: 1.05, rotate: 0 }}
            transition={{ duration: 0.4 }}
          >
            <img src={img.src} alt={img.alt} />
          </motion.div>
        ))}
      </motion.div>

    </section>
  );
}