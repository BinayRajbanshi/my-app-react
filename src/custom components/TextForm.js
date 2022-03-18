import React , {useState} from 'react'

export default function TextForm(props) {
    
    const handleUppercase = () => {
        
        let NewText = text.toUpperCase();
        formatText(NewText);
        
    }

    const handleLowercase = () => {
        let lowerText = text.toLowerCase();
        formatText(lowerText);
    }
    
        const handleOnchange = (event) => {
           
            // formatText(event.target.value)
            formatText(event.target.value)
        }

        const handleClear = () => {
            formatText('')
        };
        const handleCopy = () => {
            navigator.clipboard.writeText(text)
        }

        // let handleSymbols = () =>{
        //     if (text === )
        // }

    const[text , formatText] = useState("");

    return  (<>
                    <h2 className='text-center'>{props.heading}</h2>
                    <div className="container mb-3">
                        <textarea className="form-control mt-3" value={text} onChange={handleOnchange} id="exampleFormControlTextarea1" rows="8"></textarea>
                        <button type="button" onClick={handleUppercase} className="btn btn-primary my-3">Convert to UpperCase</button>
                        <button type="button" onClick={handleLowercase} className="btn btn-danger mx-3 my-3">Convert to Lowercase</button>
                        <button type="button" onClick={handleCopy} className="btn btn-danger mx-3 my-3">Copy Text</button>
                        <button type="button" onClick={handleClear} className="btn btn-danger mx-3 my-3">Clear Text</button>
                    </div>
                    <div className='container'>
                        <h3>Summary of your text</h3>
                        You have {text.length} characters and {text.split( ' ').length} words
                        <h2>Preview of text</h2>
                        <p>{text}</p>
                    </div>
            </>)
}