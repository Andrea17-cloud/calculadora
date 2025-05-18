import React, { useState } from 'react';

function CalculadoraGrafica() {
    const [display, setDisplay] = useState('');
    const [operacion, setOperacion] = useState(null);
    const [valorAnterior, setValorAnterior] = useState(null);

    const manejarClicBoton = (valor) => {
        if (!isNaN(valor) || valor === '.') {
            setDisplay(display + valor);
        } else if (['+', '-', '*', '/'].includes(valor)) {
            if (display) {
                setValorAnterior(parseFloat(display));
                setOperacion(valor);
                setDisplay('');
            }
        } else if (valor === '=') {
            if (valorAnterior !== null && operacion) {
                let resultado;
                const valorActual = parseFloat(display);
                switch (operacion) {
                    case '+':
                        resultado = valorAnterior + valorActual;
                        break;
                    case '-':
                        resultado = valorAnterior - valorActual;
                        break;
                    case '*':
                        resultado = valorAnterior * valorActual;
                        break;
                    case '/':
                        resultado = valorAnterior / valorActual;
                        break;
                    default:
                        return;
                }
                setDisplay(resultado.toString());
                setValorAnterior(null);
                setOperacion(null);
            }
        } else if (valor === 'C') {
            setDisplay('');
            setValorAnterior(null);
            setOperacion(null);
        }
    };

    return (
        <div className="calculadora">
            <div className="display">{display}</div>
            <div className="teclado">
                <button onClick={() => manejarClicBoton('7')}>7</button>
                <button onClick={() => manejarClicBoton('8')}>8</button>
                <button onClick={() => manejarClicBoton('9')}>9</button>
                <button className="operador" onClick={() => manejarClicBoton('/')}>/</button>

                <button onClick={() => manejarClicBoton('4')}>4</button>
                <button onClick={() => manejarClicBoton('5')}>5</button>
                <button onClick={() => manejarClicBoton('6')}>6</button>
                <button className="operador" onClick={() => manejarClicBoton('*')}>*</button>

                <button onClick={() => manejarClicBoton('1')}>1</button>
                <button onClick={() => manejarClicBoton('2')}>2</button>
                <button onClick={() => manejarClicBoton('3')}>3</button>
                <button className="operador" onClick={() => manejarClicBoton('-')}>-</button>

                <button onClick={() => manejarClicBoton('0')}>0</button>
                <button onClick={() => manejarClicBoton('.')}>.</button>
                <button className="igual" onClick={() => manejarClicBoton('=')}>=</button>
                <button className="operador" onClick={() => manejarClicBoton('+')}>+</button>

                <button className="limpiar" onClick={() => manejarClicBoton('C')}>C</button>
            </div>
        </div>
    );
}

export default CalculadoraGrafica;