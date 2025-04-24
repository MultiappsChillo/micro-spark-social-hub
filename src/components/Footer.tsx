
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-agency-blue to-agency-purple mb-6">
              MICRO-SPARK
            </div>
            <p className="text-gray-400 mb-6">
              Verbinden authentischer Micro-Influencer mit großen Marken für wirkungsvolle Marketing-Kampagnen.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Schnellzugriff</h3>
            <ul className="space-y-3">
              <li><a href="#services" className="text-gray-400 hover:text-white transition">Unsere Leistungen</a></li>
              <li><a href="#how-it-works" className="text-gray-400 hover:text-white transition">Funktionsweise</a></li>
              <li><a href="#case-studies" className="text-gray-400 hover:text-white transition">Fallstudien</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition">Über uns</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition">Kontakt</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Für Creator</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition">Jetzt bewerben</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Creator Ressourcen</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Häufige Fragen</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Creator Richtlinien</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Für Marken</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition">Kampagnen-Strategie</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Erfolgsgeschichten</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Preise</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Gespräch vereinbaren</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Micro-Spark Agency. Alle Rechte vorbehalten.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 hover:text-white transition">Datenschutz</a>
              <a href="#" className="text-gray-500 hover:text-white transition">AGB</a>
              <a href="#" className="text-gray-500 hover:text-white transition">Cookie-Richtlinie</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
