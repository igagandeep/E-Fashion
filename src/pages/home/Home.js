import React from 'react';
import './Home.css';
import {NavLink} from 'react-router-dom';
import guys from '../../assets/guy-2590795_1920.jpg';
import girls from '../../assets/woman-2564660_640.jpg';
import kids from '../../assets/kid-2185540_640.jpg';
import {motion} from 'framer-motion';


function Home() {

    return (
        
        <div className="landing-page">
            <motion.div className="categories guys"
             transition={{delay:0.2, duration:0.2}}
             whileHover={{
                scale:0.98,
            }} >
                <NavLink to="/guys"><img src={guys} alt="guys"  className="images" /></NavLink>
            </motion.div>

            <motion.div className="categories girls" transition={{delay:0.2, duration:0.2}}
             whileHover={{
                scale:0.98,
            }}>
                <NavLink to="/girls"><img src={girls} alt="girls" className="images"/></NavLink>
            </motion.div>
            <motion.div className="categories kids" transition={{delay:0.2, duration:0.2}}
             whileHover={{
                scale:0.98,
            }}>
                <NavLink to="/kids"><img src={kids} alt="kids" className="images"/></NavLink>
            </motion.div>
            
        </div>
    )
}

export default Home
