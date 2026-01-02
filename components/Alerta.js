import React from 'react'
import { Alert } from 'react-bootstrap'

const Alerta = () => {
    return (
        <div className='mt-4'>
            {
                [
                    'primary',
                    'secondary',
                    'success',
                    'danger',
                    'warning',
                    'info',
                    'light',
                    'dark',
                ].map((variant) => (
                    <Alert key={variant} variant={variant}>
                        Esse é o alerta <span className='fw-bold'>{variant}</span> do Bootstrap!
                    </Alert>
                ))
            }

        </div>
    )
}

export default Alerta