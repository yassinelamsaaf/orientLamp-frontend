import { Link, useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { useAuth } from "../hooks/useAuth";
import {
  Search,
  MessageSquare,
  LayoutDashboard,
  Settings,
  LogOut,
  Menu,
  X,
} from "lucide-react";
import "../styles/Landing.css";

const NavBar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    logout();
    setIsDropdownOpen(false);
    setIsMobileMenuOpen(false);
    navigate("/");
  };

  const handleMenuClick = (path) => {
    setIsDropdownOpen(false);
    setIsMobileMenuOpen(false);
    navigate(path);
  };

  const handleAnchorClick = (anchor) => {
    const el = document.querySelector(anchor);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  // Get user initials for profile picture
  const getInitials = () => {
    if (user?.firstName && user?.lastName) {
      return `${user.firstName[0]}${user.lastName[0]}`.toUpperCase();
    }
    return "U";
  };

  return (
    <>
      <nav className="fixed top-0 w-full bg-white px-[7%] py-5 flex justify-between items-center shadow-[0_2px_25px_rgba(0,0,0,0.08)] z-[1000] transition-all duration-300">
        <div className="flex items-center gap-2 font-bold text-[1.6rem]">
          <img
            src="/images/orientLamp-logo.png"
            alt="Logo OrientLamp"
            className="h-[34px] w-auto block"
          />
          <span className="text-[#1a1a2e]">Orient</span>
          <span className="text-[#ff8c00]">Lamp</span>
        </div>
        {/* Desktop navigation (large screens) */}
        <ul className="nav-links hidden lg:flex items-center gap-10 list-none">
          <li>
            <a
              href="#accueil"
              className="text-[0.95rem] font-medium text-[#1a1a2e]"
            >
              Accueil
            </a>
          </li>
          <li>
            <a
              href="#services"
              className="text-[0.95rem] font-medium text-[#1a1a2e]"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#comment-ca-marche"
              className="text-[0.95rem] font-medium text-[#1a1a2e]"
            >
              Comment ça marche
            </a>
          </li>
          <li>
            <a
              href="#temoignages"
              className="text-[0.95rem] font-medium text-[#1a1a2e]"
            >
              Témoignages
            </a>
          </li>
          <li>
            <a
              href="#faq"
              className="text-[0.95rem] font-medium text-[#1a1a2e]"
            >
              FAQ
            </a>
          </li>

          {user ? (
            <li className="profile-menu" ref={dropdownRef}>
              <button
                className="profile-btn"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                aria-label="Menu utilisateur"
              >
                <div className="profile-avatar">
                  {user.profilePicture ? (
                    <img
                      src={user.profilePicture}
                      alt={`${user.firstName} ${user.lastName}`}
                    />
                  ) : (
                    <span>{getInitials()}</span>
                  )}
                </div>
              </button>

              {isDropdownOpen && (
                <div className="profile-dropdown">
                  <div className="dropdown-header">
                    <div className="dropdown-avatar">
                      {user.profilePicture ? (
                        <img
                          src={user.profilePicture}
                          alt={`${user.firstName} ${user.lastName}`}
                        />
                      ) : (
                        <span>{getInitials()}</span>
                      )}
                    </div>
                    <div className="dropdown-user-info">
                      <p className="dropdown-user-name">
                        {user.firstName} {user.lastName}
                      </p>
                      <p className="dropdown-user-email">{user.email}</p>
                    </div>
                  </div>

                  <div className="dropdown-divider"></div>

                  <ul className="dropdown-menu">
                    <li>
                      <button onClick={() => handleMenuClick("/search")}>
                        <Search size={18} />
                        <span>Rechercher des écoles</span>
                      </button>
                    </li>
                    <li>
                      <button onClick={() => handleMenuClick("/chat     ")}>
                        <MessageSquare size={18} />
                        <span>OrientAI</span>
                      </button>
                    </li>
                    <li>
                      <button onClick={() => handleMenuClick("/dashboard")}>
                        <LayoutDashboard size={18} />
                        <span>Tableau de bord</span>
                      </button>
                    </li>
                    <li>
                      <button onClick={() => handleMenuClick("/settings")}>
                        <Settings size={18} />
                        <span>Paramètres</span>
                      </button>
                    </li>
                  </ul>

                  <div className="dropdown-divider"></div>

                  <button className="dropdown-logout" onClick={handleLogout}>
                    <LogOut size={18} />
                    <span>Déconnexion</span>
                  </button>
                </div>
              )}
            </li>
          ) : (
            <li>
              <Link
                to="/login"
                className="bg-gradient-to-br from-[#ff8c00] to-[#ffa500] text-white px-8 py-3 rounded-full font-semibold shadow-[0_4px_15px_rgba(255,140,0,0.3)] hover:-translate-y-[2px] hover:shadow-[0_6px_20px_rgba(255,140,0,0.4)] transition-all duration-300 login-link"
              >
                Se connecter
              </Link>
            </li>
          )}
        </ul>

        {/* Mobile/Tablet trigger: hamburger or user avatar */}
        <div className="flex items-center gap-3 lg:hidden">
          {user ? (
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              className="w-10 h-10 rounded-full bg-gradient-to-br from-[#ff8c00] to-[#ffa500] flex items-center justify-center text-white font-semibold shadow-md border-2 border-white"
              aria-label="Ouvrir le menu utilisateur"
            >
              {user.profilePicture ? (
                <img
                  src={user.profilePicture}
                  alt={`${user.firstName} ${user.lastName}`}
                  className="w-full h-full rounded-full object-cover"
                />
              ) : (
                <span>{getInitials()}</span>
              )}
            </button>
          ) : (
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 bg-white shadow-sm text-gray-700"
              aria-label="Ouvrir le menu de navigation"
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          )}
        </div>
        <div className="gradient-bar"></div>
      </nav>

      {/* Mobile/Tablet side menu overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-[999] bg-black/40 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div
            className="absolute top-0 right-0 h-full w-72 max-w-[80%] bg-white shadow-xl mobile-menu-panel p-4 space-y-2 flex flex-col pt-24"
            onClick={(e) => e.stopPropagation()}
          >
            {user && (
              <div className="flex items-center gap-3 pb-3 mb-2 border-b border-gray-200">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#ff8c00] to-[#ffa500] flex items-center justify-center text-white font-semibold">
                  {user.profilePicture ? (
                    <img
                      src={user.profilePicture}
                      alt={`${user.firstName} ${user.lastName}`}
                      className="w-full h-full rounded-full object-cover"
                    />
                  ) : (
                    <span>{getInitials()}</span>
                  )}
                </div>
                <div className="overflow-hidden">
                  <p className="font-semibold text-sm text-gray-900 truncate">
                    {user.firstName} {user.lastName}
                  </p>
                  <p className="text-xs text-gray-500 truncate">{user.email}</p>
                </div>
              </div>
            )}

            <nav className="flex flex-col gap-1">
              <button
                type="button"
                onClick={() => handleAnchorClick("#accueil")}
                className="w-full text-left px-3 py-2 rounded-lg text-sm font-medium text-gray-800 hover:bg-gray-100"
              >
                Accueil
              </button>
              <button
                type="button"
                onClick={() => handleAnchorClick("#services")}
                className="w-full text-left px-3 py-2 rounded-lg text-sm font-medium text-gray-800 hover:bg-gray-100"
              >
                Services
              </button>
              <button
                type="button"
                onClick={() => handleAnchorClick("#comment-ca-marche")}
                className="w-full text-left px-3 py-2 rounded-lg text-sm font-medium text-gray-800 hover:bg-gray-100"
              >
                Comment ça marche
              </button>
              <button
                type="button"
                onClick={() => handleAnchorClick("#temoignages")}
                className="w-full text-left px-3 py-2 rounded-lg text-sm font-medium text-gray-800 hover:bg-gray-100"
              >
                Témoignages
              </button>
              <button
                type="button"
                onClick={() => handleAnchorClick("#faq")}
                className="w-full text-left px-3 py-2 rounded-lg text-sm font-medium text-gray-800 hover:bg-gray-100"
              >
                FAQ
              </button>
            </nav>

            {user ? (
              <>
                <div className="border-t border-gray-200 my-2" />
                <nav className="flex flex-col gap-1">
                  <button
                    type="button"
                    onClick={() => handleMenuClick("/search")}
                    className="w-full text-left px-3 py-2 rounded-lg text-sm font-medium text-gray-800 hover:bg-gray-100"
                  >
                    Rechercher des écoles
                  </button>
                  <button
                    type="button"
                    onClick={() => handleMenuClick("/chat")}
                    className="w-full text-left px-3 py-2 rounded-lg text-sm font-medium text-gray-800 hover:bg-gray-100"
                  >
                    OrientAI
                  </button>
                  <button
                    type="button"
                    onClick={() => handleMenuClick("/dashboard")}
                    className="w-full text-left px-3 py-2 rounded-lg text-sm font-medium text-gray-800 hover:bg-gray-100"
                  >
                    Tableau de bord
                  </button>
                  <button
                    type="button"
                    onClick={() => handleMenuClick("/settings")}
                    className="w-full text-left px-3 py-2 rounded-lg text-sm font-medium text-gray-800 hover:bg-gray-100"
                  >
                    Paramètres
                  </button>
                </nav>

                <button
                  type="button"
                  onClick={handleLogout}
                  className="mt-3 w-full flex items-center justify-center px-3 py-2 rounded-lg text-sm font-semibold text-red-600 bg-red-50 hover:bg-red-100"
                >
                  Déconnexion
                </button>
              </>
            ) : (
              <button
                type="button"
                onClick={() => handleMenuClick("/login")}
                className="mt-3 w-full bg-gradient-to-br from-[#ff8c00] to-[#ffa500] text-white px-4 py-2.5 rounded-full font-semibold shadow-[0_4px_15px_rgba(255,140,0,0.3)] hover:shadow-[0_6px_20px_rgba(255,140,0,0.4)]"
              >
                Se connecter
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default NavBar;
