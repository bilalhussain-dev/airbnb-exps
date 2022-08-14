import React from 'react'
// import data from '../api-data/data'

function Fake(item) {

  let isOnline;
  if(item.online === true) {
    isOnline = 'Online'
  } else {
    isOnline = 'Offline'
  };


  return (
    <div className='card-post'>
        {isOnline && <div className='badge'>{isOnline}</div>}
        {/* <span className='badge'></span> */}
        {/* <div className="id">{item.id}</div> */}
        <h3>{item.title}</h3>
        <div className="post-body">
            <p>{item.body}</p>
        </div>
        <div className="posted-by">
            <span>Posted by: </span>
            <span>{item.username}</span>
        </div>
    </div>
  )
}

export default Fake