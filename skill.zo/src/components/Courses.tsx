

function Courses() {
    return (
        <div className="p-4 flex flex-col justify-center items-center">
            <h1 className="font-bold text-2xl md:text-4xl text-green-400">Check out the Courses we provide</h1>
            <div className="w-12 border-2 border-white rounded animate-pulse mt-2"></div>

            <div className="grid grid-cols-1 gap-6 mt-10 mx-4 sm:grid-cols-2 lg:grid-cols-3">
                {/* ----------------------- cards starts here ---------------------- */}

                {/* 1. Digital marketing */}
                <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg overflow-hidden shadow dark:bg-gray-800 dark:border-gray-700">
                    <div className="w-auto bg-cyan-50">
                        <img src="https://images.pexels.com/photos/2566573/pexels-photo-2566573.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="product image" />
                    </div>
                    <div className="px-5 pb-5 mt-4">
                        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Digital Marketing</h5>
                        <div className="flex items-center justify-between mt-2">
                            <span className="text-3xl font-bold text-gray-900 dark:text-white">&#8377;599</span>
                            <span className="text-2xl font-semibold text-gray-900 dark:text-slate-500 pr-20 line-through">&#8377;999</span>
                            <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">View More</a>
                        </div>
                    </div>
                </div>

                {/* 2. Python */}
                <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg overflow-hidden shadow dark:bg-gray-800 dark:border-gray-700">
                    <div className="w-auto bg-cyan-50">
                        <img src="https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="product image" />
                    </div>
                    <div className="px-5 pb-5 mt-4">
                        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Introduction to Python for AI/ML</h5>
                        <div className="flex items-center justify-between mt-2">
                            <span className="text-3xl font-bold text-gray-900 dark:text-white">&#8377;1299</span>
                            <span className="text-2xl font-semibold text-gray-900 dark:text-slate-500 pr-14 line-through">&#8377;1999</span>
                            <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">View More</a>
                        </div>
                    </div>
                </div>

                {/* 3. Web Development */}
                <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg overflow-hidden shadow dark:bg-gray-800 dark:border-gray-700">
                    <div className="w-auto bg-cyan-50">
                        <img src="https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="product image" />
                    </div>
                    <div className="px-5 pb-5 mt-4">
                        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Web Development with MERN Stack</h5>
                        <div className="flex items-center justify-between mt-2">
                            <span className="text-3xl font-bold text-gray-900 dark:text-white">&#8377;1399</span>
                            <span className="text-2xl font-semibold text-gray-900 dark:text-slate-500 pr-14 line-through">&#8377;1999</span>
                            <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">View More</a>
                        </div>
                    </div>
                </div>

                {/* 4. Finance Management */}
                <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg overflow-hidden shadow dark:bg-gray-800 dark:border-gray-700">
                    <div className="w-auto bg-cyan-50">
                        <img src="https://images.pexels.com/photos/210607/pexels-photo-210607.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="product image" />
                    </div>
                    <div className="px-5 pb-5 mt-4">
                        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Finance Management</h5>
                        <div className="flex items-center justify-between mt-2">
                            <span className="text-3xl font-bold text-gray-900 dark:text-white">&#8377;999</span>
                            <span className="text-2xl font-semibold text-gray-900 dark:text-slate-500 pr-14 line-through">&#8377;1299</span>
                            <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">View More</a>
                        </div>
                    </div>
                </div>
                {/*---------------------------- cards ends here ----------------------------*/}
            </div>
        </div>
    )
}

export default Courses
