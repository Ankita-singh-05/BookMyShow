import React from "react";

const DefaultLayout = () => {
    return(
        <div>
        <h1 className="text-x1">Default Layout</h1>
        {props.children}
        </div>
    );
};

export default DefaultLayout;

