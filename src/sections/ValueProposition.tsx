import { motion } from 'framer-motion';

export default function ValueProposition() {
    return (
        <section className="py-16 md:py-24 bg-white text-center">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">
                        ¿Qué es Portal Staff?
                    </h2>
                    <div className="w-20 h-1 bg-accent mx-auto mb-8" />

                    <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-medium mb-6">
                        Portal Staff es la aplicación integral diseñada específicamente para pymes mexicanas que buscan profesionalizar la gestión de su capital humano y conocimiento operativo.
                    </p>

                    <p className="text-lg text-gray-600 leading-relaxed">
                        Nuestra plataforma centraliza toda la información de tu equipo en un solo lugar, facilitando la administración, comunicación y cumplimiento normativo.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
