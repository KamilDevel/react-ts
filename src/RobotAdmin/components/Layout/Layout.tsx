import * as React from 'react';
import { FunctionComponent, useContext } from 'react';
import { RobotAdminContext } from '../../context';

export const Layout: FunctionComponent = () => {
    const robotAdminContext = useContext(RobotAdminContext);
    console.warn(robotAdminContext);

    return(
        <>
            RobotAdmin Layout!
        </>
    )
};