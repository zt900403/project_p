/**
 * Created by ZT on 2017/6/7.
 */

import React from 'react';
import './MyWaterfall.css'
export default class MyWaterfall extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imageStyles: [],
            imageFinishLoad: false
        }
    }

    componentWillMount() {
        this._update();
    }


    render() {
        if (this.state.imageFinishLoad) {
            return (
                <div className="waterfall-container">
                    {this.props.images.map(
                        function (image, i) {
                            let len = this.state.imageStyles.length;
                            if (i < len) {
                                let style = this.state.imageStyles[i];
                                return (
                                    <div key={i} style={{float: 'left'}}>
                                        <div className="image-container" style={style}>
                                            <img className="waterfall-img" src={this.props.images[i].image}
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

    componentDidMount() {
        window.addEventListener('resize', this._update.bind(this));
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this._update.bind(this));
    }

    _update() {
        var imageStyles = [];
        var cols = this.props.columnNum;
        var columnYs = Array(cols).fill(0);
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

        this.props.images.map(function (image, index) {
            let imgtemp = new Image();
            imgtemp.src = image.image;
            imgtemp.onload = function () {
                let col = index % cols;
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
                if (index === this.props.images.length - 1) {
                    this.setState({
                        imageStyles: imageStyles,
                        imageFinishLoad: true
                    });
                }
            }.bind(this);
        }.bind(this));
    }
}