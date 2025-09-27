import naruto from "@/assets/naruto.jpg"
import { motion } from "motion/react"

export default function HomeSection() {
    return (
        <div className="px-16 mt-10 flex flex-col max-w-6xl h-screen">
            <div className="flex flex-col md:flex-row items-center gap-8">
                <img src={naruto} alt="naruto-image" className="w-40 ml-10 rounded-2xl mt-32" />

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mt-32 w-full md:w-1/2 md:ml-40 leading-relaxed">
                    <h1 className="text-3xl font-bold">Hi, I’m Fardeen</h1>
                    <p className="text-xl mt-2">A Frontend Web Developer</p>
                    <p className="mt-4">I build responsive and user-friendly websites using React and the MERN stack.</p>
                </motion.div>
            </div>
        </div>
    )
}