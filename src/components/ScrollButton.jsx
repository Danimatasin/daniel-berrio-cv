import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { ArrowDownCircle } from 'react-bootstrap-icons';

export const ScrollButton = () => {
  const [showButton, setShowButton] = useState(false);

  // Controla la visibilidad del botón basado en el scroll
  const handleScroll = () => {
    if (window.pageYOffset > 100) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  // Agrega el evento de scroll al montar/desmontar el componente
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Maneja el clic del botón y redirige a la parte superior de la página
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {showButton && (
        <Button className="my-scroll-button" onClick={handleClick}>
        <ArrowDownCircle className="my-scroll-icon"/>
        </Button>
      )}
    </>
  );
};

