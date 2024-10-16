const MyComponent = () => {
    
    const name = "Loacir Zen de Brito"

    const data = {
        idade: 34,
        ocupacao: "Estudante",
    }
    
    return(
        <div>
            <h1>Olá, {name}</h1>
            <h1>Idade: {data.idade}</h1>
            <h1>Ocupação: {data.ocupacao}</h1>
        </div>
    );
}

export default MyComponent;