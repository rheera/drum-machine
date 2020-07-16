import React from 'react';

/* ASCII Codes
Q, W, E, A, S, D, Z, X, C
81, 87, 69, 65, 83, 68, 90, 88, 67
 */

// TODO make 9 buttons on the left columns and rows like in jQuery lessons
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
            sound: this.state.sound + 'You pressed the ' + keyCode + ' key! '
        });
    }
    handleKeyPress(event) {
        switch (event.keyCode) {
            // Q
            case 81:
                this.handleEnter(event.keyCode);
                break;
            // W
            case 87:
                this.handleEnter(event.keyCode)
                break;
            // E
            case 69:
                this.handleEnter(event.keyCode);
                break;
            // A
            case 65:
                this.handleEnter(event.keyCode)
                break;
            // S
            case 83:
                this.handleEnter(event.keyCode);
                break;
            // D
            case 68:
                this.handleEnter(event.keyCode)
                break;
            // Z
            case 90:
                this.handleEnter(event.keyCode);
                break;
            // X
            case 88:
                this.handleEnter(event.keyCode)
                break;
            // C
            case 67:
                this.handleEnter(event.keyCode);
                break;
            default:
                this.handleEnter("bad")
                break;
        }
    }
    render() {
        return (
            <div className={"container-fluid"}>
                <div>
                    <div className={"drum-div row"}>
                        <div className={"sound-buttons border"}>

                        </div>
                        <div className={"sound-info border"}>
                            <h1>Hi</h1>
                            <h1>{this.state.sound}</h1>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};


export default MyComponent;