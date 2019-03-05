import React from 'react';
import PropTypes from 'prop-types';

import './index.scss';

class Block extends React.PureComponent {
    static propTypes = {
        meta: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.element,
            PropTypes.node
          ]),
        name: PropTypes.string,
        title: PropTypes.string,
        discript: PropTypes.string,
        className: PropTypes.string
    }
    static defaultProps = {
        meta: <div>meta</div>,
        name: '代码'
    }
    constructor(props) {
        super(props)
        this.meta = React.createRef();
    }
    state = {
        show: false,
        metaHeight: 0
    }
    controlShowHandle = () => {
        this.setState({
            show: !this.state.show,
            metaHeight: this.meta.current.offsetHeight
        })
    }
    render() {
        const { children, meta, name,className,title,discript } = this.props;
        const { show,metaHeight } = this.state;
        return (
            <div className={`lwh-pirate-block ${className}`}>
                {title && <h3>{title}</h3>}
                {discript && <p>{discript}</p>}
                <div className={`lwh-pirate-block-container ${className}`}>
                    <div className="lwh-block-source" ref={this.child}>
                        {children || '未设置组件内容'}
                    </div>
                    <div className={'lwh-block-meta'} style={{height: (show ? metaHeight : 0)}}>
                        <div ref={this.meta}>{meta}</div>
                    </div>
                    <div className={`lwh-block-control ${show ? 'lwh-block-close' : ''}`} onClick={this.controlShowHandle}>
                        <span>
                            {show ? `隐藏${name}` : `显示${name}`}
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}
export default Block
