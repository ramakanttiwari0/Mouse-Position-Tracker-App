import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [mouseMove, setMouseMove] = useState({x: 0, y:0});

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMouseMove({x: event.clientX , y: event.clientY});
    }
    window.addEventListener('mousemove', handleMouseMove);
    }, []);

  return (
    <>
     <div className="parent">
       <h1>Mouse Position App</h1>
       <h2> X:{mouseMove.x}  Y:{mouseMove.y}</h2>

     </div>
    </>
  )
}

export default App
