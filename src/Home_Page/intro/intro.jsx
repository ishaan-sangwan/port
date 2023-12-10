import "./intro.css"
import HelloContainer from "./hello_container"
// import pod from "../../../public/pod.png"

export default function Intro(){
    return(
        <>
            <div className="row contain">
                <div className="col-md-6">
                    <HelloContainer />
                    
                </div>
                <div className="col-md-6 img">
                    <img id="self" src= "/pod.png" alt="self"></img>
                </div>
                <br></br>

            </div>
        </>
    )
}