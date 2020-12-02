import react, {useState} from 'react';

const BasicChange = () => {
    
    console.log(this);
    const [title, setTitle] = useState('First Heading');
    const[arr,setArr] = useState([])
    const clickHandler = () => {
        console.log(useState)
        if(title === 'First Heading') {
            setTitle('I changed')
        }
        else {
            setTitle('First Heading')
        }
        
    }
    return (
        <div>
            <h2> {title}</h2>
            <button type="button" className="btn btn-primary" onClick={clickHandler}>change it</button>
        </div>
    )

}

export default BasicChange;