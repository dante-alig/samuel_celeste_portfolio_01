import React, { createContext, useContext, useState } from 'react';

const CalendlyContext = createContext();

export const CalendlyProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openCalendlyModal = () => setIsModalOpen(true);
  const closeCalendlyModal = () => setIsModalOpen(false);

  return (
    <CalendlyContext.Provider value={{ isModalOpen, openCalendlyModal, closeCalendlyModal }}>
      {children}
    </CalendlyContext.Provider>
  );
};

export const useCalendly = () => {
  const context = useContext(CalendlyContext);
  if (!context) {
    throw new Error('useCalendly must be used within a CalendlyProvider');
  }
  return context;
};
