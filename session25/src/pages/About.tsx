import { useParams } from "react-router-dom"


export default function About() {
  // detructoring
  const {aboutId,aboutName} =  useParams()
  // console.log("Result: ", result);
  
  return (
    <div>
       <h2>aboutId: {aboutId}</h2>
       <h2>aboutName: {aboutName}</h2>
    </div>
  )
}
