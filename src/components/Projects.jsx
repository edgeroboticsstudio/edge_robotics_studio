import { motion } from "framer-motion";
import { FolderGit2 } from "lucide-react";
const Projects = () => {
    return (
        <section id="projects" className="pt-32 pb-24 min-h-screen bg-slate-900 relative overflow-hidden flex items-center justify-center">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex flex-col items-center justify-center"
                    >
                        <div className="w-20 h-20 bg-slate-800 rounded-full flex items-center justify-center mb-8 border border-slate-700">
                            <FolderGit2 className="w-10 h-10 text-primary" />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Featured Projects
                        </h2>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            Our portfolio is currently being curated. Check back soon for detailed case studies of our robotics integration and embedded systems work.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
export default Projects;
