import React from "react";
import { Route } from "react-router-dom/cjs/react-router-dom.min";

//import
import DefaultLayout from "../Layouts/Default.layout";

const DefaultHOC = ({component, ...rest}) => {
    const Element = element;

    return (
        <>
        <Route 
        {...rest}
        element = {(props) => (
            <DefaultLayout>
                <Element {...props} />
            </DefaultLayout>
        )}
        />
        </>
    );
};

export default DefaultHOC;