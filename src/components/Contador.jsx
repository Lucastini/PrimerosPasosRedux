import React from 'react'
import { agregarCantidadAction, quitarCantidadAction } from '../redux/Actions/contadorActions'
import { useDispatch, useSelector } from 'react-redux'

function Contador() {

    const cant = useSelector(state => state.contadorReducer.valor)
    const dispatch = useDispatch();

    return (
        <div>
            <h4>.</h4>
            <h4>Contador redux</h4>
            <button onClick={() => dispatch(agregarCantidadAction(1))}>Agregar</button>
            <button onClick={() => dispatch(quitarCantidadAction(1))}>Quitar</button>
            <div>Cantidad: {cant} </div>
        </div>
    )
}

export default Contador
