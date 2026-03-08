import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaYoutube, FaEnvelope } from 'react-icons/fa';
const Footer = () => {
    return (
        <footer className="bg-secondary text-slate-300 py-16 border-t border-slate-800">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">
                <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-white">Edge Robotics Studio</h3>
                    <p className="text-sm text-slate-400">
                        Delivering end-to-end robotics development and prototyping services that convert innovative ideas into functional robotic systems.
                    </p>
                </div>
                <div>
                    <h4 className="text-white font-semibold mb-6">Company</h4>
                    <ul className="space-y-3 text-sm">
                        <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
                        <li><Link to="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
                        <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-white font-semibold mb-6">Careers</h4>
                    <p className="text-sm text-slate-400 leading-relaxed">
                        We are looking for interns and volunteers who can help us build Edge Robotics Studio.
                    </p>
                </div>
                <div>
                    <h4 className="text-white font-semibold mb-6">Connect</h4>
                    <div className="flex gap-4">
                        <a href="https://github.com/edgeroboticsstudio" target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-800 rounded-lg hover:bg-primary hover:text-white transition-all">
                            <FaGithub size={20} />
                        </a>
                        <a href="https://www.linkedin.com/company/edgeroboticsstudio" target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-800 rounded-lg hover:bg-primary hover:text-white transition-all">
                            <FaLinkedin size={20} />
                        </a>
                        <a href="https://www.youtube.com/@edge_robotics_studio" target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-800 rounded-lg hover:bg-primary hover:text-white transition-all">
                            <FaYoutube size={20} />
                        </a>
                        <a href="mailto:edgeroboticsstudio@gmail.com" className="p-2 bg-slate-800 rounded-lg hover:bg-primary hover:text-white transition-all">
                            <FaEnvelope size={20} />
                        </a>
                    </div>
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
                © {new Date().getFullYear()} Edge Robotics Studio. All rights reserved.
            </div>
        </footer>
    );
};
export default Footer;
