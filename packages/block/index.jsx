import React from 'react';
import PropTypes from 'prop-types';

import "./index.scss";

class Block extends React.PureComponent {
    static propTypes = {
        meta: PropTypes.element,
        name: PropTypes.string,
    }
    static defaultProps = {
        meta: <div>meta</div>,
        name: '代码'
    }
    state = {
        show: false
    }
    controlShowHandle = () => {
        this.setState({
            show: !this.state.show
        })
    }
    render() {
        const { children, meta, name } = this.props;
        const { show } = this.state;
        return (
            <div className="lwh-pirate-block">
                <div className="block-source">
                    {children || '未设置组件内容'}
                </div>
                <div className={`block-meta ${show && 'block-show'}`}>
                    {meta}
                </div>
                <div className='block-control' onClick={this.controlShowHandle}>
                    <span>
                        {show ? `隐藏${name}` : `显示${name}`}
                    </span>
                </div>
            </div>
        )
    }
}
export default Block
