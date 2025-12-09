import { useState, useRef } from 'react';
import Layout from '../components/Layout';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";

const Profile = () => {
  const [formData, setFormData] = useState({
    name: 'Utilisateur Demo',
    email: 'utilisateur@demo.com',
    phone: '+212 661234567',
    school: 'INPT',
    graduation: '2026'
  });

  const [profileImage, setProfileImage] = useState(null);
  const [isPhotoDialogOpen, setIsPhotoDialogOpen] = useState(false);
  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Profil mis à jour\nLes modifications ont été enregistrées avec succès.');
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setProfileImage(event.target.result);
          setIsPhotoDialogOpen(false);
          alert('Photo mise à jour\nVotre photo de profil a été modifiée avec succès.');
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  return (
    <Layout>
      <div className="p-4 bg-background dark:bg-gray-800 text-foreground dark:text-white min-h-screen">
        <h1 className="text-2xl font-bold mb-6">Mon Profil</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Profile Summary */}
          <div className="orientlamp-card bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
            <div className="flex flex-col items-center">
              <Avatar className="h-32 w-32">
                {profileImage ? (
                  <AvatarImage src={profileImage} alt="Profile" />
                ) : (
                  <>
                    <AvatarImage src="/placeholder.svg" alt="Profile" />
                    <AvatarFallback className="text-4xl dark:bg-gray-600">UD</AvatarFallback>
                  </>
                )}
              </Avatar>
              <h2 className="text-xl font-semibold mt-4">{formData.name}</h2>
              <p className="text-gray-500 dark:text-gray-300">{formData.email}</p>
              <p className="text-sm text-gray-400 dark:text-gray-400 mt-2">Étudiant(e) à {formData.school}</p>
              <p className="text-sm text-gray-400 dark:text-gray-400">Promotion {formData.graduation}</p>
              
              <Button 
                className="mt-4 w-full bg-orientlamp-gold hover:bg-orientlamp-gold/90"
                onClick={() => setIsPhotoDialogOpen(true)}
              >
                Modifier la photo
              </Button>
              <input 
                type="file" 
                ref={fileInputRef} 
                onChange={handleFileChange} 
                accept="image/*"
                className="hidden"
              />
            </div>
            
            <Separator className="my-6 dark:bg-gray-600" />
            
            <div className="space-y-2">
              <h3 className="font-medium">Statistiques du profil</h3>
              <div className="flex justify-between">
                <span className="text-sm text-gray-500 dark:text-gray-300">Niveau du profil</span>
                <span className="text-sm font-medium">Intermédiaire</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2.5">
                <div className="bg-orientlamp-gold h-2.5 rounded-full" style={{width: '65%'}}></div>
              </div>
              <p className="text-xs text-gray-400 dark:text-gray-400 mt-1">Complétez votre profil pour débloquer plus de fonctionnalités</p>
            </div>
          </div>
          
          {/* Profile Form */}
          <div className="md:col-span-2 orientlamp-card bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Informations personnelles</h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Nom complet
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="dark:bg-gray-600 dark:border-gray-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="dark:bg-gray-600 dark:border-gray-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Téléphone
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="dark:bg-gray-600 dark:border-gray-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="school" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    École/Université
                  </label>
                  <Input
                    id="school"
                    name="school"
                    value={formData.school}
                    onChange={handleChange}
                    className="dark:bg-gray-600 dark:border-gray-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="graduation" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Année de graduation
                  </label>
                  <Input
                    id="graduation"
                    name="graduation"
                    value={formData.graduation}
                    onChange={handleChange}
                    className="dark:bg-gray-600 dark:border-gray-500"
                  />
                </div>
              </div>
              
              <Separator className="my-6 dark:bg-gray-600" />
              
              <h3 className="text-lg font-medium">Préférences de confidentialité</h3>
              <div className="space-y-2 mt-4">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="public-profile"
                    className="rounded text-orientlamp-gold focus:ring-orientlamp-gold mr-2"
                    defaultChecked
                  />
                  <label htmlFor="public-profile" className="text-sm">
                    Rendre mon profil public
                  </label>
                </div>
                
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="email-notifications"
                    className="rounded text-orientlamp-gold focus:ring-orientlamp-gold mr-2"
                    defaultChecked
                  />
                  <label htmlFor="email-notifications" className="text-sm">
                    Recevoir des notifications par email
                  </label>
                </div>
              </div>
              
              <div className="flex justify-end space-x-2 pt-4">
                <Button 
                  type="button" 
                  variant="outline"
                  className="dark:border-gray-500 dark:text-white"
                >
                  Annuler
                </Button>
                <Button 
                  type="submit" 
                  className="bg-orientlamp-gold hover:bg-orientlamp-gold/90"
                >
                  Enregistrer
                </Button>
              </div>
            </form>
          </div>
        </div>

        {/* Photo Upload Dialog */}
        <Dialog open={isPhotoDialogOpen} onOpenChange={setIsPhotoDialogOpen}>
          <DialogContent className="dark:bg-gray-800 dark:text-white">
            <DialogHeader>
              <DialogTitle>Modifier la photo de profil</DialogTitle>
            </DialogHeader>
            
            <div className="flex flex-col items-center justify-center py-6">
              <div 
                className="w-40 h-40 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center mb-4 cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                onClick={triggerFileInput}
              >
                {profileImage ? (
                  <img src={profileImage} alt="Preview" className="w-full h-full object-cover rounded-full" />
                ) : (
                  <span className="text-4xl text-gray-500 dark:text-gray-400">+</span>
                )}
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Cliquez pour sélectionner une image</p>
              <Button 
                onClick={triggerFileInput}
                className="bg-orientlamp-gold hover:bg-orientlamp-gold/90"
              >
                Parcourir les fichiers
              </Button>
            </div>
            
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsPhotoDialogOpen(false)} className="dark:border-gray-600 dark:text-white">
                Annuler
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </Layout>
  );
};

export default Profile;
