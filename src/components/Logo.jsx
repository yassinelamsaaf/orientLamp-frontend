import { Link } from 'react-router-dom';

const Logo = ({ size = 'md', showText = true }) => {
  const imageSizes = {
    sm: 'h-8 w-auto',
    md: 'h-10 w-auto',
    lg: 'h-12 w-auto',
  };

  const textSizes = {
    sm: 'text-sm',
    md: 'text-md',
    lg: 'text-lg',
  };

  return (
    <Link to="/dashboard" className="flex items-center gap-2">
      <img
        src="/images/orientLamp-logo.png"
        alt="OrientLamp"
        className={imageSizes[size]}
      />
      {showText && (
        <div className={`font-bold ${textSizes[size]} text-orientlamp-black dark:text-white`}>
          Orient<span className="text-orientlamp-gold">Lamp</span>
        </div>
      )}
    </Link>
  );
};

export default Logo;
