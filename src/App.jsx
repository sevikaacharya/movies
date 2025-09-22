import './App.css'
import Foot from './component/Foot'
import Main from './component/Main'

import {BrowerserRouter,Routes,Route} from 'react-router';

function App() {
 return (
    <>
     <BrowerserRouter>
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/movies/:movieName" element={<ViewAllMovies/>} />
        <Route path="/tv/:tvName" />
        <Route/>
        
      </Routes>
     </BrowerserRouter>
    </>
  )
}

export default App
