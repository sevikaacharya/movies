import './App.css'
import Description from './component/Description';
import Main from './component/Main'
import ViewAllMovies from './component/ViewAllMovies';
import {BrowserRouter,Routes,Route} from 'react-router';
import Watchlist from './component/Watchlist';
import SearchItem from './component/SearchItem';
import Watched from './component/Watched';

function App() {
 return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/:type" element={<ViewAllMovies/>} />
        <Route path="/:type/:id" element={<Description/>} />
        <Route path="/:type/:id" element={<Description/>} />
        <Route path='/watchlist' element={<Watchlist/>}/>
        <Route path='/watched' element={<Watched/>} />
        <Route path='/search' element={<SearchItem/>}  />
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
