/* eslint-disable no-undef */
import React,{ PureComponent } from 'react';
import PropTypes from 'prop-types';

import  './index.scss';

class Carousel extends PureComponent {
    static propTypes = {
        position: PropTypes.string,
        autoplay: PropTypes.bool,
        dots: PropTypes.bool,
        effect: PropTypes.string,
        vertical: PropTypes.bool,
        className: PropTypes.string
    }
    static defaultProps = {
        time: 5000,
        autoplay: true,
        dots: true,
        effect: 'scroll',
        vertical: false,
        className: '',
        height: 500
    }
    constructor() {
        super(...arguments);
        this.timeId = '';
        this.isFade = this.props.effect == 'fade'
    }
    state = {
        tab: 0,
        childCount: React.Children.count(this.props.children)
    }

    componentDidMount() {
        this.autoTab()
    }

    componentWillUnmount() {
        clearInterval(this.timeId);
    }
    // 自动轮播
    autoTab = () => {
        // 设置autoTab为false或子组件为一个时，不需要进行轮播
        if(!this.props.autoplay || this.state.childCount <= 1) return;
        this.timeId = setInterval(() => {
            const  {tab,childCount} = this.state;
            this.setState({
                tab: (tab == childCount-1) ? 0 : (tab+1)
            })
        },this.props.time)
    }
    // 点击tab事件
    onTab = (tab) => {
        // 单击Tab时清除计时，防止时间错乱
        clearInterval(this.timeId);
        this.autoTab();
        this.setState({
            tab: tab
        })
    }
    // 渲染Tab
    renderTab = () => {
        let tabs = [];
        for(let i = 0; i<this.state.childCount; i++) {
            tabs.push(<i key={`lwh-carousel-icon-${i}`} onClick={() => this.onTab(i)} className={this.state.tab == i ? 'lwh-activeTab lwh-tab' : 'lwh-tab'}></i>)
        }
        return tabs
    }
    //getWarpStyle
    getWarpStyle = () => {
        const { childCount,tab } = this.state;
        const { vertical,height } = this.props;
        let style = {height};
        if(this.isFade) {
            style.width = `${childCount*100}%`
        }else if(vertical) {
            style = { ...style, height: childCount*height, transform: `translate3d(0,-${100/childCount*tab}%,0)` }
        } else {
            style = {
                ...style,
                width: `${childCount*100}%`,
                transform: `translate3d(-${100/childCount*tab}%,0,0)`
            }
        }
        return style
    }
    getItemStyle = (index) => {
        const { tab,childCount,height } = this.state;
        let style = this.props.style;
        if(this.isFade) {
            style = {
                ...style,
                opacity: (index == tab) ? 1 : 0,
                visibility: (index == tab) ? 'visible' : 'hidden',
                left: `-${100/childCount*index}%`
            }
        }
        return {height,...style}
    }

    render() {
        const { children, position,vertical,className,height } = this.props;

        return (
            <div className={`lwh-pirate-carouse ${vertical ? 'lwh-carousel-vertical' : ''}`} style={{height}}>
                <div
                    className={`lwh-carousel-warp ${this.isFade ? 'lwh-carousel-fade' : ''}`}
                    style={this.getWarpStyle()}
                >
                {
                     React.Children.map(children, (child, index) => {
                         return (
                             <div
                                 className={`lwh-carousel-item ${className}`}
                                 style={this.getItemStyle(index)}
                                 key={`carousel-${index}`}
                             >
                                 {child}
                             </div>
                         )
                     })
                 }
                </div>
                 <div className={`lwh-carousel-icon lwh-${position ? position : (vertical ? 'right' : 'bottom-right')}`}>
                    {this.renderTab()}
                 </div>
            </div>
        )
    }
}
export default Carousel;