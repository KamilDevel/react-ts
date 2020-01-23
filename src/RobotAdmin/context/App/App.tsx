import * as React from "react";
import * as PropTypes from "prop-types";
import { createContext, useState } from "react";

export const Context = createContext({});

export const Provider = (props) => {
    const [robotAdminState, setRobotAdminState] = useState(props.initialRobotAdminState);

    const robotAdminContext = {
        robotAdminState,
        setRobotAdminState
    };

    return <Context.Provider value={robotAdminContext}>{props.children}</Context.Provider>;
}

Provider.propTypes = {
    initialRobotAdminState: PropTypes.object,
    children: PropTypes.any
};

export const { Consumer } = Context;