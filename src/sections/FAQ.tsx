import { motion } from 'framer-motion';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
    {
        question: "¿Necesito capacitar a mi equipo para usarlo?",
        answer: "No. Portal Staff está diseñado con una interfaz intuitiva similar a las redes sociales que ya usan, eliminando la curva de aprendizaje. Tu equipo podrá usarlo desde el primer día."
    },
    {
        question: "¿Cumple con las normativas mexicanas como NOM-035?",
        answer: "Sí. Nuestra plataforma facilita el cumplimiento de la NOM-035 y otras regulaciones laborales mexicanas al centralizar políticas, permitir la difusión de información y gestionar la comunicación interna de manera efectiva."
    },
    {
        question: "¿Puedo migrar mi información actual?",
        answer: "Absolutamente. Ofrecemos herramientas y asistencia para importar tu base de datos de colaboradores y documentos existentes de manera rápida y segura."
    },
    {
        question: "¿Qué tamaño de empresa es ideal para Portal Staff?",
        answer: "Nuestros planes están optimizados específicamente para pymes de 11 a 100 empleados, ofreciendo las funcionalidades de nivel corporativo que necesitas a un precio accesible para tu escala."
    }
];

export default function FAQ() {
    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                        Preguntas Frecuentes
                    </h2>
                    <div className="w-16 h-1 bg-accent mx-auto" />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <Accordion type="single" collapsible className="w-full">
                        {faqs.map((faq, index) => (
                            <AccordionItem key={index} value={`item-${index}`} className="border-b-gray-200">
                                <AccordionTrigger className="text-left text-lg font-medium text-primary hover:text-accent hover:no-underline transition-colors py-4">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-gray-600 leading-relaxed text-base pb-6">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </motion.div>
            </div>
        </section>
    );
}
