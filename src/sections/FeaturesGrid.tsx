import { motion } from 'framer-motion';
import { Calendar, Megaphone, FileText, MessageSquare, Users, Compass } from 'lucide-react';

const features = [
    {
        icon: Calendar,
        title: 'Calendario y Eventos',
        description: 'Coordina actividades, reuniones y eventos del equipo. Visibilidad total de la agenda.',
    },
    {
        icon: Megaphone,
        title: 'Sistema de Anuncios',
        description: 'Comunica noticias importantes a todo el equipo al instante.',
    },
    {
        icon: FileText,
        title: 'Gestión de Políticas',
        description: 'Crea, almacena y comparte políticas empresariales. Cumplimiento normativo garantizado.',
    },
    {
        icon: MessageSquare,
        title: 'Mensajería Interna',
        description: 'Comunicación directa entre colaboradores en tiempo real.',
    },
    {
        icon: Users,
        title: 'Administración de Equipo',
        description: 'Base de datos centralizada de ejecutivos y colaboradores.',
    },
    {
        icon: Compass,
        title: 'Navegación Intuitiva',
        description: 'Interfaz limpia y accesible. Sin curva de aprendizaje.',
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: [0.4, 0, 0.2, 1] as const,
        },
    },
};

export default function FeaturesGrid() {
    return (
        <section id="features" className="py-16 md:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Title */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-primary">
                        Todo lo que necesitas, en un solo lugar
                    </h2>
                    <div className="w-16 h-1 bg-accent mt-4 mx-auto" />
                </motion.div>

                {/* Modules Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <motion.div
                                key={index}
                                variants={cardVariants}
                                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                                className="group bg-white rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 border border-gray-100"
                            >
                                <div className="w-14 h-14 bg-bg-blue rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                                    <Icon className="w-7 h-7 text-primary group-hover:text-white transition-colors duration-300" />
                                </div>

                                <h3 className="text-xl font-bold text-primary mb-3">{feature.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
