import React, {useState} from 'react';

function Compteur() {
    const[count, setCount] = useState(0);
    return (
        <div className="">
            <h1>Ex2</h1>
            <h2 className="text-3xl text-red-600">{count}</h2>
            <button className="w-[250px] p-3 bg-amber-100" onClick={() => setCount(count + 1)}>+</button>
            <button className="w-[250px] p-3 bg-amber-100" onClick={() => setCount(count - 1)}>-</button>
        </div>
    );
}

export default Compteur;