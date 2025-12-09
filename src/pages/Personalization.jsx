import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../components/Logo';

const Personalization = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    filiereBac: '',
    anneeObtention: '',
    competences: '',
    domaineEtude: '',
    importance: '',
    information: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Personalization data:", formData);
    // In a real app, we would send this data to an API
    navigate('/search');
  };

  const handleSkip = () => {
    navigate('/search');
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 dark:bg-gray-900 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 max-w-md w-full">
        <div className="flex flex-col items-center mb-8">
          <Logo size="md" />
          <h1 className="text-2xl font-bold mt-4 text-center text-foreground dark:text-white">Les informations de personnalisation</h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="filiereBac" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Filière de baccalauréat</label>
            <input
              type="text"
              id="filiereBac"
              name="filiereBac"
              value={formData.filiereBac}
              onChange={handleChange}
              className="orientlamp-input dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              placeholder="Sciences mathématiques, SVT, économie..."
              required
            />
          </div>
          
          <div>
            <label htmlFor="anneeObtention" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Année d'obtention</label>
            <input
              type="text"
              id="anneeObtention"
              name="anneeObtention"
              value={formData.anneeObtention}
              onChange={handleChange}
              className="orientlamp-input dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              placeholder="Ex: 2023"
              required
            />
          </div>
          
          <div>
            <label htmlFor="competences" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Les compétences personels</label>
            <input
              type="text"
              id="competences"
              name="competences"
              value={formData.competences}
              onChange={handleChange}
              className="orientlamp-input dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              placeholder="Programmation, langues étrangères..."
              required
            />
          </div>
          
          <div>
            <label htmlFor="domaineEtude" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Domaine d'étude souhaitable</label>
            <input
              type="text"
              id="domaineEtude"
              name="domaineEtude"
              value={formData.domaineEtude}
              onChange={handleChange}
              className="orientlamp-input dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              placeholder="Informatique, médecine, commerce..."
              required
            />
          </div>
          
          <div>
            <label htmlFor="importance" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Quel la plus importante chose dans un domaine</label>
            <input
              type="text"
              id="importance"
              name="importance"
              value={formData.importance}
              onChange={handleChange}
              className="orientlamp-input dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              placeholder="Perspectives d'emploi, passion, salaire..."
              required
            />
          </div>
          
          <div>
            <label htmlFor="information" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Des informations personnels</label>
            <input
              type="text"
              id="information"
              name="information"
              value={formData.information}
              onChange={handleChange}
              className="orientlamp-input dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              placeholder="Autres informations pertinentes..."
              required
            />
          </div>

          <div className="pt-4 flex justify-between items-center">
            <button
              type="button"
              onClick={handleSkip}
              className="orientlamp-btn-secondary"
            >
              Skip
            </button>
            <button
              type="submit"
              className="orientlamp-btn-primary"
            >
              DONE
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Personalization;
