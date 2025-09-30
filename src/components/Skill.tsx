import { SiReact, SiJavascript, SiTailwindcss, SiVite, SiShadcnui, SiMongodb, SiNextdotjs, SiRedux, SiExpress } from "react-icons/si";
import { TiHtml5 } from "react-icons/ti";
import { IoLogoCss3 } from "react-icons/io5";
import { FaNode, FaGithub } from "react-icons/fa";
import { motion } from "motion/react";

export default function Skill() {
    const icons = [
        { icon: <SiJavascript className="text-yellow-400" />, name: "JavaScript" },
        { icon: <SiReact className="text-blue-400" />, name: "React" },
        { icon: <SiRedux className="text-purple-500" />, name: "Redux" },
        { icon: <SiTailwindcss className="text-sky-400" />, name: "Tailwind" },
        { icon: <SiExpress className="text-yellow-500" />, name: "Express" },
        { icon: <FaNode className="text-green-500" />, name: "Node.js" },
        { icon: <SiShadcnui className="text-white bg-black p-1 rounded" />, name: "ShadCN UI" },
        { icon: <TiHtml5 className="text-orange-500" />, name: "HTML5" },
        { icon: <IoLogoCss3 className="text-blue-400" />, name: "CSS3" },
        { icon: <SiMongodb className="text-green-500" />, name: "MongoDB" },
        { icon: <SiNextdotjs className="bg-white text-black rounded-full border p-1" />, name: "Next.js" },
        { icon: <SiVite className="text-purple-500" />, name: "Vite" },
        { icon: <FaGithub className="text-white" />, name: "GitHub" },
    ];
    return (
        <div className="flex flex-wrap gap-6 text-5xl px-16 sm:px-16 justify-center mb-32">

            <div className="text-gray-600 dark:text-gray-300 mb-8 text-xl max-w-5xl flex justify-center items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true, amount: 0.2 }}
                >
                    I have hands-on experience in building modern web applications using
                    front-end and back-end technologies. My skillset includes working with
                    frameworks, libraries, and tools that help me create fast, responsive, and
                    user-friendly applications.
                </motion.div>
            </div>

            <div className="flex flex-wrap gap-6 text-5xl px-16 sm:px-16 justify-center">
                {icons.map((item, i) => (
                    <motion.div
                        key={i}
                        whileHover={{ scale: 1.3, rotate: 10 }}
                        whileTap={{ scale: 0.9 }}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.2, type: "spring" }}
                        title={item.name}
                    >
                        {item.icon}
                    </motion.div>
                ))}
            </div>

            <div>

            </div>
        </div >
    );
}
