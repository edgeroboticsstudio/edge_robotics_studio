import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";
const Navbar = () => {
  const [hidden, setHidden] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const location = useLocation();
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 30 && !mobileMenuOpen) {
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
    <>
      <motion.nav
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="fixed top-0 w-full bg-slate-900/60 backdrop-blur-xl z-50 h-20 border-b border-slate-700/50 shadow-lg"
      >
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between relative">
          <Link to="/" className="flex items-center gap-3" onClick={() => setMobileMenuOpen(false)}>
            <img src={logo} className="w-10 h-10" alt="Logo" />
            <span className="font-bold text-white tracking-wide lg:text-lg sm:text-base hidden sm:block group-hover:text-primary transition-colors">
              Edge Robotics Studio
            </span>
          </Link>
          <ul className="hidden md:flex gap-8 text-sm font-medium text-gray-300">
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
          
          {/* Mobile Menu Toggle */}
          <button 
             className="md:hidden text-gray-300 hover:text-white transition-colors"
             onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
             aria-label="Toggle menu"
          >
             {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-20 z-40 bg-slate-900/95 backdrop-blur-lg border-b border-slate-800 md:hidden h-[calc(100vh-5rem)] overflow-y-auto"
          >
            <div className="flex flex-col items-center justify-center min-h-full py-10 gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-2xl font-semibold transition-colors ${
                    location.pathname === link.href ? "text-primary" : "text-gray-300 hover:text-white"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="mt-8">
                <Link
                  to="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-8 py-3 bg-primary hover:bg-primary-hover text-slate-950 rounded-full font-semibold transition-all inline-block"
                >
                  Start a Project
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
export default Navbar;
