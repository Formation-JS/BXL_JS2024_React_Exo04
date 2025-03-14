import { useId, useState } from "react";
import CalculHistory from "../../components/calcul-history/calcul-history.jsx";
import { calcOperation } from "../../utils/operation.utils.js";

export default function Calculatrice() {

    const inputId = useId();
    const [nb1, setNb1] = useState('');
    const [nb2, setNb2] = useState('');
    const [op, setOp] = useState(calcOperation.keys().next().value);
    const [res, setRes] = useState('');

    const [history, setHistory] = useState([
        { id: 1, nb1: '42', nb2: '3,14', op: 'add', res: '45,14' },
        { id: 2, nb1: '10', nb2: '2', op: 'mult', res: '20' }
    ]);

    const handleCalcSubmit = (event) => {
        event.preventDefault();

        // Conversion des valeurs pour les manipuler
        const val1 = parseFloat(nb1.replace(',', '.'));
        const val2 = parseFloat(nb2.replace(',', '.'));
        
        // Traitement de l'opération
        const currentOperation = calcOperation.get(op);
        const currentResult = currentOperation.calc(val1, val2);
        const fixResult = Math.round(currentResult * 10e5) / 10e5;
        setRes(fixResult.toLocaleString('fr-be'));
    };

    const handleChangeNb = (event, setNbValue) => {
        const nb = event.target.value.replace('.', ',');

        if(nb === '' || /^-?[0-9]*(,[0-9]{0,5})?$/.test(nb)) {   
            setNbValue(nb);
        }
    }

    return (
        <>
            <h2>Calculatrice</h2>
            <form onSubmit={handleCalcSubmit}>
                <div>
                    <label htmlFor={inputId+'-nb1'}>Nb1 : </label>
                    <input type="text" id={inputId+'-nb1'} required
                        value={nb1}
                        onChange={(e) => handleChangeNb(e, setNb1)} />
                </div>
                <div>
                    <label htmlFor={inputId+'-op'}>Opé : </label>
                    <select id={inputId+'-op'} required
                        value={op}
                        onChange={(e) => setOp(e.target.value)}>
                        {/* <option value='' disabled>Veuillez selection une opération</option> */}
                        {calcOperation.entries().toArray().map(([key, val]) => (
                            <option key={key} value={key}>{val.display}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label htmlFor={inputId+'-nb2'}>Nb2 : </label>
                    <input type="text" id={inputId+'-nb2'} required
                        value={nb2}
                        onChange={(e) => handleChangeNb(e, setNb2)} />
                </div>
                <div>
                    <button type="submit">Calculer</button>
                </div>
                <div>
                    <label htmlFor={inputId+'-res'}>Res : </label>
                    <input type="text" id={inputId+'-res'}
                        value={res}
                        readOnly />
                </div>
            </form>

            <h2>Historique</h2>
            <CalculHistory history={history} />
        </>
    );
}