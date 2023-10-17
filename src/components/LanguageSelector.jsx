import React, { useEffect, useState } from "react";
import i18n from "../config/i18n";

function LanguageSelector() {
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

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
      <label>Select Language:</label>
      <select value={selectedLanguage} onChange={(e) => changeLanguage(e.target.value)}>
        <option value="en">English</option>
        <option value="es">Español</option>
        <option value="de">Deutsch</option>
      </select>
    </div>
  );
}

export default LanguageSelector;
