import ChatApp from "@/assets/Daskrop-Screenshot.png"
import HotelBooking from "@/assets/HotalBooking.png"
import TodosApp from "@/assets/Todos-app.png"
import { motion } from "motion/react"
export default function Project() {
    return (
        <div className="h-screen px-16 flex flex-col">
            <h1 className="text-5xl flex items-center justify-center mb-10">PROJECTS</h1>
            <div className="flex flex-col md:flex-row gap-20 ">
                {/* Chat app image */}
                <motion.img
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.8, }}

                    src={ChatApp} alt="dasktopimage"
                    className="w-2xl rounded-2xl" />
                {/* Chat app project des  */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.8 }}
                    className="flex-col md:mt-32">
                    Real-time Chat App — MERN Stack, Socket.IO, JWT Authentication
                    A full-stack chat application supporting real-time messaging, multiple chat rooms, and user authentication.
                </motion.div>
            </div>
            {/* HotelBooking app  */}

            <div className="flex mt-29 flex-col gap-20">
                <div className="flex flex-col-reverse md:flex-row items-center gap-10">
                    <p className="mb-4">
                        MERN Stack, Socket.IO, JWT Authentication. A full-stack chat
                        application supporting real-time messaging, multiple chat rooms,
                        and user authentication.
                    </p>
                
                <img src={HotelBooking} alt="HotelBooking" 
                className="w-full md:w-1/2 rounded-2xl" />
                </div>
            </div>

            {/* Todo app challange */}
            <div className="mt-29 flex-col gap-20 pb-20">
                <div className="flex flex-col md:flex-row items-center gap-20">
                    <img src={TodosApp} alt="todoProject" 
                    className="rounded-2xl w-full md:w-1/2"/>

                    <p className="mb-4">A modern To-Do application built with React, featuring real-time task management, theme switching, and persistent storage with localStorage. Includes add, update, delete, and toggle functionalities with a responsive, clean UI.</p>
                </div>
            </div>
        </div>
    )
}