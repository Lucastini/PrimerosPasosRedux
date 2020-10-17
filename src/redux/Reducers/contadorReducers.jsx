
import { AGREGAR_CANTIDAD, QUITAR_CANTIDAD } from "../Actions/contadorActions";

const defaultCant = {valor: 0};

const contadorReducer = (state = defaultCant, action) => {
    switch(action.type){
        case AGREGAR_CANTIDAD: 
            return {...state, valor: state.valor + action.payload};
        case QUITAR_CANTIDAD: 
            return {...state, valor: state.valor - action.payload};
        default:
            return state;
    }
}


export default contadorReducer;