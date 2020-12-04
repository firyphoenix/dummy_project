import React from 'react'

export default function IdeaForm() {
    return (
        <React.Fragment>
            <div className="container">
            <div className="form-group col-6 mt-5">
                <input type="text" className="form-control" placeholder="Your Name" name="name"/>
                <br/>
                <input type="text" className="form-control" placeholder="Your Email" name="email"/>
                <br/>
                <input type="text" className="form-control" placeholder="Your Idea" name="idea"/>
                <br/>
                <input type="file" className="form-control-file form-control" placeholder="Choose File"/>
                <br/>
                <br/>
                <button className="btn btn-primary">Submit</button>

            </div>
            </div>
        </React.Fragment>
    )
}
