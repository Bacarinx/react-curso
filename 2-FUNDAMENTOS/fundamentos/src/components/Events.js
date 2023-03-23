const Events = () => {

    const handleMyEvent = (e) => {
        console.log(e)
    }

    const renderSomething = (x) => {
        if(x) {
            return <h1>Renderizando isso</h1>
        } else {
            return <h1>Também posso renderizar isso</h1>
        }
    }

    return (
        <div>
            <div>
                <button onClick={handleMyEvent}>CLique aqui</button>
            </div>
            <div>
                <button onClick={() => console.log("Clicou")}>Clique Aqui também</button>
                <button onClick={() => {
                    if(true) {
                        console.log("isso não deveria existir")
                    }
                }}>Clique aqui, por favor</button>
            </div>
            {renderSomething(true)}
        </div>
    )
};

export default Events;