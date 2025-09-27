import { NavLink } from "react-router";
import naruto from "@/assets/naruto.jpg"
import { useState } from "react";
import { LucideMenu, X } from "lucide-react"

export default function Header() {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <div className="text-white bg-portfolio p-5 flex justify-between fixed top-0 left-0 right-0 z-50">
            <div className="ml-11">
                <NavLink to="avatar">
                    <img src={naruto} alt="naruto-image" className="rounded-full w-10 h-10 bg-cover cursor-pointer" />
                </NavLink>
            </div>

            {/* NAV LIKE FOR DASKTOP  */}
            <ul className="md:flex mr-10 gap-20 hidden">
                <li>
                    <NavLink to="/">
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="about">
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink to="lab">
                        Lab
                    </NavLink>
                </li>
            </ul>

            {/* MOBILE MENU  */}
            <div className="md:hidden z-50 w-10">
                <button onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}>
                    {isMobileMenuOpen ? <X className="w-6 h-6" /> : <LucideMenu className="w-6 h-6" />}
                </button>
            </div>

            <ul
                className={`mt-10 fixed top-0 right-0 h-full w-2/3 bg-portfolio text-white flex flex-col items-end p-8 space-y-4 transition-transform duration-300 ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
                    } md:hidden`}
            >
                <li className="p-4 mx-auto text-2xl">
                    <NavLink to="/"
                    >Home
                    </NavLink>
                </li>
                <li className="p-4 mx-auto text-2xl">
                    <NavLink to="about"
                    >About
                    </NavLink>
                </li>
                <li className="p-4 mx-auto text-2xl"><NavLink to="lab"
                >Lab
                </NavLink>
                </li>
            </ul>


        </div>
    )
}