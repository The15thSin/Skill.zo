import { useState } from "react";

function Navbar() {

    const [showBurgerMenu, setShowBurgerMenu] = useState(false);

    return (
        <nav>
            <div className="w-full md:h-16 h-12 bg-blue-500 flex justify-between items-center px-4">
                <h1 className="font-bold text-xl md:text-2xl">Skill.zo</h1>
                <button className="text-2xl md:hidden" onClick={() => { setShowBurgerMenu(!showBurgerMenu) }}>
                    {showBurgerMenu ? <>&#10005;</> : <>&#9776;</>}
                </button>
                <ul className="hidden md:flex md:text-white md:text-xl">
                        <li className="font-semibold p-2 text-center"><button>Home</button></li>
                        <li className="font-semibold p-2 text-center"><button>Courses</button></li>
                        <li className="font-semibold p-2 text-center"><button>About Us</button></li>
                </ul>
                <div className="hidden md:flex md:text-lg">
                    <button className="bg-green-500 p-1 w-24 rounded-md md:font-semibold text-white mx-2 hover:bg-green-600">Login</button>
                    <button className="border-green-600 border-2 md:font-semibold p-1 w-24 rounded-md text-white mx-2 hover:bg-green-600 hover:border-green-600">Register</button>
                </div>
            </div>
            {
                showBurgerMenu &&
                <div className="bg-white">
                    <ul className=" ">
                        <li className="text-black font-semibold p-2 text-center"><button>Home</button></li>
                        <li className="text-black font-semibold p-2 text-center"><button>Courses</button></li>
                        <li className="text-black font-semibold p-2 text-center"><button>About Us</button></li>
                        <li className="text-black font-semibold p-1 text-center"><button className="bg-green-600 p-1 w-24 rounded-md text-white">Login</button></li>
                        <li className="text-black font-semibold p-2 text-center"><button className="border-green-600 border-2 p-1 w-24 rounded-md text-black">Register</button></li>
                    </ul>
                </div>
            }
        </nav>
    )
}

export default Navbar
