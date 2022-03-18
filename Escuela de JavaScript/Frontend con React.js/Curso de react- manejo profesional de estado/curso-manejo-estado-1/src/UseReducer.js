import React from 'react';

const SECURITY_CODE = 'paradigma';

const UseReducer = ({ name }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  React.useEffect(() => {

    console.log('Empezando el efecto')

    if (state.loading) {
      setTimeout(() => {
        console.log('haciendo la validacion')

        if (state.value === SECURITY_CODE) {
          dispatch({ type: actionTypes.confirm })
        } else {
          dispatch({ type: actionTypes.error })
        }

        console.log('Terminando la validación');
      }, 3000)
    }

    console.log('Terminando el efecto');
  }, [state.loading]);

  if (!state.deleted && !state.confirmed) {
    return (
      <div>
        <h2> Eliminar {name}</h2>

        <p>Por favor, escribe el código de seguridad</p>

        {(state.error && !state.loading) && (
          <p> Error: es incorrecto </p>
        )}

        {state.loading && (
          <p> Cargando... </p>
        )}

        <input
          placeholder="Código de seguridad"
          value={state.value}
          onChange={(event) => {
            dispatch({ type: actionTypes.write, payload: event.target.value })
          }}
        />

        <button
          onClick={() => {
            dispatch({ type: actionTypes.check })
          }}

        >Comprobar</button>

      </div>
    )

  } else if (state.confirmed && !state.deleted) {
    return (
      <React.Fragment>
        <p>Pedimos confirmación ¿tas seguro?</p>
        <button
          onClick={() => {
            dispatch({ type: actionTypes.delete })
          }}
        >Si, eliminar</button>
        <button
          onClick={() => {
            dispatch({ type: actionTypes.reset })
          }}
        >
          Nop, me arrepentí</button>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <p>Eliminado con exito</p>

        <button
          onClick={() => {
            dispatch({ type: actionTypes.reset })
          }}
        >
          Resetear</button>


      </React.Fragment>
    );
  }

}


const initialState = {
  value: '',
  error: false,
  loading: false,
  delete: false,
  confirmed: false
}

const reducerObject = (state, payload) => ({
  [actionTypes.error]: {
    ...state,
    error: true,
    loading: false
  },
  [actionTypes.check]: {
    ...state,
    loading: true
  },
  [actionTypes.confirm]: {
    ...state,
    error: false,
    loading: false,
    confirmed: true
  },
  [actionTypes.write]: {
    ...state,
    value: payload
  },
  [actionTypes.delete]: {
    ...state,
    deleted: true,
  },
  [actionTypes.reset]: {
    ...state,
    confirmed: false,
    deleted: false,
    value: ''
  },

});

const actionTypes = { 
  confirm: 'CONFIRM',
  error: 'ERROR',
  delete: 'DELETE',
  reset: 'RESET',
  write: 'WRITE',
  check: 'CHECK'

}

const reducer = (state, action) => {
  if (reducerObject(state)[action.type]) {
    return reducerObject(state, action.payload)[action.type]
  } else {
    return state;
  }
}

export { UseReducer };