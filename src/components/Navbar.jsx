import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import logo from "../assets/logo.png";
const Navbar = () => {
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();
  const location = useLocation();
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 30) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];
  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-0 w-full bg-slate-900/60 backdrop-blur-xl z-50 h-20 border-b border-slate-700/50 shadow-lg"
    >
      <div className="max-w-7xl mx-auto px-8 h-full flex items-center justify-between relative">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} className="w-10 h-10" alt="Logo" />
          <span className="font-bold text-white tracking-wide text-lg hidden md:block group-hover:text-primary transition-colors">
            Edge Robotics Studio
          </span>
        </Link>
        <ul className="flex gap-8 text-sm font-medium text-gray-300">
          {navLinks.map((link) => (
            <li key={link.name} className="relative group">
              <Link
                to={link.href}
                className={`transition-colors py-2 block hover:text-white ${location.pathname === link.href ? "text-white" : ""
                  }`}
              >
                {link.name}
              </Link>
              {/* Active / Hover Indicator */}
              <div className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ${location.pathname === link.href ? "w-full" : "w-0 group-hover:w-full"}`}></div>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
};
export default Navbar;
