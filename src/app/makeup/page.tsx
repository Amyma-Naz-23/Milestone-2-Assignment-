import { describe } from 'node:test'
import React from 'react'

const MakeUp = () => {
  const makeupData = [
    {
      id:1, name:'Foundation', price:4000, description:'St Londan foundation', image: '/found.jpeg'

    },
    {
      id:2, name:'Lipstick', price:650, description:'Otwo Lipstick', image: '/lipstick.web.jpg'
      
    },
    {
      id:3, name:'Maskara', price:1000, description:'Maybelline', image:'/mask.jpg'
      
    },
    {
      id:4, name:'Face-Powder', price:1000, description:'Miss Ross Face-powder', image: '/powder.jpeg'
      
    },
    {
      id:5, name:'NailPaint', price:500, description:'Revlon', image: '/nail.jpg'
      
    },
    {
      id:6, name:'Highlighter', price:500, description:'REFY Gloss Highlighter', image: '/heigh.jpg'
      
    },
  ]

  return(
    <div>
      <div className='makeup'>
        {makeupData.map((makeup)=>(
          <div key={makeup.id} className='makeup-card'>
                <img src={makeup.image} alt={makeup.name} />
                <h3>{makeup.name}</h3>
                <p>{makeup.description}</p>
                <div className='price'>${makeup.price}</div>
                <button>Add To Card</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MakeUp