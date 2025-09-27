
import { useParams } from "react-router"

import useAPI from "../context/useAPI";

const Description = () => {
  
  const {type,endPoint,id}=useParams();
  const mainEndPoint=endPoint==="trending"?`/${endPoint}/${type}/day`:`/${type}/${endPoint}`;
  const {data,loading,error}=useAPI(mainEndPoint);
  const mainVal=data.find((item)=>item.id===Number(id));
    if (!mainVal) {
    return <p className="text-red-500">Movie not found</p>;
  }

  console.log(mainVal);
   return (
    <div>
      {mainVal.title};
    </div>
  )
}

export default Description
