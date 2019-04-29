import React from 'react';

import Code from 'components/code'
import Block from 'packages/block';
import Md from './index.md';

import './index.scss'
import Base,{baseCode} from './base';
import Position,{positionCode} from './position';
import OtherTabs,{otherTabsCode} from './other'


// eslint-disable-next-line
const TabsDemo = () => (
    <div className="Tabs-demo">
        <h1>Tabs选项卡切换组件</h1>
        {/* 内容书写，以Block模块形式 */}
        <Block
            meta={<Code {...baseCode} />}
            title="组件基础使用效果展示"
            discript="通过size属性可以控制tab的大小"
        >
            <Base />
        </Block>
        <Block
            meta={<Code {...positionCode} />}
            title="自定义TabBar的位置，默认为top"
            discript="tabPosition=’left|right|top|bottom‘。"
        >
            <Position />
        </Block>
        <Block
            meta={<Code {...otherTabsCode} />}
            title="自定义tab内容和事件监听"
            discript="可自行定义tab的内容，默认为tab-id。可设置onChange事件在tab改变时触发，onTabClick在单击tab时触发"
        >
            <OtherTabs />
        </Block>
        {/* 内容书写，以Block模块形式 */}
        <Md />
    </div>
)
export default TabsDemo
