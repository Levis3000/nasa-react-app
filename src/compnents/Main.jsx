import React from 'react'

export default function main(props) {
    const {data} = props;
  return (
    <div className='imageContainer'>
      <img src= {data?.url} className="bgImage" alt={'data.title' || 'bg-img'}/>
    </div>
  )
}
