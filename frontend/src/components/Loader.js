import React from 'react'

const Loader = () => {
    return (
        <div className='spinner-grow' style={{width:'100px',height:'100px',margin:'auto'}} role='status'>
        <span className='sr-only'>Loading...</span>
      </div>
    )
}

export default Loader
