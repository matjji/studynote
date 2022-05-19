import React from "react";

function reducer(state, action) {
    return {
        ...state,
        [action.name]: action.value
    };
}

export default function useInput(initialForm) {
    const [state, dispatch] = React.useReducer(reducer, initialForm);
    const onCahnge = e => {
        dispatch(e.target);
    }
    return [state, onCahnge];
}