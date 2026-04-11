import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { blogPosts } from "../data/blogData";
import { Calendar, ArrowRight } from "lucide-react";

const Blog = () => {
    const categories = ["Edge Robotics Studio", "Technical", "Personal"];
    const [activeCategory, setActiveCategory] = useState("Edge Robotics Studio");
    const categoryPosts = blogPosts.filter(post => post.category === activeCategory);
    return (
        <div className="pt-32 pb-24 min-h-screen bg-slate-900 border-b border-slate-800 text-white relative overflow-hidden">
            {/* Background Orbs */}
            <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-primary/5 blur-[150px] rounded-full pointer-events-none"></div>
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="mb-16">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-black mb-6 tracking-tight text-white pb-2"
                    >
                        Our Blog
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-300 text-lg max-w-2xl"
                    >
                        Insights, experiences, and reflections from the world of robotics and beyond.
                    </motion.p>
                </div>
                <div className="flex flex-wrap gap-4 mb-12 justify-center md:justify-start">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${activeCategory === category
                                    ? "bg-primary text-white shadow-[0_0_15px_rgba(14,165,233,0.5)]"
                                    : "bg-slate-800/50 text-gray-400 hover:bg-slate-700 hover:text-white border border-slate-700/50"
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="min-h-[400px]">
                    {categoryPosts.length > 0 && (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {categoryPosts.map((post, index) => (
                                <motion.div
                                    key={post.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: (index * 0.1) }}
                                    className="relative bg-surface/80 backdrop-blur-sm rounded-3xl overflow-hidden border border-slate-700/80 group transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_15px_40px_-15px_rgba(14,165,233,0.2)] hover:border-primary/40 flex flex-col h-full"
                                >
                                    <Link to={`/blog/${post.slug}`} className="absolute inset-0 z-10">
                                        <span className="sr-only">Read Post</span>
                                    </Link>
                                    <div className="relative h-48 overflow-hidden">
                                        <img
                                            src={post.coverImage}
                                            alt={post.title}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors"></div>
                                    </div>
                                    <div className="p-6">
                                        <div className="flex items-center gap-2 text-primary text-sm mb-3">
                                            <Calendar className="w-4 h-4" />
                                            <span>{post.date}</span>
                                        </div>
                                        <h2 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                                            {post.title}
                                        </h2>
                                        <p className="text-gray-400 text-sm mb-6 line-clamp-3">
                                            {post.excerpt}
                                        </p>
                                        <span className="inline-flex items-center gap-2 text-white font-medium group-hover:text-primary transition-colors mt-auto">
                                            Read More
                                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
export default Blog;
