import './App.css'
import Description from './component/Description';
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
        <Route path="/:type/:endPoint/:id" element={<Description/>} />
        <Route path="/tv/:tvName" />
       
        
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
