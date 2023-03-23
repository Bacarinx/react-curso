const Events = () => {

    const handleMyEvent = (e) => {
        console.log(e)
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
        </div>
    )
};

export default Events;