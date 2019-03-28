import React from 'react';
import Block from 'packages/block';
import Md from './index.md';

import './index.scss'
import Base,{baseCode} from './base';

const Code = ({title, code}) => {
    return <div className="code-container">
        {title &&  <p className="code-title">{title}</p>}
        <code>{code}</code>
    </div>
}

// eslint-disable-next-line
const TabsDemo = () => (
    <div className="Tabs-demo">
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
export default TabsDemo
