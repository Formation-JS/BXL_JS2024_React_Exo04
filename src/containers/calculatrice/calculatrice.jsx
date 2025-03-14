import { useState } from "react";

const calcOperation = new Map([
    ['add', { display: '+' }],
    ['sub', { display: '-' }],
    ['mult', { display: 'x' }],
    ['div', { display: '/' }]
]);
console.log(calcOperation);


export default function Calculatrice() {

    const [nb1, setNb1] = useState('');
    const [nb2, setNb2] = useState('');
    const [op, setOp] = useState(calcOperation.keys[0]);
    const [res, setRes] = useState('');

    return (
        <>
            <h2>Calculatrice</h2>
            <form>
                <div>
                    <label htmlFor="">Nb1 : </label>
                    <input type="text"
                        value={nb1}
                        onChange={(e) => setNb1(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="">Opé : </label>
                    <select required
                        value={op}
                        onChange={(e) => setOp(e.target.value)}>
                        {/* <option value='' disabled>Veuillez selection une opération</option> */}
                        {calcOperation.entries().toArray().map(([key, val]) => (
                            <option key={key} value={key}>{val.display}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label htmlFor="">Nb2 : </label>
                    <input type="text"
                        value={nb2}
                        onChange={(e) => setNb2(e.target.value)} />
                </div>
                <div>
                    <button>Calculer</button>
                </div>
                <div>
                    <label htmlFor="">Res : </label>
                    <input type="text"
                        value={res}
                        readOnly />
                </div>
            </form>
        </>
    );
}