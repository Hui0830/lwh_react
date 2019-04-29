import React,{ PureComponent } from 'react';
import { Tabs,Button } from 'lwh_react';

export default class baseTabs extends PureComponent {
    state = {
        size: 'default'
    }

    onChangeSize(value) {
        this.setState({
            size: value
        })
    }

    render() {
        const { size } = this.state;
        return (
            <div>
                <div style={{marginBottom: 20}}>
                    <Button type={size=='small' && 'primary'} onClick={() => this.onChangeSize('small')}>small</Button>
                    <Button type={size=='default' && 'primary'} onClick={() => this.onChangeSize('default')}>default</Button>
                    <Button type={size=='large' && 'primary'} onClick={() => this.onChangeSize('large')}>large</Button>
                </div>
                <Tabs size={size}>
                    <Tabs.TabPane id="1">
                        <div className="demo-tab-content">
                            tab 1
                        </div>
                    </Tabs.TabPane>
                    <Tabs.TabPane id="2">
                        <div className="demo-tab-content">
                            tab 2
                        </div>
                    </Tabs.TabPane>
                    <Tabs.TabPane id="3" >
                        <div className="demo-tab-content">
                            tab 3
                        </div>
                    </Tabs.TabPane>
                    <Tabs.TabPane id="4">
                        <div className="demo-tab-content">
                            tab 3
                        </div>
                    </Tabs.TabPane>
                </Tabs>
            </div>
        )
    }
}

export const baseCode = {
    title: 'tab的简单用法，给Tab设置size可控制大小；给Tab.TabPane设置id,需要唯一',
    code: `
    import React,{ PureComponent } from 'react';
    import { Tabs,Button } from 'lwh_react';

    export default class baseTabs extends PureComponent {
        state = {
            size: 'default'
        }

        onChangeSize(value) {
            this.setState({
                size: value
            })
        }

        render() {
            const { size } = this.state;
            return (
                <div>
                    <div style={{marginBottom: 20}}>
                        <Button type={size=='small' && 'primary'} onClick={() => this.onChangeSize('small')}>small</Button>
                        <Button type={size=='default' && 'primary'} onClick={() => this.onChangeSize('default')}>default</Button>
                        <Button type={size=='large' && 'primary'} onClick={() => this.onChangeSize('large')}>large</Button>
                    </div>
                    <Tabs size={size}>
                        <Tabs.TabPane id="1">
                            <div className="demo-tab-content">
                                tab 1
                            </div>
                        </Tabs.TabPane>
                        <Tabs.TabPane id="2">
                            <div className="demo-tab-content">
                                tab 2
                            </div>
                        </Tabs.TabPane>
                        <Tabs.TabPane id="3" >
                            <div className="demo-tab-content">
                                tab 3
                            </div>
                        </Tabs.TabPane>
                        <Tabs.TabPane id="4">
                            <div className="demo-tab-content">
                                tab 3
                            </div>
                        </Tabs.TabPane>
                    </Tabs>
                </div>
            )
        }
    }
    `
}