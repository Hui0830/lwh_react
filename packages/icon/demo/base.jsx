import React,{ PureComponent } from 'react';
import { Icon } from 'lwh_react';

export default class baseIcon extends PureComponent {

    render() {
        return (
            <div>
                简单基本用法：
                <Icon type="icon_addperson"/>
            </div>
        )
    }
}

export const baseCode = {
    title: '这里是代码的展示',
    code: `
    import React,{ PureComponent } from 'react';
    import { Icon } from 'lwh_react';

    export default class baseIcon extends PureComponent {
        state = {
            visible: false
        }

        render() {
            return (
                <div>
                    简单基本用法：
                    <Icon />
                </div>
            )
        }
    }
    `
}