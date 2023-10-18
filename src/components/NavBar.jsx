import React from "react";
import {Link} from "react-router-dom";
import LanguageSelector from "./LanguageSelector";
import { useTranslation } from "react-i18next";



const NavBar = () =>{
    const { t } = useTranslation();
    const links =[{
        name: t("home"),
        href: "/"
      },
      {
        name: t("contact"),
        href: "/contact"
      },
    ]
    return <div>
        {links.map(x => (
            <Link to={x.href}>{x.name}</Link>
        ))}
        <LanguageSelector></LanguageSelector>
    </div>
}

export default NavBar;