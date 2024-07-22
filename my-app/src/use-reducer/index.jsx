import { useReducer } from "react";
import './style.css';

const initialState = {count: 0};

const reducer = (state, action) => {
    switch(action.type){
        case 'increment':
            return {count: state.count + 1};
         case 'decrement': 
            return {count: state.count -1};
            
        case 'reset': 
        return initialState;
        default:
            throw new Error('Unknown action: ${action.type}')
    }  

}
 const CounterApp = () =>{
    const [state, dispatch] = useReducer(reducer, initialState)
    return(
        <div className="container">
            <p> Count: {state.count} </p>

            <button onClick={() => dispatch({type: 'increment'})}>Increment</button>

            <button onClick={() => dispatch({type: 'decrement'})}>Decrement</button>
            
            <button onClick={() => dispatch({type: 'reset'})}>Reset</button>
        </div>
    )
}

export default CounterApp;