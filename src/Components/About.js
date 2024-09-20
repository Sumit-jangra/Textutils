import React from 'react'

export default function About (props) {
  
    // const[myStyle, setMyStyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white'
    //})
    let myStyle ={
        color: props.mode ==='dark'?'white':'#423743',
        background: props.mode ==='dark'?'rgb(36 74 104)':'white',
        // border: '2px solid' ,
        // borderColor: props.mode ==='dark'?'white':'#423743'
    }
   // const[btnText, setBtnText] = useState("Enable Dark mode")

    // const toggleStyle = () => {
    //     if (myStyle.color === "black") {
    //         setMyStyle({
    //             color: "white",
    //             backgroundColor: "black",
    //             border: "1px solid white",
    //         })
    //        setBtnText("Enable Light Mode")
        
    // }
    //   else {
    //     setMyStyle({
    //         color: 'black',
    //         backgroundColor: 'white'
    //     })
    //     setBtnText("Enable Dark Mode")
    //}
    //}
    return (
    <div>
            <div className="container">
        <h1 className="my-2"style={{color: props.mode ==='dark'?'white':'#423743',}} >About Us</h1>
            
        <div className="accordion" id="accordionExample"style={myStyle}>
    <div className="accordion-item">
        <h2 className="accordion-header" id="headingOne">
        <button className="accordion-button " style={myStyle}type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        <strong >Analyze your text</strong>   
        </button>
        </h2>
        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
        <div className="accordion-body"style={myStyle}>
            Textutils gives you a way to analyze yourtext quickly and efficiently. Be it word count, character count or b
        </div>
        </div>
    </div>
    <div className="accordion-item">
        <h2 className="accordion-header" id="headingTwo">
        <button className="accordion-button collapsed"style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        <strong>Free to use</strong>
        </button>
        </h2>
        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
        <div className="accordion-body"style={myStyle}>
            textutils is a free character counter tool that provides instant character count & word count statistics for a given text. Textutils reports the number of words and character. thus it is suitable for a given text, Textutils reports the number of words and character, thus it is suitable for writing text with word/ characterlimit.

        </div>
        </div>
    </div>
    <div className="accordion-item">
        <h2 className="accordion-header" id="headingThree">
        <button className="accordion-button collapsed"style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        <strong>Browser Compatible</strong>
        </button>
        </h2>
        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
        <div className="accordion-body"style={myStyle}>
        This word counter software work in any web Browser such as Chrome, firefox, Internet Explorer, safari, opera. It suits to count characterin facebook, blog, book, excel document, pdf document, essays, etc.
        </div>
        </div>
    </div>
    </div>
</div>
{/* <div className="container my-3">
<button onClick={toggleStyle} type="button" className="btn btn-primary"> {btnText}</button>
</div> */}
    </div>
  )
    
}
