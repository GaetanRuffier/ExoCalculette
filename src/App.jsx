import './App.css'
import Buttons from "./component/Buttons.jsx";
import Display from './component/Display.jsx';
import {useReducer} from "react";

const initialState = {
  currentValue: "0", // Valeur affichée actuellement
  operator: null,    // Opérateur courant
  operand: null,     // Première valeur avant l'opérateur
  resetNext: false   // Indique si la prochaine saisie doit remplacer la valeur actuelle
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_DIGIT":
      if (state.resetNext) {
        return {
          ...state,
          currentValue: action.payload,
          resetNext: false,
        };
      }
      return {
        ...state,
        currentValue: state.currentValue === "0" ? action.payload : state.currentValue + action.payload,
      };

    case "SET_OPERATOR":
      return {
        ...state,
        operator: action.payload,
        operand: parseFloat(state.currentValue),
        resetNext: true,
      };

    case "CALCULATE":
      if (state.operator && state.operand !== null) {
        const result = eval(`${state.operand} ${state.operator} ${state.currentValue}`);
        return {
          ...state,
          currentValue: String(result),
          operator: null,
          operand: null,
          resetNext: true,
        };
      }
      return state;

    case "RESET":
      return initialState;

    default:
      return state;
  }
};

function App() {
 
 const [state, dispatch] = useReducer(reducer, initialState);
 
 return (
  <>
   <Display value={state.currentValue} />
   <Buttons dispatch={dispatch} />
  </>
 )
}

export default App