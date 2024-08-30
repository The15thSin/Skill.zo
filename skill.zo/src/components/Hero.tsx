import hero from '../../src/assets/hero.jpg'
import about from '../../src/assets/bg-about.png'

function Hero() {
    return (
        <div className="flex flex-col justify-center items-center pt-12 pb-12">
            <h2 className="font-bold text-4xl md:text-6xl">Skill.zo</h2>
            <div className="w-16 md:w-26 mt-2 border-2 rounded-full border-green-300"></div>
            <h2 className="font-semibold mt-2 text-2xl md:text-4xl md:mt-2 text-slate-500 animate-pulse">Skill up & Stand out.</h2>
            <div className='mt-4'>
                <img src={about} alt="" />
            </div>
            <div className='md:flex md:p-10 p-4 items-center justify-center flex flex-col'>
                <h2 className='font-bold text-3xl flex justify-center items-center'>About Us</h2>
                <div className="w-16 md:w-26 mt-2 border-2 rounded-full border-green-300"></div>
                <div className='w-auto mt-8 flex items-center justify-center'>
                    <img className="w-[26rem] md:w-[90rem]" src={hero} alt="hero_Skill.zo" />
                </div>
                <div className="text-center p-4 md:w-auto md:p-10 mt-5 flex flex-col md:justify-center">
                    <p className="text-2xl text-justify">
                        Skill.zo cultivates skilled professionals by providing students with the knowledge and abilities necessary to thrive in a rapidly evolving society.
                    </p>
                    <p className="text-2xl text-justify mt-5">
                        At Skill.zo, we help students develop the sharp skills and deep understanding required to succeed in today's dynamic world.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Hero
