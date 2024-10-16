const Events = () => {

    //declarando a função handler do evento onClick
    const handlerMyEvents = () =>{
        console.log("Você clicou no botão")
    }


    const renderSomething = (x) =>{
        if(x){
            return <h1>Renderizando isso</h1>
        }else{
            return <h1>Também posso renderizar isso</h1>
        }
    }


    return(
        <div>
            <div>
                {/* Evento chando a fução handlerMyEvents */}
                <button onClick={handlerMyEvents}>Clique aqui</button>
            </div>
            <div>
                {/* Evento sem declarar função, fando na própria linha*/}
                <button onClick={() => {
                    if(true){
                        console.log("Você também clicou neste botão")
                    }
                }}>Clique também aqui</button>
            </div>
           
           {renderSomething(true)}
           {renderSomething(false)}

        </div>
    );
}

export default Events;