import { Link } from 'react-router-dom';

const HomeContent = () => {
  const featuredSchools = [
    {
      id: 'inpt',
      name: 'INPT - Institut National des Postes et Télécommunications',
      image: '/images/cf6a6163-cc4f-4ea6-b8ab-30dcf6b65961.png',
      location: 'Rabat',
      category: 'Ingénierie & Télécommunications'
    },
    {
      id: 'ensias',
      name: "ENSIAS - École Nationale Supérieure d'Informatique et d'Analyse des Systèmes",
      image: '/placeholder.svg',
      location: 'Rabat',
      category: 'Informatique & Analyse des Systèmes'
    },
    {
      id: 'emi',
      name: 'EMI - École Mohammadia des Ingénieurs',
      image: '/placeholder.svg',
      location: 'Rabat',
      category: 'Génie Civil & Informatique'
    }
  ];

  return (
    <div className="flex-1">
      <div className="max-w-3xl mx-auto text-center mb-8">
        <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
          Votre guide pour l'éducation supérieure au Maroc
        </h1>
        <p className="text-base mb-6 text-gray-600 dark:text-gray-300">
          Découvrez les meilleures écoles et universités marocaines après le baccalauréat. 
          OrientLamp vous aide à trouver la formation idéale qui correspond à votre profil.
        </p>
      </div>

      {/* Features */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Trouvez votre école</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Une base de données complète des écoles et universités marocaines post-bac.
          </p>
          <Link to="/search" className="flex items-center text-orientlamp-gold font-medium">
            Rechercher →
          </Link>
        </div>
        <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Personnalisation</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Recevez des recommandations adaptées à votre profil académique et vos préférences.
          </p>
          <Link to="/personalization" className="flex items-center text-orientlamp-gold font-medium">
            Démarrer →
          </Link>
        </div>
        <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Assistant AI</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Posez vos questions pour obtenir des réponses personnalisées sur votre orientation.
          </p>
          <Link to="/chat" className="flex items-center text-orientlamp-gold font-medium">
            Discuter →
          </Link>
        </div>
      </div>

      {/* Featured Schools */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-6">Écoles en vedette</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {featuredSchools.map(school => (
            <Link 
              key={school.id}
              to={`/school/${school.id}`}
              className="block bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="h-40 overflow-hidden">
                <img 
                  src={school.image} 
                  alt={school.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-1 line-clamp-2 text-gray-900 dark:text-white">{school.name}</h3>
                <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">{school.location}</div>
                <div className="text-xs bg-gray-100 dark:bg-gray-600 text-gray-800 dark:text-gray-200 inline-block px-2 py-1 rounded">
                  {school.category}
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-4 text-center">
          <Link 
            to="/search" 
            className="inline-flex items-center orientlamp-btn-primary"
          >
            Voir toutes les écoles →
          </Link>
        </div>
      </div>

      {/* About */}
      <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md max-w-3xl mx-auto mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">À propos d'OrientLamp</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          OrientLamp est une plateforme dédiée à l'orientation des étudiants marocains après le baccalauréat. 
          Notre mission est de vous aider à trouver la formation qui correspond à vos aspirations et à votre potentiel,
          en vous fournissant des informations détaillées sur les établissements d'enseignement supérieur au Maroc.
        </p>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Notre application centralise toutes les informations essentielles sur les établissements d'enseignement 
          supérieur marocains — emplacements, programmes, taux de réussite, témoignages — dans une base de données 
          unique, facilement accessible et régulièrement mise à jour.
        </p>
      </div>
    </div>
  );
};

export default HomeContent;
