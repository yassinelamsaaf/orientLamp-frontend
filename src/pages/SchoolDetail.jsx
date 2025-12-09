import { useParams } from 'react-router-dom';
import Layout from '../components/Layout';
import { ExternalLink, Globe, School } from 'lucide-react';
import { Button } from '@/components/ui/button';

// School detailed data - keeping main schools from Search page
const schoolsDetailData = {
  "inpt": {
    name: "Institut National des Postes et Télécommunications",
    logoUrl: "/images/cf6a6163-cc4f-4ea6-b8ab-30dcf6b65961.png",
    headerImgUrl: "https://www.inpt.ac.ma/sites/default/files/slider-bg/ceremony-2021.jpg",
    description: `L'Institut National des Postes et Télécommunications (INPT) est une Grande École d'Ingénieurs marocaine fondée en 1961, relevant du Ministère de l'Industrie, du Commerce, de l'Économie Verte et Numérique.
    
L'INPT a pour mission de former des ingénieurs d'État dans les domaines des technologies de l'information et de la communication, des télécommunications et du numérique.`,
    location: "Rabat",
    website: "https://www.inpt.ac.ma",
    earthView: "https://earth.google.com/web/search/inpt",
    admissionRequirements: "Concours national commun (CNC) ou concours spécifique",
    programs: [
      "Ingénierie des Télécommunications",
      "Ingénierie des Systèmes d'Information",
      "Ingénierie du Digital",
      "Data Engineering & Intelligence Artificielle"
    ],
    duration: "3 ans pour le cycle ingénieur",
    tuitionFees: "25 000 MAD par an environ",
    galleryImages: [
      "https://www.inpt.ac.ma/sites/default/files/photos/IMG_0134.JPG",
      "https://www.inpt.ac.ma/sites/default/files/photos/IMG_0138.JPG",
      "https://www.inpt.ac.ma/sites/default/files/photos/IMG_0155.JPG"
    ]
  },
  "ensias": {
    name: "École Nationale Supérieure d'Informatique et d'Analyse des Systèmes",
    logoUrl: "https://ensias.um5.ac.ma/sites/ensias.um5.ac.ma/files/logo_ensias_2018_0.png",
    headerImgUrl: "https://ensias.um5.ac.ma/sites/default/files/styles/slideshow/public/slideshow/image_ensias_site.jpg",
    description: `L'École Nationale Supérieure d'Informatique et d'Analyse des Systèmes (ENSIAS) est une grande école d'ingénieurs marocaine créée en 1992 et rattachée à l'Université Mohammed V de Rabat.

L'ENSIAS forme des ingénieurs d'État spécialisés dans les domaines de l'informatique, des réseaux de télécommunications, des systèmes embarqués, de l'intelligence artificielle, de la cybersécurité.`,
    location: "Rabat",
    website: "https://ensias.um5.ac.ma",
    earthView: "https://earth.google.com/web/search/ensias",
    admissionRequirements: "Concours national commun (CNC) ou concours spécifique",
    programs: [
      "Génie Logiciel",
      "Sécurité des Systèmes d'Information",
      "Intelligence Artificielle",
      "Data Science",
      "Ingénierie des Réseaux et Systèmes",
      "Business Intelligence"
    ],
    duration: "3 ans pour le cycle ingénieur",
    tuitionFees: "Environ 5 000 MAD par an (public)",
    galleryImages: [
      "https://ensias.um5.ac.ma/sites/default/files/ensias_15.jpeg",
      "https://ensias.um5.ac.ma/sites/default/files/ensias_124.jpeg",
      "https://ensias.um5.ac.ma/sites/default/files/ensias_51.jpeg"
    ]
  },
  "enim": {
    name: "École Nationale de l'Industrie Minérale",
    logoUrl: "https://www.enim.ac.ma/wp-content/uploads/2018/09/cropped-enim_logo.png",
    headerImgUrl: "https://www.enim.ac.ma/wp-content/uploads/2022/03/Mot-de-bienvenue.jpg",
    description: `L'École Nationale de l'Industrie Minérale (ENIM) est une grande école d'ingénieurs marocaine fondée en 1972 à Rabat. Elle forme des ingénieurs spécialisés dans les domaines des mines, de la géologie, de l'environnement et de l'énergie.`,
    location: "Rabat",
    website: "https://www.enim.ac.ma",
    earthView: "https://earth.google.com/web/search/enim+rabat",
    admissionRequirements: "Concours national commun (CNC)",
    programs: [
      "Génie Minier",
      "Géologie de l'Ingénieur",
      "Environnement et Développement Durable",
      "Valorisation des Ressources Minérales"
    ],
    duration: "3 ans pour le cycle ingénieur",
    tuitionFees: "Environ 5 000 MAD par an (public)",
    galleryImages: [
      "https://www.enim.ac.ma/wp-content/uploads/2022/03/Galerie-4.jpg",
      "https://www.enim.ac.ma/wp-content/uploads/2022/03/Galerie-6.jpg",
      "https://www.enim.ac.ma/wp-content/uploads/2022/03/Galerie-8.jpg"
    ]
  },
  "ehtp": {
    name: "École Hassania des Travaux Publics",
    logoUrl: "http://www.ehtp.ac.ma/images/Logo_EHTP_2018.png",
    headerImgUrl: "https://assets.afcdn.com/story/20160906/954767_w980h638c1cx511cy250.jpg",
    description: `L'École Hassania des Travaux Publics (EHTP) est une grande école d'ingénieurs marocaine fondée en 1971 à Casablanca. C'est l'une des écoles d'ingénieurs les plus prestigieuses du Maroc.`,
    location: "Casablanca",
    website: "http://www.ehtp.ac.ma",
    earthView: "https://earth.google.com/web/search/EHTP+Casablanca",
    admissionRequirements: "Concours national commun (CNC)",
    programs: [
      "Génie Civil",
      "Hydraulique et Environnement",
      "Génie Urbain",
      "Ingénierie des Systèmes d'Information",
      "Ingénierie des Transports et de la Logistique"
    ],
    duration: "3 ans pour le cycle ingénieur",
    tuitionFees: "Environ 5 000 MAD par an (public)",
    galleryImages: [
      "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg",
      "https://images.pexels.com/photos/159213/hall-congress-architecture-building-159213.jpeg",
      "https://images.pexels.com/photos/2041540/pexels-photo-2041540.jpeg"
    ]
  },
  "esith": {
    name: "École Supérieure des Industries du Textile et de l'Habillement",
    logoUrl: "https://www.esith.ac.ma/wp-content/uploads/2020/03/cropped-Logo_ESITH.png",
    headerImgUrl: "https://www.esith.ac.ma/wp-content/uploads/2023/01/DSC_2551-scaled.jpg",
    description: `L'École Supérieure des Industries du Textile et de l'Habillement (ESITH) est un établissement d'enseignement supérieur marocain fondé en 1996 à Casablanca, spécialisé dans les domaines du textile, de l'habillement et du cuir.`,
    location: "Casablanca",
    website: "https://www.esith.ac.ma",
    earthView: "https://earth.google.com/web/search/esith+casablanca",
    admissionRequirements: "Concours d'admission après le baccalauréat",
    programs: [
      "Ingénierie Textile",
      "Ingénierie Habillement",
      "Logistique Internationale",
      "Développement en Habillement",
      "Management de la Qualité"
    ],
    duration: "5 ans après le baccalauréat",
    tuitionFees: "Environ 25 000 MAD par an",
    galleryImages: [
      "https://www.esith.ac.ma/wp-content/uploads/2022/05/IMG_6316-scaled.jpg",
      "https://www.esith.ac.ma/wp-content/uploads/2022/06/ESITH_3-scaled.jpg",
      "https://www.esith.ac.ma/wp-content/uploads/2022/06/ESITH_4-scaled.jpg"
    ]
  },
  "ensem": {
    name: "École Nationale Supérieure d'Électricité et de Mécanique",
    logoUrl: "https://ensem.um5.ac.ma/sites/ensem.um5.ac.ma/files/logo%20ENSEM.png",
    headerImgUrl: "https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg",
    description: `L'École Nationale Supérieure d'Électricité et de Mécanique (ENSEM) est une grande école d'ingénieurs marocaine fondée en 1961 à Casablanca. Elle est rattachée à l'Université Hassan II de Casablanca.`,
    location: "Casablanca",
    website: "https://ensem.um5.ac.ma",
    earthView: "https://earth.google.com/web/search/ensem+casablanca",
    admissionRequirements: "Concours national commun (CNC)",
    programs: [
      "Génie Électrique",
      "Génie Mécanique",
      "Génie Industriel",
      "Génie des Systèmes Électroniques",
      "Informatique Industrielle"
    ],
    duration: "3 ans pour le cycle ingénieur",
    tuitionFees: "Environ 5 000 MAD par an (public)",
    galleryImages: [
      "https://images.pexels.com/photos/442574/pexels-photo-442574.jpeg",
      "https://images.pexels.com/photos/2760243/pexels-photo-2760243.jpeg",
      "https://images.pexels.com/photos/267507/pexels-photo-267507.jpeg"
    ]
  },
  "encg": {
    name: "École Nationale de Commerce et de Gestion",
    logoUrl: "https://encg-settat.ma/wp-content/uploads/2022/03/Logo-ENCG-vectorise.png",
    headerImgUrl: "https://images.pexels.com/photos/1181622/pexels-photo-1181622.jpeg",
    description: `L'École Nationale de Commerce et de Gestion (ENCG) est un réseau d'écoles supérieures de commerce et de gestion publiques au Maroc.`,
    location: "Plusieurs villes du Maroc",
    website: "https://encg-settat.ma/",
    earthView: "https://earth.google.com/web/search/encg+settat",
    admissionRequirements: "Concours national d'accès aux ENCG",
    programs: [
      "Commerce International",
      "Marketing et Action Commerciale",
      "Finance et Comptabilité",
      "Audit et Contrôle de Gestion",
      "Gestion des Ressources Humaines",
      "Management des Systèmes d'Information"
    ],
    duration: "5 ans après le baccalauréat",
    tuitionFees: "Environ 5 000 MAD par an (public)",
    galleryImages: [
      "https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg",
      "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg",
      "https://images.pexels.com/photos/3182755/pexels-photo-3182755.jpeg"
    ]
  },
  "fsjes": {
    name: "Faculté des Sciences Juridiques, Économiques et Sociales",
    logoUrl: "https://www.um5.ac.ma/sites/default/files/logo-fsjes-souissi.png",
    headerImgUrl: "https://images.pexels.com/photos/159775/library-la-trobe-study-students-159775.jpeg",
    description: `Les Facultés des Sciences Juridiques, Économiques et Sociales (FSJES) sont des établissements d'enseignement supérieur publics au Maroc.`,
    location: "Plusieurs villes du Maroc",
    website: "https://www.um5.ac.ma/",
    earthView: "https://earth.google.com/web/search/FSJES+Souissi+Rabat",
    admissionRequirements: "Accès direct après le baccalauréat",
    programs: [
      "Droit Privé",
      "Droit Public",
      "Sciences Économiques",
      "Sciences de Gestion",
      "Finance",
      "Commerce International"
    ],
    duration: "3 ans pour la licence, 2 ans pour le master",
    tuitionFees: "Environ 500 MAD par an (public)",
    galleryImages: [
      "https://images.pexels.com/photos/207662/pexels-photo-207662.jpeg",
      "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg",
      "https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg"
    ]
  }
};

const GenericSchoolDetail = ({ id }) => {
  return (
    <div className="pb-8 bg-background dark:bg-gray-900 text-foreground dark:text-white">
      <div className="relative h-48 md:h-64 bg-orientlamp-black mb-16 overflow-hidden">
        <img 
          src="https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg" 
          alt="École header" 
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-card dark:bg-gray-700 text-card-foreground dark:text-white rounded-lg shadow-lg p-4 flex items-center justify-center w-24 h-24">
          <School size={48} className="text-orientlamp-gold" />
        </div>
      </div>

      <div className="orientlamp-container">
        <div className="text-center mb-8">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">École {id.toUpperCase()}</h1>
          <div className="flex justify-center items-center gap-4 text-sm text-muted-foreground dark:text-gray-400">
            <span>Information non disponible</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="md:col-span-2">
            <div className="orientlamp-card bg-card dark:bg-gray-700 text-card-foreground dark:text-white">
              <h2 className="text-xl font-semibold mb-4">À propos de l'école</h2>
              <div className="prose max-w-none whitespace-pre-line">
                Cette école n'est pas encore complètement documentée dans notre base de données.
                Nous travaillons à enrichir nos informations pour vous fournir des détails précis sur cet établissement.
              </div>
            </div>
          </div>
          <div>
            <div className="orientlamp-card bg-card dark:bg-gray-700 text-card-foreground dark:text-white">
              <h2 className="text-xl font-semibold mb-4">Informations clés</h2>
              <ul className="space-y-3">
                <li>
                  <strong className="block text-sm">Conditions d'admission:</strong>
                  <span className="text-muted-foreground dark:text-gray-400">Information à venir</span>
                </li>
                <li>
                  <strong className="block text-sm">Durée des études:</strong>
                  <span className="text-muted-foreground dark:text-gray-400">Information à venir</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="orientlamp-card bg-orientlamp-gold text-white">
          <div className="flex flex-col md:flex-row md:items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold mb-2">Intéressé par cette école?</h2>
              <p className="mb-4 md:mb-0">Créez un compte pour enregistrer cette école et obtenir plus d'informations.</p>
            </div>
            <button className="bg-white text-orientlamp-gold font-medium py-2 px-6 rounded-md hover:bg-gray-100 transition-colors">
              Plus d'informations
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const SchoolDetail = () => {
  const { id } = useParams();
  const school = id ? schoolsDetailData[id] : null;

  if (!school && id) {
    return (
      <Layout>
        <GenericSchoolDetail id={id} />
      </Layout>
    );
  }

  if (!school) {
    return (
      <Layout>
        <div className="p-8 text-center bg-background dark:bg-gray-900 text-foreground dark:text-white">
          <h1 className="text-2xl font-bold mb-4">École non trouvée</h1>
          <p>Désolé, l'école que vous recherchez n'existe pas dans notre base de données.</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="pb-8 bg-background dark:bg-gray-900 text-foreground dark:text-white">
        {/* Header with image */}
        <div className="relative h-48 md:h-64 bg-orientlamp-black mb-16 overflow-hidden">
          {school.headerImgUrl && (
            <img 
              src={school.headerImgUrl} 
              alt={school.name} 
              className="w-full h-full object-cover opacity-50"
            />
          )}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-card dark:bg-gray-700 text-card-foreground dark:text-white rounded-lg shadow-lg p-4 flex items-center justify-center w-24 h-24">
            <img 
              src={school.logoUrl} 
              alt={`${school.name} logo`} 
              className="max-w-full max-h-full"
            />
          </div>
        </div>

        <div className="orientlamp-container">
          {/* School name and basic info */}
          <div className="text-center mb-8">
            <h1 className="text-2xl md:text-3xl font-bold mb-2">{school.name}</h1>
            <div className="flex justify-center items-center gap-4 text-sm text-muted-foreground dark:text-gray-400">
              {school.location && <span>{school.location}</span>}
              {school.website && (
                <a 
                  href={school.website} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-orientlamp-gold hover:underline"
                >
                  Site web officiel
                </a>
              )}
            </div>
            
            {/* Google Earth 360° View Button */}
            {school.earthView && (
              <div className="mt-4">
                <Button
                  variant="outline"
                  className="border-orientlamp-gold text-orientlamp-gold hover:bg-orientlamp-gold hover:text-white"
                  onClick={() => window.open(school.earthView, '_blank')}
                >
                  <Globe className="mr-2 h-4 w-4" />
                  Explorer en 360°
                </Button>
              </div>
            )}
          </div>

          {/* School description and details */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="md:col-span-2">
              <div className="orientlamp-card bg-card dark:bg-gray-700 text-card-foreground dark:text-white">
                <h2 className="text-xl font-semibold mb-4">À propos de l'école</h2>
                <div className="prose max-w-none whitespace-pre-line">
                  {school.description}
                </div>
              </div>
            </div>
            <div>
              <div className="orientlamp-card bg-card dark:bg-gray-700 text-card-foreground dark:text-white">
                <h2 className="text-xl font-semibold mb-4">Informations clés</h2>
                <ul className="space-y-3">
                  {school.admissionRequirements && (
                    <li>
                      <strong className="block text-sm">Conditions d'admission:</strong>
                      <span className="text-muted-foreground dark:text-gray-400">{school.admissionRequirements}</span>
                    </li>
                  )}
                  {school.duration && (
                    <li>
                      <strong className="block text-sm">Durée des études:</strong>
                      <span className="text-muted-foreground dark:text-gray-400">{school.duration}</span>
                    </li>
                  )}
                  {school.tuitionFees && (
                    <li>
                      <strong className="block text-sm">Frais de scolarité:</strong>
                      <span className="text-muted-foreground dark:text-gray-400">{school.tuitionFees}</span>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </div>

          {/* Programs */}
          {school.programs && school.programs.length > 0 && (
            <div className="orientlamp-card bg-card dark:bg-gray-700 text-card-foreground dark:text-white mb-8">
              <h2 className="text-xl font-semibold mb-4">Filières disponibles</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {school.programs.map((program, index) => (
                  <div 
                    key={index} 
                    className="bg-muted dark:bg-gray-600 border border-border dark:border-gray-500 rounded-md p-3 hover:bg-orientlamp-gold hover:text-white transition-colors"
                  >
                    {program}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Gallery */}
          {school.galleryImages && school.galleryImages.length > 0 && (
            <div className="orientlamp-card bg-card dark:bg-gray-700 text-card-foreground dark:text-white mb-8">
              <h2 className="text-xl font-semibold mb-4">Galerie</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {school.galleryImages.map((image, index) => (
                  <div key={index} className="aspect-video rounded-md overflow-hidden">
                    <img 
                      src={image} 
                      alt={`${school.name} image ${index + 1}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Call to action */}
          <div className="orientlamp-card bg-orientlamp-gold text-white">
            <div className="flex flex-col md:flex-row md:items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold mb-2">Intéressé par cette école?</h2>
                <p className="mb-4 md:mb-0">Créez un compte pour enregistrer cette école et obtenir plus d'informations.</p>
              </div>
              <button className="bg-white text-orientlamp-gold font-medium py-2 px-6 rounded-md hover:bg-gray-100 transition-colors">
                Plus d'informations
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SchoolDetail;
