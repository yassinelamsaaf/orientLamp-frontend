import { useState } from 'react';
import Layout from '../components/Layout';
import { Moon, Sun, Languages, User } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useTheme } from '../hooks/useTheme';

const Settings = () => {
  const [language, setLanguage] = useState('fr');
  const { theme, toggleTheme } = useTheme();

  const changeLanguage = (lang) => {
    setLanguage(lang);
    alert(`Langue mise à jour: ${lang === 'fr' ? 'Français' : lang === 'ar' ? 'العربية' : 'English'}`);
  };

  return (
    <Layout>
      <div className="p-4 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Paramètres</h1>
          <div className="flex items-center">
            <Avatar className="h-10 w-10">
              <AvatarImage src="/placeholder.svg" alt="Profile" />
              <AvatarFallback>UD</AvatarFallback>
            </Avatar>
            <span className="ml-3 font-medium text-gray-900 dark:text-white">Utilisateur Demo</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Profile Settings */}
          <div className="orientlamp-card dark:bg-gray-800 col-span-2">
            <h2 className="text-xl font-semibold mb-4">Profil</h2>
            <div className="flex items-center space-x-6">
              <Avatar className="h-24 w-24">
                <AvatarImage src="/placeholder.svg" alt="Profile" />
                <AvatarFallback className="text-2xl">UD</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="text-lg font-medium">Utilisateur Demo</h3>
                <p className="text-gray-500 dark:text-gray-400">utilisateur@demo.com</p>
                <Button 
                  variant="outline" 
                  className="mt-2 border-orientlamp-gold text-orientlamp-gold hover:bg-orientlamp-gold hover:text-white"
                >
                  <User size={16} className="mr-2" />
                  Modifier le profil
                </Button>
              </div>
            </div>
          </div>
          
          {/* Theme Settings */}
          <div className="orientlamp-card dark:bg-gray-800">
            <h2 className="text-xl font-semibold mb-4">Apparence</h2>
            <div className="flex items-center justify-between">
              <span>Mode {theme === 'light' ? 'clair' : 'sombre'}</span>
              <div className="flex items-center space-x-2">
                <Sun size={18} className={theme === 'light' ? "text-orientlamp-gold" : ""} />
                <Switch 
                  checked={theme === 'dark'}
                  onCheckedChange={toggleTheme}
                  className="data-[state=checked]:bg-orientlamp-gold"
                />
                <Moon size={18} className={theme === 'dark' ? "text-orientlamp-gold" : ""} />
              </div>
            </div>
          </div>
          
          {/* Language Settings */}
          <div className="orientlamp-card dark:bg-gray-800">
            <h2 className="text-xl font-semibold mb-4">Langue</h2>
            <div className="flex items-center justify-between">
              <span>Langue actuelle: {language === 'fr' ? 'Français' : language === 'ar' ? 'العربية' : 'English'}</span>
              <Dialog>
                <DialogTrigger asChild>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-orientlamp-gold text-orientlamp-gold hover:bg-orientlamp-gold hover:text-white"
                  >
                    <Languages size={18} className="mr-2" />
                    Changer
                  </Button>
                </DialogTrigger>
                <DialogContent className="dark:bg-gray-800 dark:text-white">
                  <DialogHeader>
                    <DialogTitle>Changer la langue</DialogTitle>
                    <DialogDescription className="dark:text-gray-300">
                      Sélectionnez la langue de votre choix
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid grid-cols-1 gap-4 py-4">
                    <Button 
                      variant={language === 'fr' ? "default" : "outline"} 
                      onClick={() => changeLanguage('fr')}
                      className={language === 'fr' ? "bg-orientlamp-gold hover:bg-orientlamp-gold/90" : ""}
                    >
                      Français
                    </Button>
                    <Button 
                      variant={language === 'ar' ? "default" : "outline"} 
                      onClick={() => changeLanguage('ar')}
                      className={language === 'ar' ? "bg-orientlamp-gold hover:bg-orientlamp-gold/90" : ""}
                    >
                      العربية
                    </Button>
                    <Button 
                      variant={language === 'en' ? "default" : "outline"} 
                      onClick={() => changeLanguage('en')}
                      className={language === 'en' ? "bg-orientlamp-gold hover:bg-orientlamp-gold/90" : ""}
                    >
                      English
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
          
          {/* About OrientLamp */}
          <div className="orientlamp-card dark:bg-gray-800 md:col-span-2">
            <h2 className="text-xl font-semibold mb-4">À propos d'OrientLamp</h2>
            <div className="prose max-w-none text-sm dark:text-gray-300">
              <p className="mb-3">
                OrientLamp est une solution innovante conçue pour révolutionner l'orientation scolaire au Maroc, en aidant les étudiants à visualiser leur avenir académique et professionnel.
              </p>
              <p className="mb-3">
                Notre application centralise toutes les informations essentielles sur les établissements d'enseignement supérieur marocains — emplacements, programmes, taux de réussite, témoignages — dans une base de données unique, facilement accessible et régulièrement mise à jour.
              </p>
              <p>
                Avec OrientLamp, explorez les campus en 3D grâce à Google Earth, accédez à des contenus interactifs, et bénéficiez d'un accompagnement personnalisé via notre chatbot intelligent.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Settings;
