import React,{ PureComponent } from 'react';
import PropTypes from 'prop-types';

import Context from './tab_context';
import TabPane from './tab_pane';

import './index.scss';

class Tabs extends PureComponent{
    static defaultProps  = {
        size: 'default',
        tabPosition: 'top'
    }
    static propTypes = {
        children: PropTypes.arrayOf(TabPane),
        onChange: PropTypes.func,
        onTabClick: PropTypes.func,
        tabPosition: PropTypes.string,
        size: PropTypes.string
    }
    constructor(props) {
        super(props)
        this.childrenCount = React.Children.count(this.props.children),
        this.activeKeyMap={},
        this.defaultActiveKey = this.props.defaultActiveKey,
        Array.prototype.slice.apply(this.props.children).forEach((item,index) => {
            const { id } = item.props;
            if(index == 0 && !this.defaultActiveKey) {
                this.defaultActiveKey = id;
            }
            this.activeKeyMap[id] = index;
        })
        this.state = {
            activeKey: this.defaultActiveKey,
            activePaneRef: null,
            barWidth: 0,
            barOffsetLeft: 0,
            barOffsetTop: 0,
            barHeight: 0
        }
    }

    onTabClick = (key) => {
        const { onChange,onTabClick } = this.props;
        this.setState({
            activeKey: key
        });
        onTabClick && onTabClick(key);
        onChange && (this.state.activeKey !== key) && onChange(this.state.activeKey,key)
    }
    getActivePaneRef = (ref) => {
        if(ref) {
            this.setState({
                barOffsetLeft: ref.offsetLeft,
                barWidth: ref.offsetWidth,
                barOffsetTop: ref.offsetTop,
                barHeight: ref.offsetHeight
            })
        }

    }
    // 获取ContentWarpStyle
    getContentWarpStyle = () => {
        const { tabPosition } = this.props;
        const { activeKey } = this.state;
        if(['left','right'].includes(tabPosition)) {
            return {
                display: 'block'
            }
        }
        return {
            width: `${this.childrenCount * 100}%`,
            transform: `translate3d(-${100/this.childrenCount*this.activeKeyMap[activeKey]}%,0,0)`
        }
    }
    // 获取pane-bar的样式
    getPaneBarStyle = () => {
        const { tabPosition } = this.props;
        const { barOffsetLeft,barWidth,barHeight,barOffsetTop } = this.state;
        if(['left','right'].includes(tabPosition)) {
            return {
                height: barHeight,
                transform: `translate3d(0px,${barOffsetTop}px, 0px)`
            }
        }
        return {
            width: barWidth,
            transform: `translate3d(${barOffsetLeft}px, 0px, 0px)`
        }
    }

    renderTabContent = () => {
        const {children,tabPosition} = this.props;
        const getStyle = (id) => {
            if(['left','right'].includes(tabPosition)) {
                return {
                    display: (this.state.activeKey == id) ? 'block' : 'none'
                }
            }
            return null
        }
        return children.map((item) => {
            const { id,children } = item.props;
            return (
                <div key={id}
                    className="lwh-tab-content"
                    style={getStyle(id)}
                >
                    {children}
                </div>
            )
        }
        )
    }
    render() {
        const { activeKey} = this.state;
        const { children,size,tabPosition } = this.props;
        return (
            <div className={`lwh-pirate-Tabs ${tabPosition == 'bottom' ? 'lwh-tabs-reverse' : ''}`}>
                <Context.Provider
                    value={{
                        onTabClick: this.onTabClick,
                        getActivePaneRef: this.getActivePaneRef,
                        activeKey
                    }}
                >
                    <div key="top" className={`lwh-tab-pane-warp lwh-tab-pane-${tabPosition}`}>
                        <div className={`lwh-tab-pane-container lwh-tab-pane-${size}`}>
                            {children}
                        </div>
                        <div
                            className="lwh-tab-bar"
                            style={this.getPaneBarStyle()}
                        />
                    </div>
                    <div
                        className="lwh-tab-content-warp"
                        style={this.getContentWarpStyle()}
                    >
                        {this.renderTabContent()}
                    </div>
                </Context.Provider>
            </div>
        )
    }

}
Tabs.TabPane = TabPane
export default Tabs
