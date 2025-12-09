import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Info } from 'lucide-react';

const AboutOrientLampModal = ({ triggerText = "À propos d'OrientLamp" }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="border-orientlamp-gold text-orientlamp-gold hover:bg-orientlamp-gold hover:text-white">
          <Info className="mr-2 h-4 w-4" />
          {triggerText}
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-3xl max-h-[80vh] overflow-auto">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold mb-2">OrientLamp - Révolutionner l'orientation scolaire au Maroc</DialogTitle>
          <DialogDescription>
            Une solution innovante pour l'orientation des étudiants
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4 mt-4">
          <h3 className="text-lg font-semibold">Défis actuels</h3>
          <p>
            Le système d'orientation au Maroc fait face à trois défis majeurs :
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Dispersion des données</strong> : Les informations sur les établissements et programmes disponibles sont dispersées à travers de nombreuses sources, rendant difficile l'accès à une information centralisée, fiable et facilement consultable.
            </li>
            <li>
              <strong>Contenu éducatif peu engageant</strong> : Qu'il s'agisse de longues vidéos ou de documentation extensive, le contenu actuel peine à capter l'attention des étudiants, limitant à la fois leur compréhension et leur engagement.
            </li>
            <li>
              <strong>Suivi générique</strong> : Malgré l'augmentation spectaculaire du nombre de conseillers d'orientation – passant de 30 à 350 entre 2020 et 2022 – le nombre d'étudiants a quadruplé entre 2009 et 2017. Ce déséquilibre conduit à un suivi générique, contribuant à un taux d'abandon alarmant, avec plus de 431 876 abandons enregistrés en 2018 et un taux d'abandon universitaire de 47,2%.
            </li>
          </ul>

          <h3 className="text-lg font-semibold mt-6">Notre solution</h3>
          <p>
            En réponse à ces problématiques, le projet OrientLamp offre une approche immersive et interactive pour aider les étudiants à envisager leur avenir académique et professionnel.
          </p>
          
          <h4 className="font-medium">Comment ça fonctionne ?</h4>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Visite virtuelle</strong> : En exploitant la puissance de Google Earth en réalité virtuelle, notre application web permet aux étudiants de visiter virtuellement les écoles et universités. Imaginez pouvoir explorer un campus en 3D, découvrir son infrastructure et son ambiance — le tout depuis votre navigateur !
            </li>
            <li>
              <strong>Centralisation des données</strong> : OrientLamp centralise toutes les informations essentielles sur les établissements — emplacements, programmes, taux de réussite, témoignages — dans une base de données unique, facilement accessible et régulièrement mise à jour.
            </li>
            <li>
              <strong>Contenu interactif</strong> : Des vidéos à 360° et des pop-ups informatifs fournissent des synthèses rapides de données clés, évitant les inconvénients des supports traditionnels, longs ou fastidieux.
            </li>
            <li>
              <strong>Support personnalisé</strong> : Un chatbot intelligent intégré à l'application guide chaque utilisateur selon son profil. Après avoir créé votre compte et, si vous le souhaitez, rempli un formulaire de personnalisation, ce chatbot vous offre un parcours sur mesure : il répond à vos questions, vous oriente vers les établissements qui correspondent à vos intérêts, et vous aide à définir vos projets d'orientation.
            </li>
          </ul>

          <p className="mt-6">
            OrientLamp est conçu pour répondre aux défis actuels de l'orientation scolaire au Maroc en centralisant l'information, en rendant le contenu plus accessible, et en offrant un soutien adapté à chaque étudiant.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AboutOrientLampModal;