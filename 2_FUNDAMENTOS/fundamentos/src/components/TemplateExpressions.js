const TemplateExpressions = () =>{


    const name = "Loacir Zen de Brito"
    const data = {
        age: 34,
        job: "Desempregado",
    }

    return(
        <div>
            <h2>Olá {name}, tudo bem?</h2>
            <p>Você atua como? {data.job}</p>
            <p> { 4 + 4 } </p>
        </div>
    );

};

export default TemplateExpressions;