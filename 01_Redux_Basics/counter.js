// Counter using Basic JavaScript

// Our "reducer" — a function to update state
function counterReducer(state = { count: 0 }, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    default:
      return state;
  }
}

// Initial state
let currentState = { count: 0 };

// "Dispatch" function
function dispatch(action) {
  currentState = counterReducer(currentState, action);
  console.log("New State:", currentState);
}

// Test it
dispatch({ type: "INCREMENT" });
dispatch({ type: "INCREMENT" });
dispatch({ type: "DECREMENT" });
