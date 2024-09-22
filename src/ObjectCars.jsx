import React,{useState} from 'react'
function ObjectCars(){
    const [cars,setCars]=useState([])
    const [carYear,setcarYear]=useState(new Date().getFullYear())
    const [carMake,setCarMake]=useState("")
    const [carModel,setCarModel]=useState("")
    const [currentCar,setCurrentCar]=useState("")

    function addCar()
    {
        const newCar={CarYear:carYear, CarMake:carMake, CarModel:carModel}
        setCars(c=>[...c,newCar])
    }
    function setYear(event)
    {
        setcarYear(event.target.value)
    }
    function setMake(event)
    {
        setCarMake(event.target.value)
    }
    function setModel(event)
    {
        setCarModel(event.target.value)
    }
    function setCurrent(index){
        setCurrentCar(index)
    }
    function deleteCar()
    {
        setCars(sc=>sc.filter((_,index)=>index!==currentCar))
    }
    return(<div>
        <p>The Car details</p>
        <ul>
           {cars.map((car,index)=><li key={index} onClick={()=>setCurrent(index)}>{car.CarYear} {car.CarMake} {car.CarModel}</li>)}
        </ul>
        <input type='number' value={carYear} onChange={setYear}></input>
        <input type='text' value={carMake} onChange={setMake}></input>
        <input type='text'  value={carModel} onChange={setModel}></input>
        <button onClick={addCar}>
            Add new car
        </button>
        <button onClick={deleteCar}>
            delete
        </button>


    </div>);

    
}
export default ObjectCars