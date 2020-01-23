import * as React from 'react';
import { FunctionComponent, useState, useContext } from 'react';
import { RobotAdminProvider } from "./context";
import { RobotAdminLayout } from './components/Layout';

export const App: FunctionComponent = () => {
    const initialRobotAdminState = {
        apiVersion: '1.0.0'
    };

    return(
        <RobotAdminProvider initialRobotAdminState={initialRobotAdminState}>
            <RobotAdminLayout />
        </RobotAdminProvider>
    )
};

export default App;