import React from 'react';
import NavBar from '../components/NavBar';
import { useTranslation } from "react-i18next";

const Home = () => {
    const { t } = useTranslation();
  return( 
    <>
    <NavBar />
    <div><h1>{t("welcome")}</h1></div>
    </>
  )
}

export default Home