import React, { useState } from 'react';

function Ex3() {
    const [name, setName] = useState('');

    return (
        <div className="flex flex-col text-center p-3">
            <h1>Ex3</h1>
            <input
                type="text"
                placeholder="Your Name"
                className="w-[350px] border p-3 text-2xl bg-transparent mx-auto"
                value={name}
                onChange={(e) => setName(e.target.value)} 
            />

            <button
                className="mt-3 bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
                onClick={() => {
                    alert(`Bonjourno ${name || 'Stranger'}`); 
                }}
            >
                Click Me
            </button>
        </div>
    );
}

export default Ex3;
