const Events = () => {

    const handlerMyEvents = () => {
        console.log("Você clicou no botão")
    }

    const henderAlgo = (x) =>{
        if(x){
            return <h1>Você renderizou isso</h1>
        }else{
            return <h1>Você renderizou isso também</h1>
        }
    } 

    return(
        <div>
            <div>
                <button onClick={handlerMyEvents}>Clique aqui</button>
            </div>
            <div>
                <button onClick={() => {
                    if(true){
                        console.log("Você também clicou aqui")
                    }else{
                        console.log("Nada")
                    }
                }}>Clique também aqui</button>
            </div>
            {henderAlgo(true)}
            {henderAlgo(false)}
        </div>
    );
}

export default Events;