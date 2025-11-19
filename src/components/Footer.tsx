import { MapPin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <img
              src="/Logo_Dark.png"
              alt="ENSolutions"
              className="w-40 mb-4 opacity-90"
            />
            <p className="text-gray-400 text-sm leading-relaxed">
              Websites. Reclame. Groei.
            </p>
          </div>

          <div>
            <h4 className="text-white font-normal mb-4">Contact</h4>
            <div className="space-y-3">
              <a
                href="mailto:ensolutionsbe@hotmail.com"
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"
              >
                <Mail size={16} />
                <span>ensolutionsbe@hotmail.com</span>
              </a>
              <a
                href="https://maps.app.goo.gl/WCa8r4TysCpqNf3d9"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"
              >
                <MapPin size={16} />
                <span>Bekijk locatie</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-normal mb-4">Diensten</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link to="/services/foto-videografie" className="hover:text-white transition-colors">
                  Foto & Videografie
                </Link>
              </li>
              <li>
                <Link to="/services/webdesign" className="hover:text-white transition-colors">
                  Webdesign
                </Link>
              </li>
              <li>
                <Link to="/services/branding" className="hover:text-white transition-colors">
                  Branding
                </Link>
              </li>
              <li>
                <Link to="/services/sociaal-media" className="hover:text-white transition-colors">
                  Sociaal Media Beheer
                </Link>
              </li>
              <li>
                <Link to="/services/all-in-one" className="hover:text-white transition-colors">
                  All-In-One
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © 2025 ENSolutions. Alle rechten voorbehouden.
          </p>
        </div>
      </div>
    </footer>
  );
}
