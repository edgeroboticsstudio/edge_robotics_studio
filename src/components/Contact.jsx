import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
const Contact = () => {
    const contactInfo = [
        {
            icon: <Mail className="w-6 h-6 text-primary" />,
            label: "Email",
            value: "contact@edgerobotics.studio",
            href: "mailto:contact@edgerobotics.studio",
        },
        {
            icon: <Phone className="w-6 h-6 text-primary" />,
            label: "Phone",
            value: "+1 (555) 000-0000",
            href: "tel:+15550000000",
        },
        {
            icon: <MapPin className="w-6 h-6 text-primary" />,
            label: "Address",
            value: "San Francisco, CA",
            href: "#",
        },
    ];
    return (
        <section id="contact" className="pt-32 pb-24 min-h-screen bg-background relative overflow-hidden">
            {/* Background Decorative Element */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -mr-48 -mt-48"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -ml-48 -mb-48"></div>
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 mb-6 tracking-tight"
                    >
                        Get in Touch
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-300 text-lg"
                    >
                        Have a project in mind or want to learn more about our services? We'd love to hear from you.
                    </motion.p>
                </div>
                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div className="bg-surface/50 backdrop-blur-md p-8 rounded-3xl border border-slate-700/50 shadow-xl hover:border-primary/30 transition-colors">
                            <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                            <div className="space-y-6">
                                {contactInfo.map((info, index) => (
                                    <a
                                        key={index}
                                        href={info.href}
                                        className="flex items-center gap-4 group transition-all duration-300 hover:-translate-y-1 bg-slate-800/50 p-4 rounded-xl border border-slate-700 hover:border-primary/50 hover:shadow-[0_10px_20px_-10px_rgba(14,165,233,0.15)]"
                                    >
                                        <div className="p-3 bg-slate-800 rounded-lg group-hover:bg-primary/10 transition-colors">
                                            {info.icon}
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-400">{info.label}</p>
                                            <p className="text-white font-medium group-hover:text-primary transition-colors">
                                                {info.value}
                                            </p>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>
                        <div className="bg-gradient-to-br from-primary/20 via-primary/5 to-transparent p-8 rounded-3xl border border-primary/20 backdrop-blur-md shadow-[0_0_30px_-10px_rgba(14,165,233,0.2)]">
                            <h3 className="text-xl font-bold text-white mb-4">Let's Build the Future</h3>
                            <p className="text-gray-300">
                                Our team is ready to help you navigate the complexities of robotics development and system integration.
                            </p>
                        </div>
                    </motion.div>
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-surface p-8 rounded-2xl border border-slate-700/50"
                    >
                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium text-gray-300">
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium text-gray-300">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-sm font-medium text-gray-300">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                                    placeholder="How can we help?"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-gray-300">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    rows="4"
                                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                                    placeholder="Tell us about your project..."
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-primary hover:bg-primary-hover text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 transform hover:-translate-y-1 shadow-[0_0_20px_-5px_rgba(14,165,233,0.4)] hover:shadow-[0_0_30px_-5px_rgba(14,165,233,0.6)] group"
                            >
                                Send Message
                                <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
export default Contact;
