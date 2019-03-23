import React,{ PureComponent } from 'react';
import { lwh_upperName } from 'lwh_react';

export default class baseModal extends PureComponent {
    state = {
        visible: false
    }

    render() {
        return (
            <div>
                简单基本用法：
                <lwh_upperName />
            </div>
        )
    }
}

export const baseCode = {
    title: '这里是代码的展示',
    code: `
    import React,{ PureComponent } from 'react';
    import { lwh_upperName } from 'lwh_react';

    export default class baseModal extends PureComponent {
        state = {
            visible: false
        }

        render() {
            return (
                <div>
                    简单基本用法：
                    <lwh_upperName />
                </div>
            )
        }
    }
    `
}