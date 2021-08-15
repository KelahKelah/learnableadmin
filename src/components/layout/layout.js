import React from 'react'
import {SideMenu} from '../sideMenu/sideMenu'
import './layout.css'

const Layout = ({children}) => {
    return(
        <div className="layoutWrapper">
            <SideMenu  />
            {children}
        </div>
    )
}
export {Layout}