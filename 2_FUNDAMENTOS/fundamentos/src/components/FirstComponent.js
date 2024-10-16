//fazendo comentário fora da função 

import MyComponent from "./MyComponent";

const FirstComponent = () =>{

    //comentário dentro da função

    return(
        <div>    
            
            {/* comentário dentro do return*/}

            <h1>Meu primeiro componente</h1>
            <p className="teste">Meu texto</p>
            <MyComponent></MyComponent>
        </div>
    );
};

export default FirstComponent;