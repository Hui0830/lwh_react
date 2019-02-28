import React from 'react'

const Plan = ({discript, children}) => {
    return (
        <div>
            { children }
            <div>
                {discript}
            </div>
        </div>
    )
}
export default Plan