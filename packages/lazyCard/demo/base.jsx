import React,{ PureComponent } from 'react';
import { LazyCard } from 'lwh_react';

export default class baseLazyCard extends PureComponent {
    state = {
        visible: false,
        data: [
            {
                className: 'classname',
                img: 'https://s11.mogucdn.com/mlcdn/c45406/190422_25i94c3ege5b0h509h62hlgiclbk8_1080x1440.jpg_600x800.v1cAC.webp',
                alt: 'PropTypes.string',
                mask: true
            },
            {
                className: 'classname',
                img: 'https://s11.mogucdn.com/mlcdn/c45406/190429_10gfkleb89eckj42l43ead37h0f5g_1080x1468.jpg_600x800.v1cAC.webp',
                alt: 'PropTypes.string',
                mask: true
            },
            {
                className: 'classname',
                img: 'https://s3.mogucdn.com/mlcdn/c45406/190428_3g4kh8lb9920aehec6j62bid4dek0_1080x1440.jpg_600x800.v1cAC.webp',
                alt: 'PropTypes.string',
                mask: true
            },
            {
                className: 'classname',
                img: 'https://s3.mogucdn.com/mlcdn/c45406/190429_2ha2eb4j9jhbcb245ll7aee8gcj2f_720x1280.jpg_600x800.v1cAC.webp',
                alt: 'PropTypes.string',
                mask: true
            },
            {
                className: 'classname',
                img: 'https://s11.mogucdn.com/mlcdn/c45406/190429_229kg45fej7ahl7d0b6k1105c2h15_540x960.jpg_600x800.v1cAC.webp',
                alt: 'PropTypes.string',
                mask: true
            },
            {
                className: 'classname',
                img: 'https://s11.mogucdn.com/mlcdn/c45406/190428_11jeha169f6fi4kdgljlbb7d3ligf_720x1280.jpg_600x800.v1cAC.webp',
                alt: 'PropTypes.string',
                mask: true
            },
            {
                className: 'classname',
                img: 'https://s11.mogucdn.com/mlcdn/c45406/190429_75lkkh6h1edb53b1ah8ib6227b150_1080x1462.jpg_600x800.v1cAC.webp',
                alt: 'PropTypes.string',
                mask: true
            },
            {
                className: 'classname',
                img: 'https://s3.mogucdn.com/mlcdn/c45406/190429_1l3f9e0j052d2hd060e94f7i94j7h_1080x1620.jpg_600x800.v1cAC.webp',
                alt: 'PropTypes.string',
                mask: true
            },
            {
                className: 'classname',
                img: 'https://s5.mogucdn.com/mlcdn/c45406/190429_3cb94i320j7ja6514cffbk93hj7d4_1080x1440.jpg_600x800.v1cAC.webp',
                alt: 'PropTypes.string',
                mask: true
            },
            {
                className: 'classname',
                img: 'https://s11.mogucdn.com/mlcdn/c45406/190428_5fc4j333ecdf26g56ba7gaih4a572_1080x1920.jpg_600x800.v1cAC.webp',
                alt: 'PropTypes.string',
                mask: true
            }
        ]
    }

    render() {
        return (
            <div>
                <h3>简单基本用法：</h3>
                <div className="lazyCard-base-demo">
                {
                    this.state.data.map((item,index) => {
                        return <LazyCard key={index} {...item} />
                    })
                }
                </div>
            </div>
        )
    }
}

export const baseCode = {
    title: '这里是代码的展示',
    code: `
    import React,{ PureComponent } from 'react';
    import { LazyCard } from 'lwh_react';

    export default class baseLazyCard extends PureComponent {
        state = {
            visible: false
        }

        render() {
            return (
                <div>
                    简单基本用法：
                    <LazyCard />
                </div>
            )
        }
    }
    `
}