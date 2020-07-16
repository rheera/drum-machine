import React from 'react';

//TODO make prettier


class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sound: ''
        };
        this.handleEnter = this.handleEnter.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }
    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyPress)
    }
    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyPress)
    }
    handleEnter(keyCode) {
        this.setState({
            sound: this.state.sound + 'You pressed the' + keyCode + 'key! '
        });
    }
    handleKeyPress(event) {
        switch (event.keyCode) {
            case 13:
                this.handleEnter(event.keyCode);
                break;
            case 65:
                this.handleEnter(event.keyCode)
                break;
        }
    }
    render() {
        return (
            <div>
                <h1>Hi</h1>
                <h1>{this.state.sound}</h1>
            </div>
        );
    }
};


export default MyComponent;