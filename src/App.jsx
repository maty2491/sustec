import './App.css'
import logo from './assets/sustec.png'

function App() {

  return (
    <>
    <div className='container'>
      <div className='row'>
        <div className='col-12 margin'>
          <img src={logo} alt="" className='d-flex mx-auto img-fluid' />
          <hr />
          <h1 className='text-center fw-bold'>EN CONSTRUCCIÓN</h1>
          <br />
          <h2 className='text-center fs-3'>ESTA PÁGINA ESTARÁ LISTA EN CUALQUIER MOMENTO</h2>
          <br />
          <p className='text-center fs-5'>Te invitamos a que nos contactes: <span className='fw-bold'>info@sustec.com.ar</span></p>
        </div>
      </div>

    </div>
    </>
  )
}

export default App
