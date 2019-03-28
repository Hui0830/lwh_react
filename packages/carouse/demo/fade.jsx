
import React from 'react';
import { Carouse } from 'lwh_react';

 const fadeCarouse = () => {
    return (
        <div className="demoContainer">
            <div>
                <h2>切换效果为渐显：</h2>
                <p>effect设置轮播动画效果，默认为'scroll'滚动轮播；设置为'fade'启用渐显</p>
                <Carouse style={{backgroundColor: '#f17596'}} height={400} effect="fade">
                    <div className="base-item">1</div>
                    <div className="base-item">2</div>
                    <div className="base-item">3</div>
                </Carouse>
            </div>
            <div>
                <h2>取消默认轮播效果：</h2>
                <p>autoplay设置是否自动轮播，默认为true；position：可自定义手动切换的图标位置</p>
                <Carouse
                    style={{backgroundColor: '#f17596'}}
                    autoplay={false}
                    height={400}
                    position="left"
                >
                    <div className="base-item">autoplay1</div>
                    <div className="base-item">autoplay2</div>
                    <div className="base-item">autoplay3</div>
                </Carouse>
            </div>
        </div>
    )
}
export default fadeCarouse

export const fadeCode = {
    title: '这里是代码的展示',
    code: `
    import React from 'react';
    import { Carouse } from 'lwh_react';
    
     const fadeCarouse = () => {
        return (
            <div className="demoContainer">
                <div>
                    <h2>切换效果为渐显：</h2>
                    <p>effect设置轮播动画效果，默认为'scroll'滚动轮播；设置为'fade'启用渐显</p>
                    <Carouse style={{backgroundColor: '#f17596'}} height={400} effect="fade">
                        <div className="base-item">1</div>
                        <div className="base-item">2</div>
                        <div className="base-item">3</div>
                    </Carouse>
                </div>
                <div>
                    <h2>取消默认轮播效果：</h2>
                    <p>autoplay设置是否自动轮播，默认为true；position：可自定义手动切换的图标位置</p>
                    <Carouse
                        style={{backgroundColor: '#f17596'}}
                        autoplay={false}
                        height={400}
                        position="left"
                    >
                        <div className="base-item">autoplay1</div>
                        <div className="base-item">autoplay2</div>
                        <div className="base-item">autoplay3</div>
                    </Carouse>
                </div>
            </div>
        )
    }
    export default fadeCarouse
    `
}