import React from "react";
import "./FirstDisplay.css";
import "../../media.css"
import { motion } from "framer-motion";

const textAnimation = {
  hidden: {
    y: -50,
    opacity: 0,
  },
  visible: {
    y: 50,
    opacity: 1,
  },
};

const FirstDisplay = () => {
  return (
    <motion.section id="firstDisplay" initial="hidden" whileInView="visible">
      <div className="container">
        <div className="col-4">
          <div className="box__firstDisplay">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3 }}
              whileHover={{ scale: 1.3 }}
            >
              <img
                src="https://www.arweave.net/oMLztocWu3XXnl0qIkJx-YHGhMLq94k1eVrb1GU1d_4?ext=gif"
                alt="loading..."
              />
            </motion.div>
            <motion.p variants={textAnimation} className='title__FirstDisplay'>NFT Fun?</motion.p>
            <motion.p variants={textAnimation}>for</motion.p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default FirstDisplay;
