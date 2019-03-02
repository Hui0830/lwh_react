import React from 'react';
import Block from 'packages/block';
import Md from './index.md';

import './index.scss'
import lwh_upperName from '../index';

const Code = () => {
    return <div className='code-container'>
        <p className="code-title">这里是代码的展示</p>
        <code>
        {`
        <div>
            这里是头部主内容，用于展示组件效果
            <lwh_upperName />
        </div>
        `}
        </code>
    </div>
}

const lwh_upperNameDemo = () => (
    <div className='lwh_name-demo'>
        {/* 内容书写，以Block模块形式 */}
        <Block
            meta={<Code />}
            title='组件效果展示'
            discript='block组件用于文档库代码的演示'
        >
            <div>
                这里是头部主内容，用于展示组件效果
                <lwh_upperName />
            </div>
        </Block>
        {/* 内容书写，以Block模块形式 */}
        <Md />
    </div>
)
export default lwh_upperNameDemo
