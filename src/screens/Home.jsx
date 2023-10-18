import React from 'react';
import NavBar from '../components/NavBar';
import { useTranslation } from "react-i18next";
import Icon from '../components/Icon';

const Home = () => {
    const { t } = useTranslation();
  return( 
    <>
    <NavBar />
    <div><h1>{t("welcome")}</h1></div>
    <Icon></Icon>
    </>
  )
}

export default Home