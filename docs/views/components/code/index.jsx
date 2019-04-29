import React from 'react'
import './index.scss'

const Code = ({title, code}) => {
    return <div className="code-container">
        {title &&  <p className="code-title">{title}</p>}
        <code>{code}</code>
    </div>
}
export default Code