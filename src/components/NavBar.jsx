import React from "react";
import {Link} from "react-router-dom";
import LanguageSelector from "./LanguageSelector";

const links =[{
    name: "Home",
    href: "/"
  },
  {
    name: "Contact",
    href: "/contact"
  },
]

const NavBar = () =>{
    return <div>
        {links.map(x => (
            <Link to={x.href}>{x.name}</Link>
        ))}
        <LanguageSelector></LanguageSelector>
    </div>
}

export default NavBar;