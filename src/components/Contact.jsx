import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { ComputersCanvas } from './canvas';
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import {SiTwitter,SiInstagram,SiLinkedin,SiGithub} from 'react-icons/si';
import Reactdesign from "./Feedbacks";

const Contact = () => {
  const ref = useRef();
  const [success, setSuccess] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_kb3ilon",
        "template_qodn2af",
        ref.current,
        "_TEdz_PXCcoaA3XCj"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
        },
        (error) => {
          console.log(error.text);
          setSuccess(false);
        }
      );
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className=' flex-[0.75] bg-gradient-to-r from-[#00d9ffb4] to-[#6a00ff9d] p-8 rounded-2xl'
      >
        <p className="sm:text-[18px] text-[14px] text-white uppercase tracking-wider">Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={ref}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              
              placeholder="What's your name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='email'
             
              placeholder="What's your mail address?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
             
              placeholder='Your message?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
       
          <div className="flex flex-row">
          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
           Send
          </button>
         
          <div className="flex flex-row gap-10 ml-[20px] mt-[10px]">
            <ul className="flex flex- row-auto sm:gap-10 gap-4">
              <li>
              <a href="https://github.com/EmirSimsek52"><SiGithub size={30}/></a>
              </li>
              <li>
              <a href="https://www.linkedin.com/in/emir-%C5%9Fim%C5%9Fek-575184253/"><SiLinkedin size={30}/></a>
              </li>
              <li>
              <a href="https://twitter.com/zlatannovicc"><SiTwitter size={30}/> </a>
              </li>
            </ul>
          </div>
          </div>
          {success &&
              "Your message has been sent. I'll get back to you soon :)"}
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
         <Reactdesign/> 
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");