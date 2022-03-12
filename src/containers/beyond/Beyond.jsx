import React, { useState, useEffect} from 'react'
import { useMediaQuery } from 'react-responsive'
import { oneUser, groupUser, building } from "./imports"
import { BeyondItem } from '../../components'
import "./beyond.css"

const Beyond = () => {
  const isMobile = useMediaQuery({ query: `(max-width: 800px)`});
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    {  isMobile ? setAmount(3) : setAmount(6) }
  }, [])
  

  const beyondData = [
    {
      image: `${oneUser}`,
      title: 'Simplify Communications',
    },
    {
      image: `${groupUser}`,
      title: 'Quick Response'
    },
    {
      image: `${building}`,
      title: 'Ultimate Org Support'
    },
    {
      image: `${oneUser}`,
      title: 'Simplify Communications',
    },
    {
      image: `${groupUser}`,
      title: 'Quick Response'
    },
    {
      image: `${building}`,
      title: 'Ultimate Org Support'
    },
  ]

  return (
    <div className='cloud__beyond'>
      <div className="cloud__beyond-title">
        <h1>Go Beyond with the Ultimate Features</h1>
        <h3>Meet the ultimate features</h3>
      </div>
      <div className="cloud__beyond-grid">
        {beyondData.slice(0, amount).map((item, index) => (
          <BeyondItem image={item.image} title={item.title} key={item.title + index} />
        ))}
      </div>
    </div>
  )
}

export default Beyond