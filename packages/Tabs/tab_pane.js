import React from 'react'
import Context from './tab_context';

const TabPane = ({tab, id}) => {
    return (
        <Context.Consumer>
            {({onTabClick, activeKey,getActivePaneRef}) => {
                const getStyle = () => {
                    let style = {
                        onClick: () => onTabClick(id),
                        className: `lwh-tab-pane ${activeKey==id ? 'lwh-tab-active' : ''}`
                    };
                    if(activeKey==id) {
                        style.ref = (ref) => getActivePaneRef(ref)
                    }
                    return style
                }
                return (
                    <div
                        {...getStyle()}
                    >
                        {tab || `tab_${id}`}
                    </div>
                )
            }}
        </Context.Consumer>
    )
}

export default TabPane