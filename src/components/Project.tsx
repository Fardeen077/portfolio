import ChatApp from "@/assets/Daskrop-Screenshot.png"
import HotelBooking from "@/assets/HotalBooking.png"
import TodosApp from "@/assets/Todos-app.png"
import { motion } from "motion/react"


export default function Project() {
//     const projects = [
//   {
//     title: "Real-time Chat App",
//     description: "A full-stack chat application...",
//     image: ChatApp,
//     reverse: false,
//   },
//   {
//     title: "Hotel Booking App",
//     description: "The Hotel Booking App is a modern...",
//     image: HotelBooking,
//     reverse: true,
//   },
//   {
//     title: "Todos App",
//     description: "A modern To-Do application built with React...",
//     image: TodosApp,
//     reverse: false,
//   },
// ];
//     {projects.map((proj, i) => {
//   const imageMotion = {
//     initial: { opacity: 0, x: proj.reverse ? 50 : -50 }, // slide from right if reverse, else left
//     whileInView: { opacity: 1, x: 0 },
//     viewport: { once: true, amount: 0.2 },
//     transition: { duration: 0.8 },
//   };

//   const textMotion = {
//     initial: { opacity: 0, x: proj.reverse ? -50 : 50 }, // opposite direction of image
//     whileInView: { opacity: 1, x: 0 },
//     viewport: { once: true, amount: 0.2 },
//     transition: { duration: 0.8 },
//   };

//   return (
//     <div
//       key={i}
//       className={`flex ${proj.reverse ? "flex-col-reverse md:flex-row" : "flex-col md:flex-row"} items-center gap-10`}
//     >
//       <motion.img {...imageMotion} src={proj.image} className="w-full md:w-1/2 rounded-2xl" />
//       <motion.p {...textMotion}>{proj.description}</motion.p>
//     </div>
//   );
// })}

    return (
        <div className=" px-16 flex flex-col text-gray-600">
            <h1 className="text-5xl flex items-center justify-center mb-10 text-white">PROJECTS</h1>
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
                    <motion.p
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.8, }} className="mb-4">
                        The Hotel Booking App is a modern and responsive web application built using React, Tailwind CSS, and ShadCN UI components. It provides users with a smooth and interactive experience to browse hotels, view detailed room information with images, and make bookings effortlessly. The frontend features a dynamic navbar, interactive room cards, responsive layouts for desktop and mobile
                    </motion.p>

                    <motion.img
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.8, }}
                        src={HotelBooking} alt="HotelBooking"
                        className="w-full md:w-1/2 rounded-2xl" />
                </div>
            </div>

            {/* Todo app challange */}
            <div className="mt-29 flex-col gap-20 pb-20">
                <div className="flex flex-col md:flex-row items-center gap-20">
                    <motion.img
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.8, }} src={TodosApp} alt="todoProject"
                        className="rounded-2xl w-full md:w-1/2" />

                    <motion.p
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.8, }} className="mb-4">A modern To-Do application built with React, featuring real-time task management, theme switching, and persistent storage with localStorage. Includes add, update, delete, and toggle functionalities with a responsive, clean UI.</motion.p>
                </div>
            </div>
        </div>
    )
}