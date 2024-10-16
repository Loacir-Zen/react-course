const Events = () => {


    const handlerMyEvents = () => {
        console.log("Você clicou no botão")
    }

    const RenderAlgo = (x) => {
        if(x){
            return <h1>Renderizando isso</h1>
        }else{
            return <h1>Renderizando isso também</h1>
        }
    }

    return(
        <div>
            <div>
                <button onClick={handlerMyEvents}>Clique aqui!</button>
            </div>

            {RenderAlgo(true)}
            {RenderAlgo(false)}
        </div>
    );
}

export default Events;

