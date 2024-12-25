import { useContext, useState, useEffect, useRef } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }

      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/50 backdrop-blur-md ">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-2 group">
              <iframe
                className="w-16 h-16 transform transition-transform group-hover:scale-110"
                src="https://lottie.host/embed/6938d288-8f3f-4d88-8a90-6761dbe5e52c/xdtZDy4UwB.lottie"
              ></iframe>
              <span className="font-bold text-2xl bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
                Dine Craft
              </span>
            </Link>
          </div>

          {/* Theme Toggle */}
          <div className="hidden md:block">
            <ThemeToggle />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/all-foods" className="nav-link">
              All Foods
            </Link>
            <Link to="/gallery" className="nav-link">
              Gallery
            </Link>
          </div>

          {/* User Section */}
          <div className="flex items-center space-x-4">
            {!user && (
              <Link
                to="/login"
                className="px-4 py-2 rounded-full bg-gradient-to-r from-orange-600 to-orange-400 text-white font-semibold hover:from-orange-500 hover:to-orange-300 transition-all duration-300 transform hover:scale-105"
              >
                Login
              </Link>
            )}

            {user && (
              <div className="relative">
                <div
                  onClick={toggleDropdown}
                  role="button"
                  className="btn btn-ghost  btn-circle avatar ring-2 ring-orange-400 ring-offset-2 hover:ring-orange-500 transition-all duration-300"
                >
                  <div
                    title={user?.displayName}
                    className="w-10 h-10 rounded-full overflow-hidden"
                  >
                    <img
                      referrerPolicy="no-referrer"
                      alt="User Profile Photo"
                      src={user?.photoURL}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                </div>
                {isDropdownOpen && (
                  <ul
                    ref={dropdownRef}
                    className="absolute mt-6 p-2 shadow-lg bg-orange-300 rounded-xl w-56 border border-gray-100 right-0"
                  >
                    <li>
                      <Link
                        to="/add-food"
                        className="hover:bg-slate-200 text-orange-400  rounded-md py-2"
                      >
                        Add Food
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/my-foods"
                        className="hover:bg-slate-200 text-orange-400  rounded-md py-2"
                      >
                        My Foods
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/my-orders"
                        className="hover:bg-slate-200 text-orange-400  rounded-md py-2"
                      >
                        My Orders (for customer)
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/all-orders"
                        className="hover:bg-slate-200 text-orange-400  rounded-md py-2"
                      >
                        All Orders (for admin)
                      </Link>
                    </li>
                    <li className="mt-2">
                      <button
                        onClick={logOut}
                        className="w-full text-center bg-gray-50 hover:bg-gray-100 rounded-lg py-2 text-gray-700 transition-colors duration-200"
                      >
                        Logout
                      </button>
                    </li>
                  </ul>
                )}
              </div>
            )}

            {/* Mobile menu button */}
            <button
              ref={buttonRef}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden rounded-lg p-2 hover:bg-gray-100 transition-colors duration-200"
            >
              <svg
                className="w-6 h-6 text-gray-600"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div
            ref={menuRef}
            className="lg:hidden px-2 pt-2 pb-3 space-y-1"
          >
            <Link
              to="/"
              className="block px-3 py-2 rounded-lg text-orange-600 font-medium hover:bg-orange-50 transition-colors duration-200"
            >
              Home
            </Link>
            <Link
              to="/all-foods"
              className="block px-3 py-2 rounded-lg text-orange-600 font-medium hover:bg-orange-50 transition-colors duration-200"
            >
              All Foods
            </Link>
            <Link
              to="/gallery"
              className="block px-3 py-2 rounded-lg text-orange-600 font-medium hover:bg-orange-50 transition-colors duration-200"
            >
              Gallery
            </Link>
          </div>
        )}
      </div>

      <style>{`
        .nav-link {
          position: relative;
          font-weight: 600;
          color: #ea580c;
          padding: 0.5rem 1rem;
          transition: color 0.3s ease;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: -4px;
          left: 50%;
          background: linear-gradient(to right, #ea580c, #fb923c);
          transition: all 0.3s ease;
          transform: translateX(-50%);
        }

        .nav-link:hover {
          color: #fb923c;
        }

        .nav-link:hover::after {
          width: 80%;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
