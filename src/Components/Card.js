// import React from "react"

// export default ({
//   card,
//   canMoveLeft,
//   canMoveRight,
//   onMoveLeft,
//   onMoveRight
// }) => (
//   <div className="card">
//     {canMoveLeft && <button onClick={onMoveLeft}>{'<'}</button>}
//     <span className="title">{card.name}</span>
//     {canMoveRight && <button onClick={onMoveRight}>{'>'}</button>}
//   </div>
// )

import React from 'react'
import '../App.css'
export default({card}) =>  (
  <div className='card'>
    <button className='moveLeft'>{'<'}</button>
    <span className='title'>{card.name}</span> 
    <button className='moveRight'>{'>'}</button>
  </div>

)