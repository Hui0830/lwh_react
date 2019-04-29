import React from 'react';
import Code from 'components/code'
import Block from 'packages/block';
import Md from './index.md';

import './index.scss'
import Base,{baseCode} from './base';
import Fade,{fadeCode} from './fade';


// eslint-disable-next-line
const CarouseDemo = () => (
    <div className="carouse-demo">
        {/* 内容书写，以Block模块形式 */}
        <h1>Carousel走马灯</h1>
        <Block
            meta={<Code {...baseCode} />}
            title="carousel基本用法"
            discript="vertical设置轮播的方向，默认水平，需要垂直设置 vertical:true"
        >
            <Base />
        </Block>
        <Block
            meta={<Code {...fadeCode} />}
            title="组件效果展示"
            discript="effect轮播动画，默认为scroll"
        >
            <Fade />
        </Block>
        {/* 内容书写，以Block模块形式 */}
        <Md />
    </div>
)
export default CarouseDemo
