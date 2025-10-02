import { createContext, useEffect, useState } from "react";
export const GlobalContext=createContext(null);
export const GlobalProvider=({children})=>
{
  const[watchlist,setWatchlist]=useState(()=>{
    const saved=localStorage.getItem("watchlist");
    return saved?JSON.parse(saved):[]});
  const[allreadyWatched,setAllReadyWatched]=useState(()=>{
    const saved=localStorage.getItem("allreadyWatched");
    return saved?JSON.parse(saved):
    []});
  useEffect(()=>{
    localStorage.setItem("watchlist",JSON.stringify(watchlist));
   
  },[watchlist])
  useEffect(()=>{
    localStorage.setItem("allreadyWatched",JSON.stringify(allreadyWatched));
  },[allreadyWatched]);
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
