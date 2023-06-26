import React,{useState,useEffect,useRef} from 'react'
import "./Projects.css";
import { motion } from "framer-motion";

import { projects,projects2 } from "../../Components/constants";
import { fadeIn, textVariant } from "../../utils/motion";
import useOnScreen from "../../hooks/useOnScreen";
import cn from "classnames";
import { Scrollbars } from 'react-custom-scrollbars';
import { slideIn } from "../../utils/motion.js";
import {SectionWrapper } from "../../hoc";

function GalleryItem({
    src,
    info,
    subtitle,
    title,
    index,
    link,
    desc,
    link2
  }) {

    const ref = useRef(null);
    const onScreen = useOnScreen(ref, 0.5);


    return (
      <div
      className={cn("gallery-item-wrapper", { "is-reveal": onScreen })}
      ref={ref}
      >
          <div></div>
          <div className={"gallery-item"}>
            <motion.div  
              variants={slideIn("left", "tween", 0.2, 1)}
            className="gallery-item-info">
              <h1 className="gallery-info-title">{title}</h1>
              <h2 className="gallery-info-subtitle">{subtitle}</h2>
              <p className="gallery-info-category">{info}</p>
              <p className="AboutP">{desc}</p>
              {link2 && <a href={link2}><button className="btn1">Click here to view the project</button></a>}
              <a href={link}><button className="btn1">Click here to view the Source Code</button></a>
            </motion.div >
            <div
              className="gallery-item-image"
              style={{ backgroundImage: `url(${src})`}}
            ></div>
          </div>
          <div></div>
        </div>
    );
  }


function Projects() {
    const ref = useRef(null);
    
    const renderThumb = ({ style, ...props }) => {
      const thumbStyle = {
          backgroundColor: `white`,
          cursor: 'pointer'
      };
      return (
          <div
              style={{ ...style, ...thumbStyle }}
              {...props}/>
      );
    };

    return (
    <div className='ProjectsPage'>
        <motion.div variants={textVariant()}>
            <h2 className={`AboutH1`}>Utility Projects</h2>
        </motion.div>

        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='AboutP'
        >
          I love to work with and build new and interesting utility Apps. Feel free to explore any of the utility apps listed below which might help you in your daily life activities.
        </motion.p>


        

        <div className="gallery projects section-wrapper gallery-wrap" ref={ref}>
            <Scrollbars
                autoHide
                autoHideTimeout={1000}
                autoHideDuration={200}
                className='scrollbar'
                renderThumbVertical={renderThumb}
            >
              {projects.map((image, index) => (
              <GalleryItem
                  key={index}
                  index={index}
                  {...image}
                  />
              ))}
              </Scrollbars>
        </div>

        <motion.div variants={textVariant()}>
            <h2 className={`AboutH1`}>Other Projects</h2>
        </motion.div>

        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='AboutP'
        >
          I am a backend developer as well and have worked with Threejs and a lot more fascinating technologies. Have some great idea to implement your project ? Do ping me via email or my github profile.
        </motion.p>


        

        <div className="gallery projects section-wrapper gallery-wrap" ref={ref}>
            <Scrollbars
                autoHide
                autoHideTimeout={1000}
                autoHideDuration={200}
                className='scrollbar'
                renderThumbVertical={renderThumb}
            >
              {projects2.map((image, index) => (
              <GalleryItem
                  key={index}
                  index={index}
                  {...image}
                  />
              ))}
              </Scrollbars>
        </div>


    </div>
  )
}

export default SectionWrapper(Projects,"projects");