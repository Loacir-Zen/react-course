const Events = () => {

    const handerMyEvents = () => {
        console.log("Você clicou")
    }

    const henderAlgo = (x) => {
        if(x){
            return <h1>Você renderizou isso</h1>;
        } else {
            return <h1>Você também renderizou isso</h1>;
        }
    }

    return(
        <div>
            <div>
                <button onClick={handerMyEvents}> Clique no Botão</button>
            </div>

            {henderAlgo(true)}
            {henderAlgo(false)}
        </div>
    );
}

export default Events;