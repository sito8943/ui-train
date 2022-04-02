import * as React from "react";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

const SeenContext = React.createContext();

const seenReducer = (seenState, action) => {
  switch (action.type) {
    case "set":
      return {
        seen: action.to,
      };
    case "toggle":
      return {
        seen: !seenState.seen,
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

const SeenProvider = ({ children }) => {
  const [seenState, setSeenState] = React.useReducer(seenReducer, {
    seen: false,
  });

  const value = { seenState, setSeenState };
  return <SeenContext.Provider value={value}>{children}</SeenContext.Provider>;
};

SeenProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

// hooks
const useSeen = () => {
  const context = React.useContext(SeenContext);
  if (context === undefined)
    throw new Error("seenContext must be used within a Provider");
  return context;
};

export { SeenProvider, useSeen };
