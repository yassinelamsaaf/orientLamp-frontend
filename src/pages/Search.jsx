import { useState } from "react";
import Layout from "../components/Layout";
import SchoolCard from "../components/SchoolCard";
import { Search as SearchIcon } from "lucide-react";

// Sample school data
const schoolsData = [
  {
    id: "inpt",
    name: "Institut National des Postes et Télécommunications",
    logoUrl: "/images/cf6a6163-cc4f-4ea6-b8ab-30dcf6b65961.png",
    description:
      "École d'ingénieurs spécialisée dans les télécommunications et les technologies de l'information",
  },
  {
    id: "enim",
    name: "École Nationale de l'Industrie Minérale",
    logoUrl:
      "https://www.enim.ac.ma/wp-content/uploads/2018/09/cropped-enim_logo.png",
    description:
      "École d'ingénieurs spécialisée dans le domaine des mines et de la géologie",
  },
  {
    id: "ensias",
    name: "École Nationale Supérieure d'Informatique et d'Analyse des Systèmes",
    logoUrl:
      "https://ensias.um5.ac.ma/sites/ensias.um5.ac.ma/files/logo_ensias_2018_0.png",
    description:
      "École d'ingénieurs spécialisée dans l'informatique et les systèmes d'information",
  },
  {
    id: "ehtp",
    name: "École Hassania des Travaux Publics",
    logoUrl: "http://www.ehtp.ac.ma/images/Logo_EHTP_2018.png",
    description:
      "École d'ingénieurs spécialisée dans les travaux publics et le génie civil",
  },
  {
    id: "esith",
    name: "École Supérieure des Industries du Textile et de l'Habillement",
    logoUrl:
      "https://www.esith.ac.ma/wp-content/uploads/2020/03/cropped-Logo_ESITH.png",
    description: "École spécialisée dans le textile et l'habillement",
  },
  {
    id: "ensem",
    name: "École Nationale Supérieure d'Électricité et de Mécanique",
    logoUrl:
      "https://ensem.um5.ac.ma/sites/ensem.um5.ac.ma/files/logo%20ENSEM.png",
    description: "École d'ingénieurs spécialisée en électricité et mécanique",
  },
  {
    id: "encg",
    name: "École Nationale de Commerce et de Gestion",
    logoUrl:
      "https://encg-settat.ma/wp-content/uploads/2022/03/Logo-ENCG-vectorise.png",
    description: "École spécialisée dans le commerce et la gestion",
  },
  {
    id: "fsjes",
    name: "Faculté des Sciences Juridiques, Économiques et Sociales",
    logoUrl: "https://www.um5.ac.ma/sites/default/files/logo-fsjes-souissi.png",
    description:
      "Faculté spécialisée dans les sciences juridiques, économiques et sociales",
  },
];

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredSchools, setFilteredSchools] = useState(schoolsData);

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    const filtered = schoolsData.filter(
      (school) =>
        school.name.toLowerCase().includes(term.toLowerCase()) ||
        school.description?.toLowerCase().includes(term.toLowerCase())
    );

    setFilteredSchools(filtered);
  };

  return (
    <Layout>
      <div className="p-4 bg-background dark:bg-gray-900 text-foreground dark:text-white h-full overflow-auto">
        <h1 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">
          Rechercher des écoles
        </h1>

        <div className="relative mb-4 md:mb-8">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <SearchIcon
              size={18}
              className="text-muted-foreground dark:text-gray-400"
            />
          </div>
          <input
            type="text"
            placeholder="Rechercher par nom d'école..."
            value={searchTerm}
            onChange={handleSearch}
            className="orientlamp-input pl-10 bg-input dark:bg-gray-700 dark:border-gray-600 text-foreground dark:text-white w-full"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-4">
          {filteredSchools.map((school) => (
            <SchoolCard
              key={school.id}
              id={school.id}
              name={school.name}
              logoUrl={school.logoUrl}
              description={school.description}
            />
          ))}

          {filteredSchools.length === 0 && (
            <div className="col-span-full text-center py-6 md:py-10">
              <p className="text-muted-foreground dark:text-gray-400">
                Aucun résultat trouvé pour "{searchTerm}"
              </p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Search;
