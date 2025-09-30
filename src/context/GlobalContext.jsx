import { createContext, useState } from "react";
export const GlobalContext=createContext(null);
export const GlobalProvider=({children})=>
{
  const[watchlist,setWatchlist]=useState([]);
  const[allreadyWatched,setAllReadyWatched]=useState([]);
  const handleAlreadyWatched=(id)=>
  {
   const item=watchlist.find((item)=>item.id===id);
   setAllReadyWatched([...allreadyWatched,item]);
   deleteWatchlist(id);
  }
  const addToWatchlist=(data)=>{
   setWatchlist([...watchlist,data])
  }
  const deleteWatchlist=(id)=>
  {
    const newList=watchlist.filter((item)=>item.id!==id);
    setWatchlist(newList);
  }
  
  
  return(
    <GlobalContext.Provider value={{addToWatchlist,watchlist,deleteWatchlist,handleAlreadyWatched,allreadyWatched}}>
      {children}
    </GlobalContext.Provider>
  )
}
