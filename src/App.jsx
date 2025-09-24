import './App.css'
import Foot from './component/Foot'
import Main from './component/Main'
import ViewAllMovies from './component/ViewAllMovies';
import {BrowserRouter,Routes,Route} from 'react-router';

function App() {
 return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/movies" element={<ViewAllMovies/>} />
        <Route path="/movies/:movieName" element={<ViewAllMovies/>} />
        <Route path="/tv/:tvName" />
       
        
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
