const Challenge = () => {

    let x = 10;
    let y = 8;

    const sumNumbers = () => {
        console.log(x + y);
    }

    return(
        <div>
            <h1>Vamos somar o número {x} e {y}</h1>
            <button onClick={sumNumbers}>Ah mlk!</button>
        </div>
    )
}

export default Challenge