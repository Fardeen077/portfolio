export default function Footer() {
    return (

        <footer className="bg-portfolio text-white py-10 px-16 mt-auto">
            <div className="max-w-6xl mt-auto flex flex-col justify-between md:flex-row">
                <div className="flex flex-col gap-3">
                    <h1 className="text-2xl font-bold">Fardeen</h1>
                    <p className="text-gray-400">Frontend Developer | React & Tailwind Enthsiast</p>
                </div>

                {/* Quick Liknk  */}
                <div className="flex flex-col gap-3">
                    <h2 className="font-semibold text-lg">Ouick Links</h2>
                    <a href="home" className="text-gray-400 hover:text-white transition">Home</a>
                    <a href="about" className="text-gray-400 hover:text-white transition">About</a>
                    <a href="lab" className="text-gray-400 hover:text-white transition">Lab</a>
                </div>
                {/* Social Links  */}
                <div className="flex flex-col gap-3">
                    <h2 className="text-lg font-semibold">Social</h2>
                    <a href="https://github.com/" target="_blank" className="text-gray-400 hover:text-white transition">GitHub</a>
                    <a href="https://linkedin.com/" target="_blank" className="text-gray-400 hover:text-white transition">LinkedIn</a>
                    <a href="https://twitter.com/" target="_blank" className="text-gray-400 hover:text-white transition">Twitter</a>
                </div>
            </div>
            <div className="mt-8 border-t border-gray-700 pt-4 text-gray-500 text-center text-sm">
                © 2025 Fardeen Khan. All rights reserved.
            </div>
        </footer>
    );
}
