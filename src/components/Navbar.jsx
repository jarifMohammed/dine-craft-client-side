import { useContext, useState } from 'react';
import logo from '../assets/images/logo.png';
import { AuthContext } from '../providers/AuthProvider';
import { Link } from 'react-router-dom';
import ThemeToggleButton from './ThemeToggleButton';

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="navbar gap-4 text-white fixed top-0  z-50 shadow-lg backdrop-blur-sm">
      {/* Logo Section */}
      <div className="flex">
        <Link to="/" className="flex gap-2 items-center">
          <img className="w-14 h-14" src={logo} alt="Dine Craft Logo" />
          <span className="font-bold text-orange-600 text-xl">Dine Craft</span>
        </Link>
      </div>

      {/* Theme Toggle */}
      <div className="p-4">
        <ThemeToggleButton />
      </div>

      {/* Centered Links */}
      <div className="flex-1 flex justify-center lg:justify-center">
        {/* Hamburger Menu for Responsive */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="btn btn-ghost btn-circle text-xl"
          >
            ☰
          </button>
        </div>

        {/* Links for Larger Screens */}
        <ul
          className={`menu menu-horizontal px-1 lg:flex ${
            isMenuOpen ? "block" : "hidden"
          } lg:block`}
        >
          <li>
            <Link to="/" className="hover:text-blue-200 text-orange-700 text-bold text-lg ">
              Home
            </Link>
          </li>
          <li>
            <Link to="/all-foods" className="hover:text-blue-200 text-orange-700 text-bold text-lg">
              All Foods
            </Link>
          </li>
          <li>
            <Link to="/gallery" className="hover:text-blue-200 text-orange-700 text-bold text-lg">
              Gallery
            </Link>
          </li>
        </ul>
      </div>

      {/* User Section */}
      <div className="flex-none">
        {!user && (
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/login" className="hover:text-blue-200">
                Login
              </Link>
            </li>
          </ul>
        )}
        {user && (
          <div className="dropdown dropdown-end z-50 p-4 ">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div title={user?.displayName} className="w-14 rounded-full">
                <img
                  referrerPolicy="no-referrer"
                  alt="User Profile Photo"
                  src={user?.photoURL}
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white text-black rounded-box w-52"
            >
              <li>
                <Link to="/add-food" className="justify-between">
                  Add Food
                </Link>
              </li>
              <li>
                <Link to="/my-foods">My Foods</Link>
              </li>
              <li>
                <Link to="/my-orders">My Orders (for customer)</Link>
              </li>
              <li>
                <Link to="/all-orders">All Orders (for admin)</Link>
              </li>
              <li className="mt-2">
                <button
                  onClick={logOut}
                  className=" block text-center w-full rounded"
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
