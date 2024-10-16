const Events = () => {

    const handlerMyEvents = () => {
        console.log("Você clicou no botão")
    }

    return(
        <div>
            <button onClick={handlerMyEvents}>Clique aqui</button>
            <button onClick={() => {
                if(true){
                    console.log("Você também clicou aqui")
                }
            }}>Clique aqui também</button>
        </div>
  
    );
}

export default Events;