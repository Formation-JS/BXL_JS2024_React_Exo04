const calcOperation = new Map([
    ['add', { display: '+' }],
    ['sub', { display: '-' }],
    ['mult', { display: 'x' }],
    ['div', { display: '/' }]
]);
console.log(calcOperation);


export default function Calculatrice() {

    return (
        <>
            <h2>Calculatrice</h2>
            <form>
                <div>
                    <label htmlFor="">Nb1 : </label>
                    <input type="text" />
                </div>
                <div>
                    <label htmlFor="">Opé : </label>
                    <select>
                        {calcOperation.entries().toArray().map(([key, val]) => (
                            <option key={key} value={key}>{val.display}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label htmlFor="">Nb2 : </label>
                    <input type="text" />
                </div>
                <div>
                    <button>Calculer</button>
                </div>
                <div>
                    <label htmlFor="">Res : </label>
                    <input type="text" />
                </div>
            </form>
        </>
    );
}