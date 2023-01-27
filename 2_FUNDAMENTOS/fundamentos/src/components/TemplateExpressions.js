const TemplateExpressions = () => {
    const name = "Roger"
    const data = {
        age: 39,
        job: 'programmer'
    }
    return (
        <div>
            <h1>Olá {name}, tudo bem?</h1>
            <p>Profissão: {data.job}</p>
            <p>Idade: {data.age}</p>
            <p>Expressões: {10 * 20}</p>
            <p>{console.log('JSX React')}</p>
        </div>
    )    
}

export default TemplateExpressions