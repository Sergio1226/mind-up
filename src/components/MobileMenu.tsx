
import { useState } from 'react';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const sections: { id: string; label: string }[] = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'conceptos', label: 'Conceptos' },
    { id: 'modelo', label: 'Modelo' },
    { id: 'recomendaciones', label: 'Recomendaciones' },
    { id: 'estrategias', label: 'Estrategias' }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-gray-700 hover:text-purple-600 transition-colors"
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        )}
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 mx-4 bg-white/90 backdrop-blur-lg rounded-xl p-4 shadow-xl animate-in slide-in-from-top">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className="block w-full text-left py-3 px-4 rounded-lg hover:bg-purple-50 transition-colors text-gray-700 font-medium"
            >
              {section.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}