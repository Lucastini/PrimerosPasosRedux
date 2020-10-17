export const AGREGAR_CANTIDAD = 'AGREGAR_CANTIDAD';
export const QUITAR_CANTIDAD = 'QUITAR_CANTIDAD';

export const agregarCantidadAction = (cant) => {
    return {
        type: AGREGAR_CANTIDAD,
        payload: cant
    }
}

export const quitarCantidadAction = (cant) => {
    return {
        type: QUITAR_CANTIDAD,
        payload: cant
    }
}