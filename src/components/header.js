import React from 'react';
import { useState } from 'react';
import './header.css'

const Header = ({text,icon,home,about}) => {
    const[showmenu,setMenu] = useState(false)
    let menu;
    if(showmenu){
        menu = <div className="menu">
                <a href='/' className="text text">{home}</a>
                <a href='/about' className="text text2">{about}</a>
               </div>   
    }
    return ( 
        <div>
            <div className="header">
                <p>{text}</p>
                <i className="icon" onClick={()=>{
                    setMenu(!showmenu)
                }}>{icon}</i>
            </div>
            {menu}
        </div>
     );
}
 
export default Header;