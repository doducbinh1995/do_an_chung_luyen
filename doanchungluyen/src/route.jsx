import React from 'react';
import { Route } from "react-router-dom";
/**
 * @param {{
 * path:string,
 * LayoutComponent:any,
 * ChilComponent:any,
 * }} [props]
*/
function RouteCustom(props) {
    const LayoutComponent = props.LayoutComponent;
    const ChilComponent = props.ChilComponent;
    return <Route path={props.path} exact>
        <LayoutComponent>
            <ChilComponent {...props} />
        </LayoutComponent>
    </Route>
}

export default RouteCustom