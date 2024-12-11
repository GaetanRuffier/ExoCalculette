const Buttons = ({ dispatch }) => {

    const digits = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    const operators = [
        { symbol: "+", type: "SET_OPERATOR", payload: "+" },
        { symbol: "-", type: "SET_OPERATOR", payload: "-" },
        { symbol: "x", type: "SET_OPERATOR", payload: "*" },
        { symbol: "/", type: "SET_OPERATOR", payload: "/" },
    ];






    return (
        <>
            <div>
                {digits.map((digit) => (
                    <button
                        key={digit}
                        onClick={() => dispatch({ type: "ADD_DIGIT", payload: digit })}
                    >
                        {digit}
                    </button>
                ))}
            </div>
            <div>

                {operators.map((op) => (
                    <button
                        key={op.symbol}
                        onClick={() => dispatch({ type: op.type, payload: op.payload })}
                    >
                        {op.symbol}
                    </button>
                ))}
                <button onClick={() => dispatch({ type: "CALCULATE" })}>=</button>
                <button onClick={() => dispatch({ type: "RESET" })}>reset</button>
            </div>
        </>
    )
}

export default Buttons