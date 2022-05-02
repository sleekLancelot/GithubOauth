import React from 'react';
import spinner from './spinner.gif';

function Spinner() {
    return (
        <div style={{
            transform: 'translate(100%, 80%)',
        }}>
            <img 
                alt='loading' 
                src={spinner} 
                style={{
                    width: '200px', 
                    margin: 'auto', 
                    display: 'block',
                    backgroundColor: 'inherit'
                }}
            />
        </div>
    )
}

export default Spinner;