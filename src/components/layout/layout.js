import React from 'react'
import {SideMenu} from '../sideMenu/sideMenu'
import './layout.css'
import learnableImage from "../images/learnableImage.svg";

const Layout = ({children}) => {
    return(
        <div className="layoutWrapper"
        style={{
          backgroundImage: `url(${learnableImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundColor:"#071852"
        }}>
            <SideMenu  />
            {children}
        </div>
    )
}
export {Layout}