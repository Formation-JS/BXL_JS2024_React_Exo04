import { calcOperation } from "../../utils/operation.utils.js";

function CalculHistoryLine({ nb1, nb2, op, res }) {
    const current = calcOperation.get((op))
    return <p>{nb1} {current.display} {nb2} = {res}</p>
}

export default function CalculHistory ({ history= []}) {

    return (
        <div>
            {history.map(line => (
                <CalculHistoryLine key={line.id} {...line} />
            ))}
        </div>
    )
}