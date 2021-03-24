import React, { useState } from 'react';

// https://www.youtube.com/watch?v=Ws9WVHhNq5M (1:13:00)

export default function NumberForm() {

    const [numberOS, setNumberOS] = useState('');

    // métodos
    const handleChange = (e) => {
        setNumberOS({...numberOS, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        alert(`${numberOS}`);
        //e.preventDefault();
    }


    return (
        
            <form onSubmit={handleSubmit}>
                <label>
                    Número:
          <input type="text" value={numberOS} name="name" onChange={handleChange} />
                </label>
                <input type="submit" value="Enviar" />
            </form>
        

    );
}



