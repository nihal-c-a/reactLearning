import React, { useState } from 'react';

function CarPicker() {
    const [car, setCar] = useState({
        make: 'Ford',
        model: 'Mustang',
        year: 2024
    });

    function handleYearChange(event) {
        
        setCar({ ...car, year: event.target.value }); // Update only the year while keeping other properties
    }
    function handleMakeChange(event) {
        setCar({ ...car, make: event.target.value }); // Update only the year while keeping other properties
    }
    function handleModelChange(event) {
        setCar({ ...car, model: event.target.value }); // Update only the year while keeping other properties
    }

    return (
        <div>
            <p>Your favorite car is: {car.year} {car.make} {car.model}</p>
            <input
                type="number"
                value={car.year}
                onChange={handleYearChange}
            />
             <input
                type="text"
                value={car.make}
                onChange={handleMakeChange}
            />
             <input
                type="text"
                value={car.model}
                onChange={handleModelChange}
            />
        </div>
    );
}

export default CarPicker;
