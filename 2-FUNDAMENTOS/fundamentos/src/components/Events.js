const Events = () => {

    const handleMyEvent = (e) => {
        console.log(e)
    }

    return (
        <div>
            <div>
                <button onClick={handleMyEvent}>CLique aqui</button>
            </div>
        </div>
    )
};

export default Events;