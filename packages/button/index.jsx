import React from 'react';
import './index.scss';

const Button = ({disabled,type,htmlType,size,onClick,block,ghost,children,style }) => {
    let className = `lwh-pirate-btn ${block ? 'lwh-btn-block' : ''} ${ghost ? 'lwh-btn-ghost' : ''}`;
    type && (className += ` lwh-btn-${type}`);
    size && (className += ` lwh-btn-${size}`);
    return (
        <button
            className={className}
            disabled={disabled}
            onClick={onClick}
            style={style}
            type={htmlType}
        >
            {children}
        </button>
    )
}
export default Button
