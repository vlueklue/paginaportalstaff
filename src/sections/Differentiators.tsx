import { motion } from 'framer-motion';
import { Check, Star, Users, Brain, Zap, DollarSign, LifeBuoy, RefreshCcw } from 'lucide-react';

const differentiators = [
    {
        icon: Star,
        title: "Diseñado para Pymes Mexicanas",
        description: "A diferencia de soluciones genéricas internacionales, entendemos tu contexto regulatorio, presupuesto y necesidades específicas."
    },
    {
        icon: Zap,
        title: "Interfaz Intuitiva Sin Curva de Aprendizaje",
        description: "Pensado para usuarios con poca o nula experiencia digital. Tu equipo empieza desde el día uno."
    },
    {
        icon: Brain,
        title: "Capital Humano + Conocimiento Operativo",
        description: "No solo gestionas a tu equipo, centralizas todo el conocimiento operativo de tu empresa."
    },
    {
        icon: DollarSign,
        title: "Accesible Económicamente",
        description: "Planes diseñados específicamente para empresas de 11-100 empleados."
    },
    {
        icon: LifeBuoy,
        title: "Soporte Local en México",
        description: "Equipo que entiende tu contexto y necesidades específicas."
    },
    {
        icon: RefreshCcw,
        title: "Actualizaciones Constantes",
        description: "Mejoras continuas basadas en retroalimentación real de usuarios."
    }
];

export default function Differentiators() {
    return (
        <section className="py-16 md:py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-12 text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                        ¿Por qué Portal Staff es diferente?
                    </h2>
                    <div className="w-16 h-1 bg-accent mx-auto mb-8" />
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {differentiators.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center"
                            >
                                <div className="w-16 h-16 bg-primary/5 rounded-full flex items-center justify-center mb-6">
                                    <Icon className="w-8 h-8 text-primary" />
                                </div>
                                <h3 className="text-xl font-bold text-primary mb-3">{item.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{item.description}</p>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    );
}
