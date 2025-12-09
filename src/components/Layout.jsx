import { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";
import Logo from './Logo';

const Layout = ({ children, showSidebar = true }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < 768);

  // Update isMobile on resize
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (isMobile) {
    return (
      <div className="flex h-screen bg-gray-100 dark:bg-gray-900 overflow-hidden">
        <div className="fixed top-0 left-0 right-0 h-14 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 flex items-center px-4 z-40">
          <Logo size="sm" />
          <div className="ml-auto">
            <Drawer open={isOpen} onOpenChange={setIsOpen}>
              <DrawerTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon"
                >
                  <Menu />
                </Button>
              </DrawerTrigger>
              <DrawerContent className="h-[80vh] bg-white dark:bg-gray-800">
                <div className="flex-1 overflow-y-auto pb-4">
                  <Sidebar showLabels={true} />
                </div>
              </DrawerContent>
            </Drawer>
          </div>
        </div>
        <main className="flex-1 overflow-auto pt-16">
          {children}
        </main>
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900 overflow-hidden">
      {showSidebar && <Sidebar />}
      <main className="flex-1 overflow-auto">
        {children}
      </main>
    </div>
  );
};

export default Layout;
