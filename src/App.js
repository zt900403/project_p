import React, {Component} from 'react';
import './App.css';
import MyNavbar from './MyNavbar';
import MyWaterfall from './MyWaterfall';


class App extends Component {
    constructor(props) {
        super(props);
        var images = require('./imagesInfo.json');
        this.state = {
            images: images,
        }
    }

    requestMoreImage() {
        var images = this.state.images.slice();
        images = images.concat(images);
        console.log('reqeustMoreImgage');
        this.setState({
           images: images,
        });
    }

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <MyNavbar />
                </div>
                <div className="App-body">
                    <MyWaterfall images={this.state.images} handleScroll={() => this.requestMoreImage()} />
                </div>
                <p className="App-intro">
                </p>
            </div>
        );
    }
}

export default App;
