import React from 'react';

/* ASCII Codes
Q, W, E, A, S, D, Z, X, C
81, 87, 69, 65, 83, 68, 90, 88, 67
 */

const keyCodes = [81, 87, 69, 65, 83, 68, 90, 88, 67];
const keyLettersQWE = ['Q', 'W', 'E'];
const keyLettersASD = ['A', 'S', 'D'];
const keyLettersZXC = ['Z', 'X', 'C'];

const soundLibrary1 = ['https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
    'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
    'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
    'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
    'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
    'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
    'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
    'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
    'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
];

const DEFAULT = "Press a key";
// TODO QWE seems to be working so redo that for the other letters
//  also set a key for the .map
class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sound: false,
            input: DEFAULT
        };
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyPress);
    }
    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyPress)
    }


    handleKeyPress(event) {
        if (keyCodes.includes(event.keyCode)){
            this.setState({
                sound: true,
                input: event.keyCode
            });
            document.getElementById(String.fromCharCode(event.keyCode) +"-sound").play();
        }
    }


    togglePlay = () => {
        this.setState(
            { sound: !this.state.sound },
            () => {
            this.state.sound ? this.audio.play() : this.audio.pause();
        });
    }

    handleClick({currentTarget}) {
        this.setState({
            sound: true,
            input: currentTarget.id.charCodeAt(0)
        });
        document.getElementById(currentTarget.id[0] +"-sound").play();
    }

    createButtons = () => {
        let buttons = [];
        for (let i = 0; i < 3; i++){

        }
    }

    render() {
        return (
            <div className={"container-fluid"}>
                <div className={"d-flex justify-content-md-center align-items-center vh-100"}>
                    <div className={"drum-div row"}>
                        <div className={"sound-buttons border"}>

                            <div id={"qwe"} className={"d-flex justify-content-around"}>
                                {keyLettersQWE.map((letter, i) => (
                                    <div className={letter + "-btn-div"}>
                                        <audio id={letter + "-sound"} src={soundLibrary1[i]}></audio>
                                        <button className={"btn btn-default"} id={letter + '-btn'}
                                                onClick={this.handleClick}>{letter}</button>
                                    </div>
                                ))}
                            </div>
                            <div id={"asd"} className={"d-flex justify-content-around"}>
                                {keyLettersASD.map((letter, i) => (
                                    <div className={letter + "-btn-div"}>
                                        <audio id={letter + "-sound"} src={soundLibrary1[i+3]}></audio>
                                        <button className={"btn btn-default"} id={letter + '-btn'}
                                                onClick={this.handleClick}>{letter}</button>
                                    </div>
                                ))}
                            </div>
                            <div id={"zxc"} className={"d-flex justify-content-around"}>
                                {keyLettersZXC.map((letter, i) => (
                                    <div className={letter + "-btn-div"}>
                                        <audio id={letter + "-sound"} src={soundLibrary1[i+6]}></audio>
                                        <button className={"btn btn-default"} id={letter + '-btn'}
                                                onClick={this.handleClick}>{letter}</button>
                                    </div>
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