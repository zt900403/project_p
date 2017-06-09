import React, {Component} from 'react';
import './App.css';
import MyNavbar from './MyNavbar';
import MyWaterfall from './MyWaterfall';

class App extends Component {
    constructor(props) {
        super(props);
        var images = [
            {
                image: "https://s-media-cache-ak0.pinimg.com/236x/0f/b9/ac/0fb9acbbfcda88df21a9097072b51a23.jpg"
            },
            {
                image: "https://s-media-cache-ak0.pinimg.com/236x/26/99/ea/2699eaac6d0b3a239f0edf959cbe4b89.jpg",
            },
            {
                image: "https://s-media-cache-ak0.pinimg.com/236x/a3/12/b0/a312b0af3ebacca7a0d1286568f5aae0.jpg",
            },
            {
                image: "https://s-media-cache-ak0.pinimg.com/236x/28/be/ad/28beadaea04e2f615658092df4c9d0af.jpg",
            },
            {
                image: "https://s-media-cache-ak0.pinimg.com/236x/3c/08/d0/3c08d0aed9fe20d61b3e254b9fd6bf6e.jpg",
            },
            {
                image: "https://s-media-cache-ak0.pinimg.com/236x/51/c4/ad/51c4ad092b49aa5020c666ceaebe29b4.jpg",
            },
            {
                image: "https://s-media-cache-ak0.pinimg.com/236x/56/c8/c7/56c8c736c50618cacae2c5f3eea15531.jpg",
            },
            {
                image: "https://s-media-cache-ak0.pinimg.com/236x/20/69/b7/2069b78a8bc0547a1f2e43e45ff9a322.jpg",
            },
            {
                image: "https://s-media-cache-ak0.pinimg.com/236x/ed/7f/8e/ed7f8ee6d2385a0cc000cc97572bccf8.jpg",
            },
            {
                image: "https://s-media-cache-ak0.pinimg.com/236x/b7/c5/d7/b7c5d75369385bf097e83797e5f6cec5.jpg",
            },
            {
                image: "https://s-media-cache-ak0.pinimg.com/236x/68/7b/3b/687b3b4b00670ed7ba1552aca9c73b68.jpg",
            },
            {
                image: "https://s-media-cache-ak0.pinimg.com/236x/df/03/ce/df03ced5a8f327ee251a2b200eadf9e0.jpg",
            },
            {
                image: "https://s-media-cache-ak0.pinimg.com/236x/3e/e4/61/3ee46172cdb8a18242277a757bf8790a.jpg",
            },
        ];
        this.state = {
            images: images,
        }
    }

    requestMoreImage() {

        var images = this.state.images.slice();
        var images = images.concat(images);
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
