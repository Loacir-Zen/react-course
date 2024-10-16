const Events = () =>{

    const handleMyEvento = () =>{
        console.log("Você clicou!!!")
    }

    return(
        <div>
            <button onClick={handleMyEvento}>Clique aqui</button>

            {/* Events sem declarar função*/}

            <button onClick={() => {
                if(true){
                    console.log("Clicou")
                }
            }}>
                Clique aqui também!
            </button>
        </div>

    );
}

export default Events;