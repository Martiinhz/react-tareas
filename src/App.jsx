import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Taks } from './components/Taks/Taks'
let counter=0
function App() {
  const [takks, setTakks] = useState([])
  const myReference= useRef('')


 const CreationTaks=()=>{
  let response=myReference.current.value
  console.log(response);
  counter++
  const NewTaks={
    _id: counter,
    takss: response
  }

   setTakks([...takks, NewTaks])
}

  return (

    <>
    <ul>
      <input ref={myReference} type="text" placeholder='Ingrese la tarea' />
      <button onClick={CreationTaks}>Crear Tarea</button>
      <div className="ContentTaks">
        {
            takks.map(TAks=>(
            <Taks 
            key={TAks._id}
            component={TAks.takss}/>
          ))
        }
      </div>
    </ul>
    </>
  )
}

export default App
