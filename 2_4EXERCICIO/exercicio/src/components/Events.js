const Events = () => {

    const handleMyEvents = () =>{
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
                <button onClick={handleMyEvents}>Clique aqui</button>
                {RenderAlgo(true)}
                {RenderAlgo(false)}
            </div>

           

        </div>
    );

}

export default Events;