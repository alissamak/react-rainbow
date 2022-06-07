import React, {useState} from 'react';

const ColorForm = (props) => {
    let [input, setInput] = useState('');
    const handleSubmit =(e) => {
        e.preventDefault();
        props.addColor(input);
    }
    return(
        <div className='colorForm'>
            <form onSubmit={handleSubmit}>
                <input type='text' onChange={(e) => setInput(e.target.value)}></input>
                <button type='submit'>Submit Color</button>
            </form>
        </div>
    )
}
export default ColorForm;