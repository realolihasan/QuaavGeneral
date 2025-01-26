import { useState } from 'react';
import { Bell, MessageSquare, ChevronDown, Users, Globe, Settings, HelpCircle, LogOut } from 'lucide-react';

const NavBar = ({ isLoggedIn = false }) => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <nav className="nav-glass px-6 py-4">
      <div className="content-container">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <h2 className="text-gradient">QUAAV</h2>

          {/* Right Controls */}
          <div className="flex items-center gap-4">
            {isLoggedIn ? (
              <>
                {/* Notification Icon */}
                <button className="btn p-2 h-10 w-10 flex items-center justify-center">
                  <Bell size={20} />
                </button>

                {/* Messages Icon */}
                <button className="btn p-2 h-10 w-10 flex items-center justify-center">
                  <MessageSquare size={20} />
                </button>

                {/* Profile Dropdown */}
                <div className="relative">
                  <button 
                    className="btn h-10 px-3 flex items-center gap-2"
                    onClick={() => setIsProfileOpen(!isProfileOpen)}
                  >
                    <div className="w-6 h-6 rounded-full bg-gray-700"></div>
                    <ChevronDown size={16} />
                  </button>

                  {isProfileOpen && (
                    <div className="dropdown-glass mt-2 py-2 min-w-[200px]">
                      <button className="dropdown-item-glass py-2 w-full flex items-center gap-3">
                        <Users size={16} />
                        <span>Communities</span>
                      </button>
                      <button className="dropdown-item-glass py-2 w-full flex items-center gap-3">
                        <Globe size={16} />
                        <span>Sites</span>
                      </button>
                      <button className="dropdown-item-glass py-2 w-full flex items-center gap-3">
                        <Settings size={16} />
                        <span>Settings</span>
                      </button>
                      <button className="dropdown-item-glass py-2 w-full flex items-center gap-3">
                        <HelpCircle size={16} />
                        <span>Help</span>
                      </button>
                      <div className="border-t border-white/10 my-2"></div>
                      <button className="dropdown-item-glass py-2 w-full flex items-center gap-3 text-red-400">
                        <LogOut size={16} />
                        <span>Sign Out</span>
                      </button>
                    </div>
                  )}
                </div>
              </>
            ) : (
              <button className="btn-primary h-10 px-6">Login</button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;