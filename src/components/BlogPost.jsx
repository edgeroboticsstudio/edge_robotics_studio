import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import { blogPosts } from "../data/blogData";
import { Calendar, ChevronLeft, User } from "lucide-react";
const BlogPost = () => {
    const { slug } = useParams();
    const post = blogPosts.find((p) => p.slug === slug);
    if (!post) {
        return (
            <div className="pt-32 pb-24 min-h-screen bg-background text-white flex flex-col items-center justify-center">
                <h1 className="text-2xl font-bold mb-4">Post not found</h1>
                <Link to="/blog/" className="text-primary hover:underline flex items-center gap-2">
                    <ChevronLeft className="w-4 h-4" />
                    Back to Blog
                </Link>
            </div>
        );
    }
    return (
        <div className="pt-32 pb-24 min-h-screen bg-slate-900 border-b border-slate-800 text-white relative overflow-hidden">
            {/* Background Orbs */}
            <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/10 blur-[150px] rounded-full pointer-events-none"></div>
            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <Link
                        to="/blog/"
                        className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8"
                    >
                        <ChevronLeft className="w-4 h-4" />
                        Back to Blog
                    </Link>
                    <h1 className="text-4xl md:text-5xl font-black mb-12 leading-tight tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
                        {post.title}
                    </h1>
                    <div className="prose prose-invert max-w-none space-y-8">
                        {post.content.map((item, index) => {
                            if (item.type === "heading") {
                                return (
                                    <h2 key={index} className="text-2xl font-bold text-white mt-12 mb-6">
                                        {item.text}
                                    </h2>
                                );
                            }
                            if (item.type === "image") {
                                return (
                                    <div key={index} className="my-12 flex justify-center">
                                        <img
                                            src={item.src}
                                            alt="Blog content"
                                            className="max-h-[500px] w-auto rounded-3xl shadow-2xl border border-slate-700/50 object-cover"
                                        />
                                    </div>
                                );
                            }
                            return (
                                <p key={index} className="text-gray-300 text-lg leading-relaxed">
                                    {item.text}
                                </p>
                            );
                        })}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};
export default BlogPost;
