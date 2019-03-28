import React,{ PureComponent } from 'react';
import { Tabs } from 'lwh_react';

export default class baseTabs extends PureComponent {
    state = {
        visible: false
    }

    render() {
        return (
            <div>
                简单基本用法：
                <Tabs />
            </div>
        )
    }
}

export const baseCode = {
    title: '这里是代码的展示',
    code: `
    import React,{ PureComponent } from 'react';
    import { Tabs } from 'lwh_react';

    export default class baseTabs extends PureComponent {
        state = {
            visible: false
        }

        render() {
            return (
                <div>
                    简单基本用法：
                    <Tabs />
                </div>
            )
        }
    }
    `
}