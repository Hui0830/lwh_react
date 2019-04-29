import React from 'react';
import './index.scss';

const Spin = ({children,size,spinning,tip,style}) => {
    return (
        <div className={`lwh-pirate-spin ${children ? '' : 'lwh-spin-inline' }`} style={style}>
            {
                spinning &&
                <div className="lwh-spin">
                    <span className={`lwh-spin-dot ${size ? `lwh-spin-${size}` : ''}`}>
                        <i></i>
                        <i></i>
                        <i></i>
                        <i></i>
                    </span>
                    {tip && <div className="lwh-spin-text">{tip}</div>}
                </div>
            }
            {
                children &&
                <div className={`lwh-spin-content ${spinning ? 'lwh-spin-blur' : ''}`}>
                    {children}
                </div>
            }
        </div>
    )
}
export default Spin
