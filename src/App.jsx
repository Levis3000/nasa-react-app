import SideBar from "./compnents/SideBar"
import Footer from "./compnents/Footer"
import Main from "./compnents/Main"

import { useState } from "react"
import { useEffect } from "react"



function App() {
  const[showModal, setShowModal] = useState(false)
  const[data, setData] = useState()
  const[loading, setLoading] = useState(false)


  function handleToggleModal (){
    setShowModal(!showModal)
  }


  useEffect(() => {

    async function fetchAPIData(prams) {
      const NASA_KEY = import.meta.env.VITE_NASA_API_KEY
      const url = "https://api.nasa.gov/planetary/apod" + `?api_key=${NASA_KEY}`
      // console.log(url)
        const today = (new Date()).toDateString()
        const localKey = `NASA-${today}`
        if (localStorage.getItem(localKey)) {
          const apiData  = JSON.parse(localStorage.getItem(localKey))
          setData(apiData)
          console.log("Fetched from cache today")
          return

        }
        localStorage.clear()


      try {
        const res = await fetch(url)
        const apiData = await res.json ()
        console.log('DATA\n',   apiData)
        localStorage.setItem(localKey, JSON.stringify(apiData))
        setData(apiData)
        console.log("Fetched from API today")

      }catch (err){
        console.log("There was an error with fetching NASA data " , err)
      }
    }
    fetchAPIData()
  } , [])

  return (
    <>
    <div className="mainContainer">

{   showModal &&  <SideBar handleToggleModal={handleToggleModal} data={data}/>

}    
{data ? (<Main  data={data} />): (
<div className="loadingState">
  <i className="fa-solid fa-gear"></i>
</div>
) }



      {data && (<Footer handleToggleModal={handleToggleModal} data={data } />)}
      </div>
   </>
  )
}

export default App
