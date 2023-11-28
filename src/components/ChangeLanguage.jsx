import React, { useEffect, useRef, useState } from 'react';

const ChangeLanguage = (props) => {
  const [language, setLanguage] = useState(props.lang); // Default language is English
  const translateDivRef = useRef();

  useEffect(() => {
    const googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: language,
          includedLanguages: 'en,bn',
          layout: window?.google?.translate?.TranslateElement?.InlineLayout?.SIMPLE,
        },
        translateDivRef.current
      );
    };
  
    const loadGoogleTranslateScript = () => {
      const script = document.createElement('script');
      script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      script.onload = () => {
        // Delay the initialization to ensure the script is fully loaded
        setTimeout(googleTranslateElementInit, 1000); // Adjust the delay as needed
      };
  
      document.head.appendChild(script);
    };
  
    if (!window?.google?.translate || !window?.google?.translate?.TranslateElement) {
      loadGoogleTranslateScript();
    } else {
      googleTranslateElementInit();
    }
  }, [language]);
  
  

  const handleLanguageChange = () => {
    // Toggle the language between English and Bangla
    setLanguage(language === 'en' ? 'bn' : 'en');
  };

  
  return (
    <div>
      <div style={{position: "fixed", top: 80, right: 15, zIndex: 1000}} ref={translateDivRef}></div>
    </div>
  );
};

export default ChangeLanguage;
