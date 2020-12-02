import React from 'react'

function ideainputform() {
    return (
        <div className="container row " style={{padding:"20px 40px",margin:"100px",backgroundColor:"white",borderRadius:"8px",height:"700px",alignSelf:"center"}}>
            <div className="col-6" style={{backgroundColor:"white",maxHeight:"650px",padding:"20px 15px"}}>
                <h3 style={{color:"orangered"}}> Submit Your Idea</h3>
                <hr/> <br/> <br/> <br/>
                

                <InputElement hint="Your Name * " style={{border:"1.5px solid black"}} />
                 <br/>  
                <InputElement hint="Your Email * " style={{border:"1.5px solid black"}}/>
                <br/>
                <InputElement hint = "Your Idea (Brief)* " style={{height : "60px",border:"1.5px solid black"}} />
                <br/>
                <input type="file" className="form-control-file" style={{border:"1.5px solid black", padding:"8px"}} />
                <br/>
                <div class="g-recaptcha" data-sitekey="6LcePAATAAAAAGPRWgx90814DTjgt5sXnNbV5WaW"></div>
                <br/> <br/>
                <button className="btn btn-primary"> Submit </button>

            </div>
            <div className="col-6">
                <br/>
                <h3 style={{color:"orangered"}}>How it Works</h3>
                <hr/><br/>
                <img src="http://www.blackpeppertech.com/core/theme/images/idea.jpg"/>
            </div>

        </div>
        // <div className="container">
        //     <div className="row">
        //         <div className="col-6">
        //         <InputElement hint="Your Name * " style={{border:"1.5px solid black"}} />
        //          <br/>  
        //         <InputElement hint="Your Email * " style={{border:"1.5px solid black"}}/>
        //         <br/>
        //         <InputElement hint = "Your Idea (Brief)* " style={{height : "50px",border:"1.5px solid black"}} />
        //          <br/>
        //         <input type="file" className="form-control-file" style={{border:"1.5px solid black", padding:"8px"}} />
        //         <br/>
        //         <button className="btn btn-primary"> Submit </button>
        //         </div> 
        //     </div>
        // </div>
    )
}



function InputElement(props) {
    return (
        <div>
            <input type="text" style={props.style} placeholder={props.hint} className="form-control"/>
        </div>
    )
}

export default ideainputform;