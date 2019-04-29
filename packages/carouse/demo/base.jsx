import React from 'react';
import { Carouse } from 'lwh_react';

 const baseCarousel = () => {
    return (
        <div className="demoContainer">
            <div>
                <h2>简单基本用法：</h2>
                <Carouse style={{backgroundColor: '#f17596'}} height={400} position="bottom-center">
                    <div className="base-item">1</div>
                    <div className="base-item">2</div>
                    <div className="base-item">3</div>
                </Carouse>
            </div>
            <div>
                <h2>垂直显示用法：</h2>
                <Carouse
                    style={{backgroundColor: '#f17596'}}
                    vertical
                    height={400}
                    position="right"
                >
                    <div className="base-item">vertical1</div>
                    <div className="base-item">vertical2</div>
                    <div className="base-item">vertical3</div>
                </Carouse>
            </div>
        </div>
    )
}
export default baseCarousel
export const baseCode = {
    title: '接受Props：height高度，默认500px;vertical是否垂直显示，默认为false;positon:dots的显示位置',
    code: `
    import React from 'react';
    import { Carouse } from 'lwh_react';

    const baseCarousel = () => {
        return (
            <div className="demoContainer">
                <div>
                    <h2>简单基本用法：</h2>
                    <Carouse style={{backgroundColor: '#f17596'}} height={400} position="bottom-center">
                        <div className="base-item">1</div>
                        <div className="base-item">2</div>
                        <div className="base-item">3</div>
                    </Carouse>
                </div>
                <div>
                    <h2>垂直显示用法：</h2>
                    <Carouse
                        style={{backgroundColor: '#f17596'}}
                        vertical
                        height={400}
                        position="right"
                    >
                        <div className="base-item">vertical1</div>
                        <div className="base-item">vertical2</div>
                        <div className="base-item">vertical3</div>
                    </Carouse>
                </div>
            </div>
        )
    }
    export default baseCarousel
    `
}