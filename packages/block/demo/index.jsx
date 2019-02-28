import React from 'react';
import Plan from 'components/plan';

import Block from '../index';
import Md from './index.md';

import style from './index.scss'

console.log(style)

const BlockDemo = () => (
    <div className='lwh-block'>
        <Plan discript={<Md />}>
            <Block meta='sssss'>
                <button>这里是头部主内容</button>
            </Block>
        </Plan>
    </div>
)
export default BlockDemo
