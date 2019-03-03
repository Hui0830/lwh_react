import React from 'react';

import Block from '../index';
import Md from './index.md';

const Code = () => {
    return <div className="code-container">
        <p className="code-title">这里是代码的展示</p>
        <code>
            {`
            <Block
                meta={<Code />}
                title="组件效果展示"
                discript="block组件用于文档库代码的演示"
            >
                <p>这里是头部主内容，用于展示组件效果</p>
            </Block>
            `}
        </code>
    </div>
}

// eslint-disable-next-line
const BlockDemo = () => (
    <div className="lwh-block">
        {/* 内容书写，以Block模块形式 */}
        <Block
            meta={<Code />}
            title="组件效果展示"
            discript="block组件用于文档库代码的演示"
        >
            <p>这里是头部主内容，用于展示组件效果</p>
        </Block>
        {/* 内容书写，以Block模块形式 */}
        <Md />
    </div>
)
export default BlockDemo
