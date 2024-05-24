
const CounterButtons = ({ 
    step, 
    onIncr = () => { }, // NOOP -> Fonction vide par defaut
    onDecr = () => { }
}) => {

    const handleIncrBtn = () => {
        onIncr(step);
    };

    const handleDecrBtn = () => {
        onDecr(step);
    };

    return (
        <div>
            <button onClick={handleIncrBtn} >+ {step}</button>
            <button onClick={handleDecrBtn} >- {step}</button>
        </div>
    );
};

export default CounterButtons;