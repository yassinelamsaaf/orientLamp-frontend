import { Link, useLocation } from "react-router-dom";
import {
  Home,
  Search,
  Calendar,
  MessageSquare,
  User,
  Settings,
  LogIn,
  Sun,
  Moon,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useState, useEffect } from "react";
import { useTheme } from "../hooks/useTheme";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";
import Logo from "./Logo";

const Sidebar = ({ showLabels = false }) => {
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();
  const [collapsed, setCollapsed] = useState(() => {
    const saved = localStorage.getItem("sidebarCollapsed");
    return saved === "true";
  });

  useEffect(() => {
    localStorage.setItem("sidebarCollapsed", collapsed);
  }, [collapsed]);

  const isCompact = showLabels ? false : collapsed;
  const showText = showLabels || !isCompact;

  const links = [
    { path: "/home", icon: Home, label: "Accueil" },
    { path: "/dashboard", icon: Calendar, label: "Tableau de bord" },
    { path: "/search", icon: Search, label: "Recherche" },
    { path: "/chat", icon: MessageSquare, label: "Chat AI" },
    { path: "/profile", icon: User, label: "Profil" },
    { path: "/settings", icon: Settings, label: "Paramètres" },
  ];

  return (
    <div className="relative w-full md:w-auto h-auto md:h-screen flex">
      <div
        className={cn(
          "w-full h-auto md:h-screen flex flex-col bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 py-4 overflow-y-auto transition-all duration-200",
          isCompact ? "md:w-16" : "md:w-64"
        )}
      >
        <div
          className={cn(
            "mb-6 flex items-center",
            showText ? "px-4 justify-start" : "px-2 justify-center"
          )}
        >
          {!showLabels && (
            <Logo size={isCompact ? "sm" : "md"} showText={showText} />
          )}
        </div>

        <nav
          className={cn(
            "flex flex-col gap-2 flex-1",
            showText ? "px-2" : "px-1"
          )}
        >
          {links.map((link) => {
            const isActive = location.pathname === link.path;
            const Icon = link.icon;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "flex items-center p-2 rounded-lg",
                  isActive
                    ? "bg-orientlamp-gold text-white"
                    : "text-gray-500 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700",
                  !showText && "justify-center"
                )}
                title={link.label}
              >
                <Icon
                  size={20}
                  className={cn(showText ? "min-w-[20px]" : "")}
                />
                {showText && <span className="ml-3">{link.label}</span>}
              </Link>
            );
          })}
        </nav>

        {/* Login link and theme toggle at the bottom */}
        <div
          className={cn(
            "mt-auto py-4 border-t border-gray-200 dark:border-gray-700",
            showText ? "px-2" : "px-1"
          )}
        >
          <Link
            to="/login"
            className={cn(
              "flex items-center p-2 rounded-lg text-gray-500 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 mb-2",
              !showText && "justify-center"
            )}
            title="Se connecter"
          >
            <LogIn size={20} className={cn(showText ? "min-w-[20px]" : "")} />
            {showText && <span className="ml-3">Se connecter</span>}
          </Link>
          {showText ? (
            <div
              className="w-full flex items-center justify-between p-2 rounded-lg text-gray-500 dark:text-gray-300"
              title={theme === "dark" ? "Mode clair" : "Mode sombre"}
            >
              <div className="flex items-center pointer-events-none">
                {theme === "dark" ? (
                  <Sun size={20} className="min-w-[20px]" />
                ) : (
                  <Moon size={20} className="min-w-[20px]" />
                )}
                <span className="ml-3">
                  Mode {theme === "dark" ? "clair" : "sombre"}
                </span>
              </div>
              <Switch
                checked={theme === "dark"}
                onCheckedChange={toggleTheme}
                className="data-[state=checked]:bg-orientlamp-gold"
              />
            </div>
          ) : (
            <button
              onClick={toggleTheme}
              className="w-full flex items-center justify-center p-2 rounded-lg text-gray-500 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
              title={theme === "dark" ? "Mode clair" : "Mode sombre"}
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          )}
        </div>
      </div>

      {/* Expand/Collapse button outside sidebar */}
      {!showLabels && (
        <button
          type="button"
          onClick={() => setCollapsed(!collapsed)}
          className="hidden md:flex absolute top-4 -right-3 h-8 w-6 items-center justify-center rounded-r-md border border-l-0 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors shadow-sm z-10"
          title={isCompact ? "Déployer" : "Réduire"}
        >
          {isCompact ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
        </button>
      )}
    </div>
  );
};

export default Sidebar;
