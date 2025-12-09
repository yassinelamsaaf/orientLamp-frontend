import { useState } from 'react';
import Layout from '../components/Layout';
import { Calendar as CalendarIcon, Plus } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

const Dashboard = () => {
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();
  
  const [month, setMonth] = useState(currentMonth);
  const [year, setYear] = useState(currentYear);
  const [isAddEventOpen, setIsAddEventOpen] = useState(false);
  const [newEvent, setNewEvent] = useState({ title: '', date: new Date() });
  
  // Initial events
  const [events, setEvents] = useState([
    { id: '1', date: new Date(2025, 4, 10), title: "Concours ENSIAS" },
    { id: '2', date: new Date(2025, 4, 15), title: "Deadline inscription INPT" },
    { id: '3', date: new Date(2025, 4, 20), title: "Examen d'admission EMI" },
    { id: '4', date: new Date(2025, 4, 25), title: "Résultats ENCG" },
  ]);
  
  const getDaysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };
  
  const getFirstDayOfMonth = (month, year) => {
    return new Date(year, month, 1).getDay();
  };
  
  const daysInMonth = getDaysInMonth(month, year);
  const firstDayOfMonth = getFirstDayOfMonth(month, year);
  
  const monthNames = [
    "Janvier", "Février", "Mars", "Avril", "Mai", "Juin", 
    "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"
  ];
  
  const dayNames = ["D", "L", "M", "M", "J", "V", "S"];
  
  const goToPreviousMonth = () => {
    if (month === 0) {
      setMonth(11);
      setYear(year - 1);
    } else {
      setMonth(month - 1);
    }
  };
  
  const goToNextMonth = () => {
    if (month === 11) {
      setMonth(0);
      setYear(year + 1);
    } else {
      setMonth(month + 1);
    }
  };
  
  const getEventsForDay = (day) => {
    return events.filter(event => {
      return (
        event.date.getDate() === day &&
        event.date.getMonth() === month &&
        event.date.getFullYear() === year
      );
    });
  };

  const handleAddEvent = () => {
    // Create a date object for the selected day
    const eventDate = new Date(year, month, new Date(newEvent.date).getDate());
    
    const newEventObj = {
      id: Date.now().toString(),
      date: eventDate,
      title: newEvent.title
    };
    
    setEvents([...events, newEventObj]);
    setIsAddEventOpen(false);
    setNewEvent({ title: '', date: new Date() });
    
    alert(`Événement ajouté\n"${newEvent.title}" a été ajouté au calendrier.`);
  };

  return (
    <Layout>
      <div className="p-4 bg-background dark:bg-gray-800 text-foreground dark:text-white min-h-screen">
        <h1 className="text-2xl font-bold mb-6">Tableau de bord</h1>
        <div>
          <h1 className="text-2xl font-bold mb-6">Calendrier des événements</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
            <div className="md:col-span-5">
              <div className="orientlamp-card bg-card dark:bg-gray-700 text-card-foreground dark:text-white p-6 rounded-lg shadow-md">
                {/* Calendar header */}
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-semibold">{monthNames[month]} {year}</h2>
                  <div className="flex gap-2">
                    <button 
                      onClick={() => goToPreviousMonth()}
                      className="p-2 rounded-md hover:bg-muted dark:hover:bg-gray-600"
                    >
                      ◀
                    </button>
                    <button 
                      onClick={() => { setMonth(currentMonth); setYear(currentYear); }}
                      className="p-2 rounded-md hover:bg-muted dark:hover:bg-gray-600"
                    >
                      Aujourd'hui
                    </button>
                    <button 
                      onClick={() => goToNextMonth()}
                      className="p-2 rounded-md hover:bg-muted dark:hover:bg-gray-600"
                    >
                      ▶
                    </button>
                  </div>
                </div>
                
                {/* Calendar grid */}
                <div>
                  {/* Day names */}
                  <div className="grid grid-cols-7 text-center mb-2">
                    {dayNames.map(day => (
                      <div key={day} className="py-2 font-semibold">
                        {day}
                      </div>
                    ))}
                  </div>
                  
                  {/* Calendar days */}
                  <div className="grid grid-cols-7 gap-2">
                    {/* Empty cells for days of the week before the first day of the month */}
                    {[...Array(firstDayOfMonth)].map((_, index) => (
                      <div key={`empty-${index}`} className="h-24 border border-muted dark:border-gray-600 rounded-md bg-muted/50 dark:bg-gray-600/50"></div>
                    ))}
                    
                    {/* Days of the month */}
                    {[...Array(daysInMonth)].map((_, index) => {
                      const day = index + 1;
                      const isToday = 
                        day === currentDate.getDate() && 
                        month === currentDate.getMonth() && 
                        year === currentDate.getFullYear();
                      const dayEvents = getEventsForDay(day);
                      
                      return (
                        <div 
                          key={`day-${day}`}
                          className={`h-24 border rounded-md p-1 relative ${
                            isToday ? 'border-orientlamp-gold bg-amber-50 dark:bg-amber-900/20' : 'border-border dark:border-gray-600'
                          }`}
                        >
                          <div className={`text-right mb-1 ${
                            isToday ? 'font-bold text-orientlamp-gold' : ''
                          }`}>
                            {day}
                          </div>
                          <div className="overflow-y-auto max-h-16">
                            {dayEvents.map((event, eventIndex) => (
                              <div 
                                key={`event-${day}-${eventIndex}`}
                                className="text-xs bg-orientlamp-gold text-white p-1 mb-1 rounded truncate"
                                title={event.title}
                              >
                                {event.title}
                              </div>
                            ))}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:col-span-2">
              <div className="orientlamp-card bg-card dark:bg-gray-700 text-card-foreground dark:text-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <CalendarIcon size={18} className="mr-2" />
                  Événements à venir
                </h3>
                
                <div className="space-y-3">
                  {events.length > 0 ? (
                    events
                      .sort((a, b) => a.date.getTime() - b.date.getTime())
                      .map((event, index) => (
                        <div key={`upcoming-${index}`} className="border-l-4 border-orientlamp-gold pl-3 py-1">
                          <div className="text-sm font-medium">{event.title}</div>
                          <div className="text-xs text-muted-foreground dark:text-gray-400">
                            {event.date.toLocaleDateString('fr-FR', { 
                              day: 'numeric',
                              month: 'long',
                              year: 'numeric'
                            })}
                          </div>
                        </div>
                      ))
                  ) : (
                    <div className="text-muted-foreground dark:text-gray-400 text-sm">Aucun événement à venir</div>
                  )}
                </div>
                
                <div className="mt-6">
                  <Button 
                    className="bg-orientlamp-gold text-white px-4 py-2 rounded-md w-full hover:bg-orientlamp-gold/90 transition-colors flex items-center justify-center gap-2"
                    onClick={() => setIsAddEventOpen(true)}
                  >
                    <Plus size={16} />
                    Ajouter un événement
                  </Button>
                </div>
              </div>
              
              <div className="orientlamp-card bg-card dark:bg-gray-700 text-card-foreground dark:text-white p-6 rounded-lg shadow-md mt-4">
                <h3 className="text-lg font-semibold mb-4">Dates importantes</h3>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span>Concours CNC</span>
                    <span className="font-medium">20 Mai 2025</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Résultats du Bac</span>
                    <span className="font-medium">15 Juin 2025</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Inscriptions universitaires</span>
                    <span className="font-medium">1-30 Juillet 2025</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Rentrée universitaire</span>
                    <span className="font-medium">1 Sept 2025</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Add Event Dialog */}
          <Dialog open={isAddEventOpen} onOpenChange={setIsAddEventOpen}>
            <DialogContent className="dark:bg-gray-800 dark:text-white">
              <DialogHeader>
                <DialogTitle>Ajouter un événement</DialogTitle>
              </DialogHeader>
              
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <label htmlFor="title" className="text-sm font-medium">Titre de l'événement</label>
                  <Input 
                    id="title"
                    value={newEvent.title}
                    onChange={(e) => setNewEvent({...newEvent, title: e.target.value})}
                    className="dark:bg-gray-700 dark:border-gray-600"
                  />
                </div>
                
                <div className="grid gap-2">
                  <label htmlFor="date" className="text-sm font-medium">Date</label>
                  <Input 
                    id="date"
                    type="date"
                    value={newEvent.date.toISOString().split('T')[0]}
                    onChange={(e) => setNewEvent({...newEvent, date: new Date(e.target.value)})}
                    className="dark:bg-gray-700 dark:border-gray-600"
                  />
                </div>
              </div>
              
              <DialogFooter>
                <Button variant="outline" onClick={() => setIsAddEventOpen(false)} className="dark:text-white dark:border-gray-600">
                  Annuler
                </Button>
                <Button 
                  className="bg-orientlamp-gold hover:bg-orientlamp-gold/90"
                  onClick={handleAddEvent}
                  disabled={!newEvent.title}
                >
                  Ajouter
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
