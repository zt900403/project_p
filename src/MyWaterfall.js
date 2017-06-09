/**
 * Created by ZT on 2017/6/7.
 */

import React from 'react';
import $ from 'jquery';
import './MyWaterfall.css'


export default class MyWaterfall extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            waterfallContainerW: 0,
            imageStyles: [],
            imageFinishLoad: false
        };
        this.lastBoxHeight = 0;
    }

    componentWillMount() {
        this._update();
    }


    render() {
        if (this.state.imageFinishLoad) {
            return (
                <div className="waterfall-container" style={{width: this.state.waterfallContainerW}}
                    ref={waterContainer => this.waterContainer = waterContainer}>
                    {this.props.images.map(
                        function (image, i) {
                            let len = this.props.images.length;
                            if (i < len) {
                                let style = this.state.imageStyles[i];
                                return (
                                        <div key={i} className="image-container" style={style}>
                                            <div className="image-viewport" style={{height: style.height - 20}}>
                                                <img src={this.props.images[i].image}
                                                     alt={this.props.images[i].image}></img>
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
        console.log(scrollTop);
    }

    componentDidMount() {
        window.addEventListener('resize', this._update.bind(this));
        window.addEventListener('scroll', this.handleScroll.bind(this));
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this._update.bind(this));
        window.removeEventListener('scroll', this.handleScroll.bind(this));
    }

    getArraryMinIndex(array) {
        return array.indexOf(Math.min.apply(null, array));
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
        var cols = Math.floor($(window).width() / (imageContainerW + marginLeft + marginRight))
        var columnYs = Array(cols).fill(0);

        var renderedIndex = -1;
        this.props.images.map(function (image, index) {
            let imgtemp = new Image();
            imgtemp.src = image.image;
            imgtemp.onload = function () {
                let col = this.getArraryMinIndex(columnYs);
                var currentX = Math.ceil((marginLeft*2 + marginRight + imageContainerW) * col);
                let containerHeight = Math.ceil(imgtemp.height + paddingTop + paddingBottom);
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
                ++renderedIndex;
                if (renderedIndex === this.props.images.length - 1) {
                    this.lastBoxHeight = Math.floor((columnYs[col] - (realHeight + marginTop + marginBottom*2)/ 2));
                    this.setState({
                        imageStyles: imageStyles,
                        imageFinishLoad: true,
                        waterfallContainerW: (imageContainerW + marginLeft + marginRight) * cols,
                    });
                }
            }.bind(this);
        }.bind(this));
    }
}