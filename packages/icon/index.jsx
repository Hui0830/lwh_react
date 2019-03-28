import React from 'react';
import '../../iconfont.js';
import './index.scss';

const Icon = ({type,style,component}) => {
    return (
        <span className="lwh-pirate-icon" style={style}>
            {
                component ? component :
                <svg className="icon" aria-hidden="true">
                    <use xlinkHref={`#${type}`}></use>
                </svg>
            }
        </span>
    )
}
export default Icon
