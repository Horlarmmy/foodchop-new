import { useState } from "react";
import { navLinks } from "../../constants";
import { FaBars, FaTimes, FaUserCircle, FaUserLock } from "react-icons/fa";
import { useAuth } from "../../use-auth-client";
import LoginBtn from "../../components/LoginBtn";
import LoggedOutBtn from "../../components/LoggedOutBtn";
import Modal from "../../components/Modal";
import {icp} from '../../assets/images';


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { isAuthenticated, whoamiActor } = useAuth();
  const [principalId, setPrincipalId] = useState("Hey there");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleProfile = async () => {
    if (isAuthenticated) {
      // const whoami = await whoamiActor.whoami();
      // setPrincipalId(whoami);
      setIsProfileOpen(!isProfileOpen);
    }
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleSignInOut = () => {
    if (isAuthenticated) {
      // Implement sign out functionality here
      console.log("Signing out...");
    } else {
      toggleModal();
    }
  };

  return (
    <nav className="flex justify-between items-center padding-x py-2 md:py-1">
      <a
        href=""
        className="font-bold text-2xl md:text-3xl text-primary hover:text-secondary"
      >
        FoodChop
      </a>
      <div className="hidden md:flex justify-between items-center text-md md:text-xl font-semibold gap-7 text-primary">
        {navLinks.map((navlink) => (
          <a
            key={navlink.label}
            href={navlink.href}
            className="hover:text-secondary ease-in-out delay-200"
          >
            {navlink.label}
          </a>
        ))}
        <div className="flex items-center -right-64 gap-4 relative">
          {isAuthenticated && (
            <div
              className="cursor-pointer flex items-center gap-2"
              onClick={toggleProfile}
            >
              <FaUserCircle
                className="text-primary hover:text-secondary"
                size={24}
              />
              <span>Profile</span>
              {isProfileOpen && (
                <div className="absolute -right-16 top-9 mt-2 bg-white shadow-lg rounded-md px-4 py-1 w-56">
                  <p className="px-4 py-2 text-sm text-primary hover:bg-gray-100">
                    Principal ID: {principalId}
                  </p>
                  <a
                    href="/profile"
                    className="block px-4 py-2 text-sm text-primary hover:bg-gray-100"
                  >
                    Profile
                  </a>
                  <a
                    href="/settings"
                    className="block px-4 py-2 text-sm text-primary hover:bg-gray-100"
                  >
                    Settings
                  </a>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="md:hidden">
          <button
            className="text-primary hover:text-secondary focus:outline-none"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
        <button
          className="bg-secondary text-white md:py-3 py-1 md:text-xl text-base md:font-semibold font-medium hover:bg-primary/90 hover:text-white active:bg-primary active:text-white md:px-3 px-1 rounded-md"
          onClick={handleSignInOut}
        >
          {isAuthenticated ? "Sign Out" : "Sign In"}
        </button>
      </div>
      {isMenuOpen && (
        <div className="absolute top-16 md:hidden left-0 w-full bg-white shadow-lg z-10 rounded-b-lg">
          <ul className="py-4 px-6 space-y-4">
            {navLinks.map((navlink) => (
              <li key={navlink.label}>
                <a
                  href={navlink.href}
                  className="text-primary hover:text-secondary ease-in-out delay-200"
                >
                  {navlink.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
      {isModalOpen && (
        <Modal onClose={toggleModal}>
          <div className="flex flex-col items-center justify-center h-full">
            <h2 className="text-2xl font-bold mb-4">
              Connect with Internet Identity
            </h2>
            <p className="mb-6">
              To start the authentication process, please click the button
              below.
            </p>
            <LoggedOutBtn
              content={
                <>
                  <img src={icp} className="mr-2  w-8 h-8" />
                  Connect with Internet Identity
                </>
              }
            />
          </div>
        </Modal>
      )}
    </nav>
  );
};

export default Navbar;
