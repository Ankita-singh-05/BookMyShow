import React from "react";
import { Route } from "react-router-dom";

//Layouts
import DefaultLayout from "../Layouts/Default.layout";

const DefaultHOC = ({component: Component, ...rest}) => {
    return (
        <>
        {/* <DefaultHOC path="/" exact component= {Temp} /> */}
        <Route 
        {...rest}
        component = {(props) => (
            <DefaultLayout>
                <Component {...props} />
            </DefaultLayout>
        )}
        />
        </>
    );
};

export default DefaultHOC;