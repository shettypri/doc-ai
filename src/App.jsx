import { BrowserRouter, Form, Route, Routes,  } from 'react-router-dom'
import './App.css'
import Dashboard from './components/admin/Dashboard'

function App() {
  return (
    <>

    <BrowserRouter>
      <div>
      <Dashboard />
      </div>
      <Routes>
        <Route exact path='/form' element={<Form />}/>
      </Routes>
    </BrowserRouter>
      
      
    </>
  )
}

export default App
