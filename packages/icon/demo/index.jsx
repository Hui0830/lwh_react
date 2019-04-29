import React from 'react';
import Block from 'packages/block';
import Md from './index.md';
import Code from 'components/code'

import './index.scss'
import Base,{baseCode} from './base';


// eslint-disable-next-line
const IconDemo = () => (
    <div className="icon-demo">
        {/* 内容书写，以Block模块形式 */}
        <Block
            meta={<Code {...baseCode} />}
            title="组件效果展示"
            discript="block组件用于文档库代码的演示"
        >
            <Base />
        </Block>
        {/* 内容书写，以Block模块形式 */}
        <Md />
    </div>
)
export default IconDemo
