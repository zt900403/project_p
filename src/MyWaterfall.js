/**
 * Created by ZT on 2017/6/7.
 */

import React from 'react';
import $ from 'jquery';
import './MyWaterfall.css'


export default class MyWaterfall extends React.Component {
    constructor(props) {
        super(props);
        /*
        this.state = {
            imageStyles: [],
            waterfallContainerW: 0
        };
        */
    }

    /*
    componentWillMount() {
        this._update();
    }
    */

    render() {
        var mystyles = this._update();
        if (this.props.images.length) {
            return (
                <div className="waterfall-container" style={{width: mystyles.waterfallContainerW}}
                    >
                    {this.props.images.map(
                        function (image, i) {
                            let len = mystyles.imageStyles.length;
                            if (i < len) {
                                let style = mystyles.imageStyles[i];
                                return (
                                        <div key={i} className="image-container" style={style}>
                                            <div className="image-viewport" style={{height: style.height - 20}}>
                                                <img src={this.props.images[i].imageUrl}
                                                     alt={this.props.images[i].imageUrl}></img>
                                            </div>
                                        </div>
                                );
                            }
                        }.bind(this)
                    )}
                </div>
            );
        } else {
            return (
                <div></div>
            );
        }

    }

    handleScroll() {
        var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
        console.log('scrollTop = ' + scrollTop);
        console.log('this.requestMoreImgPoint = ' + this.requestMoreImgPoint);
        if (scrollTop > this.requestMoreImgPoint) {
            this.props.handleScroll();
        }
    }

    handleResize(){
        this.setState({});
    }

    componentDidMount() {
        //window.addEventListener('resize', this._update.bind(this));
        //window.addEventListener('resize', this.render.bind(this));
        window.addEventListener('resize', this.handleResize.bind(this));
        window.addEventListener('scroll', this.handleScroll.bind(this));
    }

    componentWillUnmount() {
        //window.removeEventListener('resize', this._update.bind(this));
        //window.removeEventListener('resize', this.render.bind(this));
        window.removeEventListener('resize', this.handleResize.bind(this));
        window.removeEventListener('scroll', this.handleScroll.bind(this));
    }

    getArrayMinIndex(array) {
        return array.indexOf(Math.min.apply(null, array));
    }

    getArrayMinVal(array) {
        return Math.min.apply(null, array);
    }

    _update() {
        var imageStyles = [];
        var imageContainerW = 256;
        var imageContainerH = 848;
        var marginLeft = this.props.marginLeft || 10;
        var marginRight = this.props.marginRight || 10;
        var marginTop = this.props.marginTop || 10;
        var marginBottom = this.props.marginBottom || 10;
        var paddingLeft = this.props.paddingLeft || 10;
        var paddingRight = this.props.paddingRight || 10;
        var paddingTop = this.props.paddingTop || 10;
        var paddingBottom = this.props.paddingBottom || 10;

        var cols = Math.floor($(window).width() / (imageContainerW + marginLeft + marginRight));
        var columnYs = Array(cols).fill(0);

        /*
        this.props.images.map(function (image, index) {
            let col = this.getArrayMinIndex(columnYs);
            var currentX = Math.ceil((marginLeft*2 + marginRight + imageContainerW) * col);
            let containerHeight = Math.ceil(image.height + paddingTop + paddingBottom);
            let realHeight = containerHeight <= imageContainerH ? containerHeight : imageContainerH;
            imageStyles[index] = {
                left: currentX,
                top: columnYs[col],
                height: realHeight,
                marginLeft: marginLeft,
                marginRight: marginRight,
                marginTop: marginTop,
                marginBottom: marginBottom,
                paddingLeft: paddingLeft,
                paddingRight: paddingRight,
                paddingTop: paddingTop,
                paddingBottom: paddingBottom
            };
            columnYs[col] += Math.ceil(realHeight + marginTop + marginBottom*2);

        }.bind(this));
        */

        for (var i = 0, len = this.props.images.length; i < len; ++i) {

            let image = this.props.images[i];
            let col = this.getArrayMinIndex(columnYs);
            var currentX = Math.ceil((marginLeft*2 + marginRight + imageContainerW) * col);

            let containerHeight = Math.ceil(image.height + paddingTop + paddingBottom);
            let realHeight = containerHeight <= imageContainerH ? containerHeight : imageContainerH;
            imageStyles[i] = {
                left: currentX,
                top: columnYs[col],
                height: realHeight,
                marginLeft: marginLeft,
                marginRight: marginRight,
                marginTop: marginTop,
                marginBottom: marginBottom,
                paddingLeft: paddingLeft,
                paddingRight: paddingRight,
                paddingTop: paddingTop,
                paddingBottom: paddingBottom
            };
            columnYs[col] += Math.ceil(realHeight + marginTop + marginBottom*2);

        }

        this.requestMoreImgPoint = this.getArrayMinVal(columnYs) - 400;
        /*
        this.setState({
            imageStyles: imageStyles,
            waterfallContainerW: (imageContainerW + marginLeft + marginRight) * cols
        })
        */
        return {
            imageStyles: imageStyles,
            waterfallContainerW: (imageContainerW + marginLeft + marginRight) * cols
        }
    }

}