import React from 'react';

import Block from 'packages/block';
import Md from './index.md';
import './index.scss'

import Button from '../index';

const Code = () => {
    return <div className="code-container">
        <p className="code-title">这里是代码的展示</p>
        <code>
        {`
        <div>
            按钮类型：
            <Button>default</Button>
            <Button type="primary">primary</Button>
            <Button type="dashed">dashed</Button>
            <Button type="danger">danger</Button>
        </div>
        <div>
            按钮大小：
            <Button size="small">small</Button>
            <Button>default</Button>
            <Button type="large">large</Button>
        </div>
        <div>
            其他：
            <Button type="primary" ghost style={{color: '#e85e83'}}>ghost</Button>
            <Button block type="primary" >block</Button>
        </div>
        `}
        </code>
    </div>
}

// eslint-disable-next-line react/no-multi-comp
const ButtonDemo = () => (
    <div className="button-demo">
        {/* 内容书写，以Block模块形式 */}
        <Block
            discript="按钮有四种类型：主按钮、默认按钮、虚线按钮、危险按钮。"
            meta={<Code />}
            title="使用展示"
        >
            <div>
                按钮类型：
                <Button>default</Button>
                <Button type="primary">primary</Button>
                <Button type="dashed">dashed</Button>
                <Button type="danger">danger</Button>
            </div>
            <div>
                按钮大小：
                <Button size="small">small</Button>
                <Button>default</Button>
                <Button type="large">large</Button>
            </div>
            <div>
                其他：
                <Button type="primary" ghost style={{color: '#e85e83'}}>ghost</Button>
                <Button block type="primary" >block</Button>
            </div>
        </Block>
        {/* 内容书写，以Block模块形式 */}
        <Md />
    </div>
)
export default ButtonDemo
