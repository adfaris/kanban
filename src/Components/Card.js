import React from 'react'
import '../App.css'
export default({
  card,
  canMoveLeft,
  canMoveRight,
  onMoveLeft,
  onMoveRight
}) => (
  <div className='card'>
    {canMoveLeft && <button onClick={onMoveLeft} className='moveLeft'>{'<'} </button>}
    <span className='title'>{card.name}</span>
    {canMoveRight && <button onClick={onMoveRight} className='moveRight'>{'>'}</button>}
  </div>

)
