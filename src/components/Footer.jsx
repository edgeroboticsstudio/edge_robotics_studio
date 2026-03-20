import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaYoutube, FaEnvelope, FaInstagram } from 'react-icons/fa';
const Footer = () => {
    return (
        <footer className="bg-secondary text-slate-300 py-16 border-t border-slate-800">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
                <div className="space-y-4 lg:col-span-4 lg:pr-12">
                    <h3 className="text-2xl font-bold text-white">Edge Robotics Studio</h3>
                    <p className="text-sm text-slate-400 text-justify max-w-[280px]">
                        Delivering end-to-end robotics development and prototyping services that convert innovative ideas into functional robotic systems.
                    </p>
                </div>
                <div className="lg:col-span-2">
                    <h4 className="text-white font-semibold mb-6">Company</h4>
                    <ul className="space-y-3 text-sm">
                        <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
                        <li><Link to="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
                        <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
                    </ul>
                </div>
                <div className="lg:col-span-3">
                    <h4 className="text-white font-semibold mb-6">Careers</h4>
                    <p className="text-sm text-slate-400 leading-relaxed text-justify max-w-[200px]">
                        We are looking for interns and volunteers who can help us build Edge Robotics Studio.
                    </p>
                </div>
                <div className="lg:col-span-3">
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

                        <a href="https://www.instagram.com/edge_robotics_studio" target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-800 rounded-lg hover:bg-primary hover:text-white transition-all">
                            <FaInstagram size={20} />
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
