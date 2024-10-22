import './App.css'
import Button from "./components/Button"

const style = {
  color:"pink"
}

function App() {
const nombre = "Viviane"
const array = [1,2,3]
  return (
    <div>
     <h1 style={style}>Bienvenida</h1>
     <p>{nombre}</p>
     {/* <label htmlFor="name" className="title"> */}
      <input type="text" id="name" placeholder="nombre"/>
    {/* </label> */}
    <Button title="Enviar" color="green" total={3} array={array}/>
    <Button title="Cancelar" color="red"/>

    </div>
  )
}

export default App
