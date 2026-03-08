import { motion } from "framer-motion";
const stats = [
    { value: "5+", label: "Years Experience" },
    { value: "50+", label: "Projects Delivered" },
    { value: "100%", label: "Client Satisfaction" },
    { value: "24/7", label: "Support & Maintenance" }
];
const Stats = () => {
    return (
        <section className="py-20 bg-primary/10 border-y border-primary/20 relative">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-x divide-primary/20">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="px-4"
                        >
                            <h3 className="text-4xl md:text-5xl font-black text-white mb-2 tracking-tight">
                                {stat.value}
                            </h3>
                            <p className="text-primary font-medium tracking-wide uppercase text-sm">
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
export default Stats;
