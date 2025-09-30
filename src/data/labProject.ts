import type { Project } from "@/data"
import real from "@/assets/Daskrop-Screenshot.png"
import auth from "@/assets/chat-auth.png"
import todo from "@/assets/Todos-app.png"
import hotel from "@/assets/HotalBooking.png"
import { img } from "motion/react-client"
export const labProject: Project[] = [

    {
        id: 1,
        title: 'Real Time Char App',
        description: 'A full- stack chat application built with MERN stack(MongoDB, Express.js, React, Node.js) and Socket.IO for real - time messaging.Users can sign up, log in, join group chats, and exchange messages instantly.',
        images: [
            { src: real },
        ],
    },
    {
        id: 2,
        title: "Authentication with JWT in Real-Time Chat App",
        description: 'This project demonstrates how authentication is handled in a real-time chat application using JWT JSON Web Token Users first register and log in through REST APIs.After successful login, a JWT token is issued which stores user identity securely. That token is used to authenticate both HTTP requests and Socket.IO connections. Once authenticated, users can send and receive messages in real- time.JWT ensures that only verified users can join the chat and prevents unauthorized access. The implementation covers login, token verification, and protecting WebSocket connections, making the chat app secure and reliable.',
        images: [
            {src: auth}
        ],
    },
    {
        id: 3,
        title: "To-Do Application",
        description: 'A modern React To- Do application featuring task management and theme switching using Context API.Users can add, update, delete, and toggle tasks, with all data persisted in localStorage for session continuity.The app also includes a task tracker showing how many items are left and filter options to view all, active, or completed tasks.Supports dark / light themes for a personalized experience.',
        images: [
            { src: todo },
        ]
    },
    {
        id: 4,
        title: "Hotel booking app",
        description: 'modern hotel booking web application built with React. Users can browse available rooms, view room details and prices, and make bookings. The app features category-based filtering, image galleries for rooms, and a responsive design for desktop and mobile devices. It also includes user-friendly navigation, a signup/login system, for enhanced user experience',
        images: [
            { src: hotel }
        ]
    },
]