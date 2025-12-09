import { Link } from 'react-router-dom';
import Logo from '../components/Logo';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50 p-4">
      <Logo size="lg" />
      
      <div className="text-center mt-8 max-w-md">
        <h1 className="text-4xl font-bold mb-2">404</h1>
        <p className="text-xl text-gray-600 mb-6">Page non trouvée</p>
        <p className="text-gray-500 mb-8">
          Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
        </p>
        
        <Link to="/" className="orientlamp-btn-primary">
          Retour à l'accueil
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
