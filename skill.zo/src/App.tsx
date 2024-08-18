import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Courses from './components/Courses'

function App() {
  return (
    <div className='h-full bg-slate-950 text-white'>
      <Navbar />
      <Hero />
      <Courses />
    </div>
  )
}

export default App
