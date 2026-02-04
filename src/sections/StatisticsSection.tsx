import { motion } from 'framer-motion';
import { TrendingUp, AlertTriangle, Users } from 'lucide-react';

export default function StatisticsSection() {
    return (
        <section className="bg-yellow-bar py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">
                        ¿Te resulta familiar?
                    </h2>
                    <div className="w-20 h-1 bg-black mx-auto" />
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* Stat 1 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="bg-black/5 rounded-2xl p-8 text-center border border-black/10"
                    >
                        <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                            <Users className="w-8 h-8 text-yellow-bar" />
                        </div>
                        <h3 className="text-5xl font-bold text-primary mb-2">62%</h3>
                        <p className="text-lg text-primary/80 font-medium">de las pymes identifican la atracción y retención de talento como su mayor reto</p>
                    </motion.div>

                    {/* Stat 2 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="bg-black rounded-2xl p-8 text-center shadow-xl transform md:-translate-y-4"
                    >
                        <div className="w-16 h-16 bg-yellow-bar rounded-full flex items-center justify-center mx-auto mb-6">
                            <AlertTriangle className="w-8 h-8 text-primary" />
                        </div>
                        <h3 className="text-5xl font-bold text-yellow-bar mb-2">20%</h3>
                        <p className="text-lg text-white/90 font-medium">del salario anual se pierde en cada rotación de personal</p>
                    </motion.div>

                    {/* Stat 3 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="bg-black/5 rounded-2xl p-8 text-center border border-black/10"
                    >
                        <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                            <TrendingUp className="w-8 h-8 text-yellow-bar" />
                        </div>
                        <h3 className="text-5xl font-bold text-primary mb-2">32%</h3>
                        <p className="text-lg text-primary/80 font-medium">de pymes usan herramientas digitales para gestión empresarial</p>
                    </motion.div>
                </div>

                <div className="mt-12 text-center">
                    <p className="text-sm font-medium text-primary/60 uppercase tracking-widest">
                        Fuente: Estudio MetLife México 2025
                    </p>
                </div>
            </div>
        </section>
    );
}
