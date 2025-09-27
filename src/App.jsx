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
        <Route path="/:type" element={<ViewAllMovies/>} />
        <Route path="/:type/:id" element={<Description/>} />
        <Route path="/:type/:id" element={<Description/>} />
       
        
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
