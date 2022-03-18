import React , {useState , useEffect} from 'react'
import HookConcept from './HookConcept'


export default function Contact() {

    const [myStyle , setStyle] = useState({
        // backgoundColor:'white',
        color: 'black'
    })

    const [BtnText , setBtnText] = useState("Enable Dark Mode")

    let toggleModes = () =>{
        if (myStyle.color=='black'){
            setStyle({color:'pink', })
            setBtnText("Disable Dark mode")
        }
        else{
            setStyle({color:'black' , })
            setBtnText("Enable Dark mode")
        }
    }


    return <>
            <div className="container my-3 p-5 border border-2 border-dark " style={myStyle}>
                <h2>This is Contact Section</h2>
                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>

                <button type="button"  onClick={toggleModes} className="btn btn-primary">{BtnText}</button>
            </div>
            <HookConcept/>
        </>
}