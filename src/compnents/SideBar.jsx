import React from 'react'

export default function SideBar(props) {
    const {handleToggleModal, data} = props
  return (
    <div className="sidebar" onClick={handleToggleModal}>
    <div className="sidebarContent">
      <h2>{data.title}</h2>
        <p>Description Title:</p>
        {/* <p>This is just some description about the image</p> */}
        <p>{data?.explanation}</p>
        <p>{"\n\n" + data?.copyright}</p>
        <button onClick={handleToggleModal}> <i className="fa-solid fa-arrow-left"></i> </button>
    </div>
    </div>

  )
}
