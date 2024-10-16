const MyComponent = () => {

    const nome = "Loacir Zen de Brito"

    const data = {
        idade: 34,
        ocupacao: "desempregado", 
    }

    return(
        <div>
            <h1>My Component</h1>
            <h2>Olá {nome}</h2>
            <h2>Idade: {data.idade}</h2>
            <h2>Ocupação: {data.ocupacao}</h2>
        </div>
    );

}

export default MyComponent