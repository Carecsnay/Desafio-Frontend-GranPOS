import React, { useState } from 'react'
import { Button } from 'react-bootstrap';

const contador = () => {
    const [iterator, setIterator] = useState(0)

    const handleIncrease = () => {
        setIterator(iterator + 1);
    }

    const handleDecrease = () => {
        if (iterator > 0) {
            setIterator(iterator - 1);
        }
    }

    return (
        <div className='d-flex justify-content-center align-items-center flex-column my-5'>
            <h1 className='mb-5'>Contador (Conceito de useState)</h1>
            <div>
                <Button onClick={handleDecrease} style={{ width: '40px' }}>-</Button>
                <span className='mx-4'>{iterator}</span>
                <Button onClick={handleIncrease} style={{ width: '40px' }}>+</Button>
            </div>
        </div>
    )
}

export default contador