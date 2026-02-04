import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
    {
        name: "Carlos Rodríguez",
        role: "Director General",
        company: "Manufacturas del Norte",
        content: "Implementar Portal Staff redujo nuestra rotación en un 30% en los primeros 6 meses. Ahora todos saben qué hacer y cómo hacerlo.",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
        name: "Ana Martínez",
        role: "Gerente de RRHH",
        company: "Logística Express",
        content: "La facilidad para comunicar nuevas políticas a los choferes en ruta ha sido un cambio total. El cumplimiento normativo dejó de ser un dolor de cabeza.",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
        name: "Roberto Sánchez",
        role: "Gerente de Planta",
        company: "Alimentos Frescos S.A.",
        content: "Por fin eliminamos el papel y los chats de WhatsApp desordenados. Todo el conocimiento operativo está seguro y accesible para quien lo necesita.",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    }
];

export default function Testimonials() {
    return (
        <section className="py-16 md:py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                        Lo que dicen las pymes que ya lo usan
                    </h2>
                    <div className="w-16 h-1 bg-accent mx-auto" />
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white p-8 rounded-2xl shadow-card hover:shadow-lg transition-shadow"
                        >
                            <div className="flex gap-1 mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                                ))}
                            </div>
                            <p className="text-gray-700 italic mb-6 leading-relaxed">
                                "{testimonial.content}"
                            </p>
                            <div className="flex items-center gap-4">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-12 h-12 rounded-full object-cover"
                                />
                                <div>
                                    <h4 className="font-bold text-primary">{testimonial.name}</h4>
                                    <div className="text-sm text-gray-500">
                                        {testimonial.role}
                                        <span className="block text-accent font-medium">{testimonial.company}</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
