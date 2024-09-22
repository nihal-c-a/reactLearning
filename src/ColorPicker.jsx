import react, {useState} from 'react'
function ColorPicker(){
    const [color,setColor]=useState("#FFFFFFF")
    function changeColor(event)
    {
        setColor(event.target.value)
    }
    return(
            <div className='color-picker-container'>
                <h1>color Picker</h1>
                <div className='color-display' style={{backgroundColor: color}}>
                    <p>Selected color:{color}</p>
                </div>
                <label>Select a color</label>
                <input type='color' onChange={changeColor}></input>
            </div>


    );
}
export default ColorPicker