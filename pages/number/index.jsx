
import React, { useState } from 'react';

// https://www.youtube.com/watch?v=Ws9WVHhNq5M (1:13:00)

export default function NumberForm() {

    const [numberOS, setNumberOS] = useState('');

    // métodos
    const handleChange = (e) => {
        setNumberOS(e.target.value);
    }

    const handleSubmit = (e) => {
        alert('Foi digitado: ' + numberOS);
        //e.preventDefault(); // mantém os dados fixo no formulario


    }

    // 'numbeOS' tem que chegar em api/os/[number]


    return (

        <form onSubmit={handleSubmit}>
            <label>
                Número:
                    {/* o numero digitado só aparece na URL se deixar "name" ativado */}
                <input type="text" value={numberOS} name="name" onChange={handleChange} />

            </label>
            <input type="submit" value="Enviar" />
        </form>


    );
}


// TODO: O numero digitado no formulario deve ser repassado na api via URL ou via formulário
