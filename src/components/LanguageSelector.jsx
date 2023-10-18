import React, { useEffect, useState } from "react";
import i18n from "../config/i18n";
import { useTranslation } from "react-i18next";
import '../css/components.css'
import { faLanguage } from '@fortawesome/free-solid-svg-icons'; // Importa el ícono que deseas utilizar
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function LanguageSelector() {
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);
  const { t } = useTranslation();

  useEffect(() => {
    // Recupera el idioma seleccionado del almacenamiento local, si está disponible
    const savedLanguage = localStorage.getItem("selectedLanguage");
    if (savedLanguage) {
      setSelectedLanguage(savedLanguage);
      i18n.changeLanguage(savedLanguage);
    }
  }, []);

  const changeLanguage = (language) => {
    setSelectedLanguage(language);
    i18n.changeLanguage(language);
    // Guarda el idioma seleccionado en el almacenamiento local
    localStorage.setItem("selectedLanguage", language);
  };

  return (
    <div>
      <label>{t("language")}</label>
      <select className="select-lang" value={<FontAwesomeIcon icon="fa-solid fa-language" /> + selectedLanguage} onChange={(e) => changeLanguage(e.target.value)}>
        <option value="en"><FontAwesomeIcon icon={faLanguage} />English</option>
        <option value="es"><FontAwesomeIcon icon={faLanguage} />Español</option>
        <option value="de">🇩🇪 Deutsch</option>
        <option value="zh">🇨🇳 中文</option>
        <option value="ar">Arabic</option>
        <option value="fr">Francés</option>
        <option value="ja">Japanese</option>
        
      </select>
    </div>
  );
}

export default LanguageSelector;
