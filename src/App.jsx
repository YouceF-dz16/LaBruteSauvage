import { useState } from 'react'
import './App.css'
import Hero from './components/Hero.jsx'

function App() {
  // const [count, setCount] = useState(0)

  const heroes = [
    {
      name: "Vincent",
      img:"./src/assets/img/avatar1.png",
      alt: "leek1",
      level: 5,
      stats: {
        lifePoints: 20,
        attackDamage: 0,
        shield: 0,
      },
    },
        {
      name: "Samuel",
      img:"./src/assets/img/avatar2.png",
      alt: "leek2",
      level: 12,
      stats: {
        lifePoints: 0,
        attackDamage: 0,
        shield: 0,
      },
    }
  ]

  return (
    <div>
      <Hero {...heroes[0]}/>
      <Hero {...heroes[1]}/>
    </div>
  )
}

export default App
