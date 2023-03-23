const Challenger = () => {

    const num1 = 7
    const num2 = 6

    const handleSoma = () => {
         console.log(num1 + num2)
    }
    return (
        <div>
            <button onClick={handleSoma}>CLique aqui para somar </button>
        </div>
    )
};

export default Challenger;