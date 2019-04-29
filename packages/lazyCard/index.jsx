import React,{PureComponent} from 'react';
import {Icon} from '../icon';
import PropTypes from 'prop-types';

import lazy from './lazy'
import './index.scss';

class LazyCard extends PureComponent{

    static propsTypes = {
        className: PropTypes.string,
        img: PropTypes.string,
        alt: PropTypes.string,
        mask: PropTypes.bool
    }

    static defaultProps = {
        icon: <Icon type="xingxing" onClick={() => console.log('收藏')} />,
        alt: '懒加载图片',
        mask: true
    }

    constructor(props) {
        super(props);
        this.lazyRef = React.createRef();
    }

    state = {
        show: false
    }

    componentDidMount() {
        // 监听Scroll事件
        // this.lazyLoad();
        let _this = this;
        const lazyScroll = lazy(_this.lazyLoad,800)
        // eslint-disable-next-line no-undef
        window.addEventListener('scroll', lazyScroll);
    }

    componentWillUnmount() {
        document.removeEventListener('scroll',()=>{console.log('remove')})
    }
    lazyLoad = () => {
        if(this.state.show) {
            return
        }
        // 获取可视区域的高度
        const viewHeight = document.innerHeight || document.documentElement.clientHeight;
        // 用可视区域高度减去元素顶部距离可视区域顶部的高度
        let distance = viewHeight - this.lazyRef.current.getBoundingClientRect().top
        // 如果可视区域高度大于等于元素顶部距离可视区域顶部的高度，说明元素露出
        console.log(viewHeight,distance)
        if(distance >= -200 ){
            // 给元素写入真实的src，展示图片
            // eslint-disable-next-line no-undef
            new Promise((resolve) => {
                let img = new Image();
                img.onload = function(){
                    resolve(img)
                }
                img.src = this.props.img;
                img.setAttribute('class','lwh-lazy-image');
                img.setAttribute('alt', this.props.alt)
            }).then((img) => {
                this.setState({
                    show: true
                })
                this.lazyRef.current.appendChild(img)
            }).catch(() => {
                this.setState({
                    show: true
                })
            })
        }
    }

    render() {
        const { img,className, mask,children,icon } = this.props;
        return (
            <div
                ref={this.lazyRef}
                data-src={img}
                className={`lwh-pirate-lazyCard ${className} ${this.state.show ? 'lwh-lazy-show' : 'lwh-lazy-loadding'}`}>
                {
                    mask && <div className="lwh-lazy-mask">
                        <div className="lwh-lazy-top">
                            
                                <span className="lwh-lazy-icon">
                                    {icon}
                                </span>
                            
                        </div>
                        <div className="lwh-lazy-content">
                            {children || '这里是图片描述这里是图片描述这里是图片描述这里是图片描述这里是图片描述这里是图片描述这里是图片描述这里是图片描述这里是图片描述这里是图片描述这里是图片描述这里是图片描述这里是图片描述'}
                        </div>
                    </div>
                }
            </div>
        )
    }
}
export default LazyCard
