import React from "react";

export const Filter = ({value, onChange}) => {
    return (
        <>
            <h4>Find contacts by name</h4>
            <input type="text" value={value} onChange={onChange} />
        </>
    )
}