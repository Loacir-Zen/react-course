const MyComponent = () => {

    const name = "Loacir Zen de Brito"

    const data = {
        idade: 34,
        ocupação: "desempregado",
    }

    return(
        <div>
            <h1>Olá, {name}</h1>
            <h2>Idade: {data.idade}</h2>
            <h2>Ocupação: {data.ocupação}</h2>
        </div>
    );
}

export default MyComponent;