import React from 'react'

function Card({bookTitle, bookAutor, bookISBN, bookPrice}) {
  return (
    <div className='card'>
        <div className="card-header">
            <h4>{bookTitle}</h4>
            <span>{bookPrice}</span>
        </div>
        <div className="card-body">
            <h4>{bookAutor}</h4>
            <span>{bookISBN}</span>
        </div>
    </div>
  )
}

export default Card