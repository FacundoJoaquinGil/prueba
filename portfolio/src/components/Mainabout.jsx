import { useState } from "react"

const Mainabout = () => {

  const [num,setNum] = useState (1)

  const handleclick = () =>{
    num >2 ? setNum(1) : setNum(num+1)
  }

  return (
   <>
      <img src={`/${num}.jpg`} alt="" />
      <button onClick={handleclick}>CAMBIAR</button>
   
   </>
  )
}

export default Mainabout