import { useParams } from "react-router"

const Description = () => {
  const {movieName}=useParams();
  
  return (
    <div>
      the name is {movieName}
    </div>
  )
}

export default Description
