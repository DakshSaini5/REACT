import React from 'react'

const ChildCompo = React.memo(
    (props) => {
        console.log("child compo re render again")
        return (
            <div>
                <button onClick={props.handleClick}>
                    {props.buttonName}
                </button>
            </div>
        )

    }
)


export default ChildCompo