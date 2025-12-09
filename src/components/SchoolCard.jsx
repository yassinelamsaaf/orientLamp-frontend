import { Link } from 'react-router-dom';

const SchoolCard = ({ id, name, logoUrl, description }) => {
  return (
    <Link 
      to={`/school/${id}`} 
      className="block bg-card dark:bg-gray-700 text-card-foreground dark:text-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
    >
      <div className="p-4 flex flex-col items-center">
        <img 
          src={logoUrl} 
          alt={`${name} logo`} 
          className="w-24 h-24 object-contain mb-3"
        />
        <h3 className="text-sm font-semibold text-center">{name}</h3>
        {description && (
          <p className="text-xs text-muted-foreground dark:text-gray-400 text-center mt-2 line-clamp-2">{description}</p>
        )}
      </div>
    </Link>
  );
};

export default SchoolCard;