export default function({getState,dispatch}) {
    return (next) => (action) => {
        console.log('pre state', getState());
        next(action);
        console.log('after dispatch', getState());
    }
}
