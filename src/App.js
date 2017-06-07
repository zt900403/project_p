import React, {Component} from 'react';
import './App.css';
import MyNavbar from './MyNavbar';
import MyWaterFall from './MyWaterFall';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <MyNavbar />
                </div>
                <div>
                    <MyWaterFall />
                </div>
                <p className="App-intro">
                </p>
            </div>
        );
    }
}

export default App;
