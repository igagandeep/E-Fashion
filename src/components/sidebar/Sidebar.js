import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './Sidebar.css';
import Slider from '@material-ui/core/Slider';

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
      width: 300
    },
    margin: {
      height: theme.spacing(3)
    },
    thumb: {
      background: "black",
    },
    mark: {
      background: "black"
    },
    rail: {
      background: "linear-gradient(to right, red, red 50%, green 50%, green);"
    },
    track: {
      background: "black"
    },
    valueLabel: {
      "&>*": {
        background: "black"
      }
    }
  }));
  

function Sidebar({sidebar}) {
    const classes = useStyles();
    // const[sidebar, setSidebar] = useState(false);
    const [price, setPrice] = useState([20,37]);

    
    const handlePrice = (e, newValue) => {
        setPrice(newValue);
    }

  // const showSideBar = () => {
  //   setSidebar(!sidebar);
  // }

    return (
        <div id="sidebar-container">
            {/* <div className="hamburger" >
              <Link to="#"> 
                <MenuIcon  fontSize="large" onClick={showSideBar}/>   
              </Link> 
            </div> */}
            <div className={sidebar ? 'sidebar active' : 'sidebar'}>

                <div className="categories">
                    <h2>Categories</h2>
                    <hr />
                    <ul>
                        <li>
                            <Link className="categories-items" to="#">Men</Link>
                        </li>
                        
                        <li>
                            <Link  className="categories-items" to="#">Women</Link>
                        </li>
                        <li>
                            <Link className="categories-items" to="#">Electronics</Link>
                        </li>
                        <li>
                            <Link className="categories-items" to="#">Handbags</Link>
                        </li>                        
                    </ul>  
                </div>
                <br/>
                <div className='prices'>
                    <h2>Filter By Prices</h2>
                    
                        <Slider  

                            classes={{
                                    thumb: classes.thumb,
                                    track: classes.track,
                                    valueLabel: classes.valueLabel,
                                    }}
                            value={price}
                            onChange={handlePrice}
                            valueLabelDisplay="auto"
                            aria-labelledby="range-slider"
                            min={0}
                            max={250}     
                        />
                      
                    
                   
                </div>

            </div>
           
        </div>
    )
}

export default Sidebar
