import React, { Children } from 'react'

const Box = (props) => {

    const title = props.title;

    return (
        <div className="border border-danger mb-3 p-3">
            <h1 className="p-2 bg-danger text-white text-center text-capitalize">{title}</h1>
            {/* herda todos os parágrafos */}
            {props.children}
        </div>
    )
}

export default Box