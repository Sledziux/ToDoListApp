export const addTodo = (project) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        firestore
            .collection('todos')
            .add({
                ...project,
            })
            .then(() => {
                dispatch({ type: 'ADD_TODO', project });
            })
            .catch((err) => {
                // dispatch({ type: 'CREATE_PROJECT_ERROR', err });
            });
    };
};
