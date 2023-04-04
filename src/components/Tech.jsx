import React from "react";
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { BallCanvas } from "./canvas";
import { styles } from "../styles";
import { services,  } from '../constants';
import { SectionWrapper } from "../hoc";
import {textVariant,fadeIn } from '../utils/motion';
import { technologies } from "../constants";

const ServiceCard = ({index, title, icon}) => {
  return(
    <Tilt className="xs:w-[250px] h-[280px] w-full">
      <motion.div
      variants={fadeIn("right","spring",0.5 * index, 0.75)}
      className="w-full bg-gradient-to-r from-[#00d9ffb4] to-[#6a00ff9d] p-[1px] rounded-[20px] shadow-card" 
      >
        <div
        options={{
          max: 45,
          scale:1,
          speed: 450
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain"/>
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>
      </motion.div>

    </Tilt>
  )
}

const Tech = () => {
  return (
   <div>
     <h1 className={styles.heroHeadText}>Skilss</h1>
    <div className='flex flex-row flex-wrap justify-center gap-10'>
     
      {technologies.map((technology) => (
        <div className='w-28 h-28 text-center m-5' key={technology.name}>
          <BallCanvas icon={technology.icon} />
          <label className="text-xl text-center">{technology.title}</label>
        </div>
      ))}
    </div>
    </div>
  );
};

export default SectionWrapper(Tech, "");


      {/*technologies.map((service, index) => (
        <ServiceCard key={service.title} index={index} {...service} />
      ))*/}