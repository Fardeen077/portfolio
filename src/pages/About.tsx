import aboutImg from "@/assets/sasuke.jpg"
import { Button } from "@/components/ui/button"

export default function About() {
    return (
        <div className="flex flex-col px-16 mt-26 justify-center items-center text-lg text-gray-500 mb-6">
            <img src={aboutImg} alt="aboutImg" className="rounded-full w-48 h-48 mb-10" />
            <h1>Hello, I’m Fardeen!</h1>
            <h2>Frontend Developer | React & Tailwind Enthsiast</h2>
            <div className="flex md:mx-32 mt-10">

                <p>I’m an aspiring Full-Stack Web Developer, currently focused on building different types of projects using the React. I completed my Bachelor’s degree at ABC College under CCSU.
                    In my free time, I enjoy watching anime, writing, and exploring new development projects. I’m passionate about creating responsive and interactive web applications while continuously learning and improving my skills.</p>
            </div>
            <div className="mt-6 flex flex-wrap gap-4 justify-center">
                <span className="px-4 py-2 bg-gray-200 rounded-full">React</span>
                <span className="px-4 py-2 bg-gray-200 rounded-full">Node.js</span>
                <span className="px-4 py-2 bg-gray-200 rounded-full">MongoDB</span>
                <span className="px-4 py-2 bg-gray-200 rounded-full">Express</span>
            </div>

            <div className="mt-10">
                <a href="fardeen_CV.pdf"
                    download>
                    <Button className="cursor-pointer">
                        Download CV</Button>
                </a>
            </div>
        </div>
    )
}