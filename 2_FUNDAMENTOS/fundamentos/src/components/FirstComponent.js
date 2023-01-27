// estilos
// componentes
import MyComponent from "./MyComponent"

const FirstComponent = () => {
    // comentários podem vir aqui

    /*
    várias linhas
    várias linhas
    várias linhas
    várias linhas
    várias linhas
    */

    return(        
        <div>
            {/* mais comentários */}
            <h1>Meu primeiro componente</h1>
            <p className="teste">Meu texto</p>
            <MyComponent />
            <MyComponent />
        </div>
    )
}

export default FirstComponent