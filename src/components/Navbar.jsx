import { useContext, useState } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';


const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="navbar gap-4 text-white fixed top-0 w-full z-50 shadow-lg backdrop-blur-sm flex justify-between items-center p-4">
      {/* Logo Section */}
      <div className="flex gap-2 items-center">
        <Link to="/" className="flex gap-2 items-center">
          <iframe
            className="w-24 h-24"
            src="https://lottie.host/embed/6938d288-8f3f-4d88-8a90-6761dbe5e52c/xdtZDy4UwB.lottie"
          ></iframe>
          <span className="font-bold text-orange-600 text-xl">Dine Craft</span>
        </Link>
      </div>

      <div>
        <ThemeToggle></ThemeToggle>
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
            isMenuOpen ? 'block' : 'hidden'
          } lg:block`}
        >
          <li>
            <Link to="/" className="hover:text-blue-200 text-orange-700 text-bold text-lg">
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/all-foods"
              className="hover:text-blue-200 text-orange-700 text-bold text-lg"
            >
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
              <Link to="/login" className="text-orange-950 text-bold text-2xl hover:text-blue-200">
                Login
              </Link>
            </li>
          </ul>
        )}
        {user && (
          <div className="dropdown dropdown-end z-50 p-4">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
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
                <button onClick={logOut} className="block text-center w-full rounded">
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
