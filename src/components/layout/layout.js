import React from 'react'
import {SideMenu} from '../sideMenu/sideMenu'
import './layout.css'

const Layout = ({children}) => {
    return(
        <div className="layout-wrapper d-flex">
            <div className="layout-sidemenu"><SideMenu  /> </div>
            <div className="layout-children">{children}</div>
        </div>
    )
}
export {Layout}