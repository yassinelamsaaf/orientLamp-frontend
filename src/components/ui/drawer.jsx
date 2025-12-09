import { createContext, useContext, useState } from 'react';
import { cn } from "@/lib/utils";

const DrawerContext = createContext();

const Drawer = ({ children, open: controlledOpen, onOpenChange }) => {
  const [internalOpen, setInternalOpen] = useState(false);
  const isControlled = controlledOpen !== undefined;
  const isOpen = isControlled ? controlledOpen : internalOpen;
  
  const setIsOpen = (value) => {
    if (isControlled) {
      onOpenChange?.(value);
    } else {
      setInternalOpen(value);
    }
  };

  return (
    <DrawerContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </DrawerContext.Provider>
  );
};

const DrawerTrigger = ({ children, asChild, ...props }) => {
  const { setIsOpen } = useContext(DrawerContext);
  
  if (asChild) {
    return (
      <div onClick={() => setIsOpen(true)} {...props}>
        {children}
      </div>
    );
  }
  
  return (
    <button onClick={() => setIsOpen(true)} {...props}>
      {children}
    </button>
  );
};

const DrawerContent = ({ children, className, ...props }) => {
  const { isOpen, setIsOpen } = useContext(DrawerContext);
  
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 z-50">
      <div 
        className="fixed inset-0 bg-black/50" 
        onClick={() => setIsOpen(false)}
      />
      <div 
        className={cn(
          "fixed bottom-0 left-0 right-0 z-50 bg-white dark:bg-gray-800 rounded-t-lg",
          className
        )}
        {...props}
      >
        {children}
      </div>
    </div>
  );
};

export { Drawer, DrawerTrigger, DrawerContent };
