import React from "react";
import { Route } from "react-router-dom/cjs/react-router-dom.min";

//import
import DefaultLayout from "../layouts/Default.layouts";

const DefaultHOC = ({component, ...rest}) => {
    const Element = element;

    return (
        <>
        <Route 
        {...rest}  //triple dots is used to spreading an operator
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