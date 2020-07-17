import React from 'react';

/* ASCII Codes
Q, W, E, A, S, D, Z, X, C
81, 87, 69, 65, 83, 68, 90, 88, 67
 */

const keyCodes = [81, 87, 69, 65, 83, 68, 90, 88, 67];
const keyLettersQWE = ['Q', 'W', 'E'];
const keyLettersASD = ['A', 'S', 'D'];
const keyLettersZXC = ['Z', 'X', 'C'];
const DEFAULT = "Press a key";
// TODO make 9 buttons on the left columns and rows like in jQuery lessons
class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sound: '',
            input: DEFAULT
        };
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }
    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyPress)
    }
    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyPress)
    }

    handleKeyPress(event) {
        if (keyCodes.includes(event.keyCode)){
            this.setState({
                sound: '',
                input: event.keyCode
            });
        }
    }

    playSound(key) {

    }
    render() {
        return (
            <div className={"container-fluid"}>
                <div className={"d-flex justify-content-md-center align-items-center vh-100"}>
                    <div className={"drum-div row"}>
                        <div className={"sound-buttons border"}>
                            <div id={"qwe"} className={"d-flex justify-content-around"}>
                                {keyLettersQWE.map(letter => (
                                    <button className={"btn btn-default"} id={letter + '-btn'} onClick={() =>
                                        this.setState({sound:'', input:letter.charCodeAt(0)})}>{letter}</button>
                                ))}
                            </div>
                            <div id={"asd"} className={"d-flex justify-content-around"}>
                                {keyLettersASD.map(letter => (
                                    <button className={"btn btn-default"} id={letter + '-btn'} onClick={() =>
                                        this.setState({sound:'', input:letter.charCodeAt(0)})}>{letter}</button>
                                ))}
                            </div>
                            <div id={"zxc"} className={"d-flex justify-content-around"}>
                                {keyLettersZXC.map(letter => (
                                    <button className={"btn btn-default"} id={letter + '-btn'} onClick={() =>
                                        this.setState({sound:'', input:letter.charCodeAt(0)})}>{letter}</button>
                                ))}
                            </div>
                        </div>
                        <div className={"sound-info border"}>
                            <h1>Hi</h1>
                            <h1>{this.state.input}</h1>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};


export default MyComponent;