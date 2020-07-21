import React from 'react';
import {LIBRARY1} from "./soundObjects"
/* ASCII Codes
Q, W, E, A, S, D, Z, X, C
81, 87, 69, 65, 83, 68, 90, 88, 67
 */

// TODO make prettier
//  make buttons change background color when clicked
//  make the main app fixed in size in the center
//  if a sound is already playing and a button is clicked it stops that sound and plays the one clicked right away
//  add more sound libraries

const keyCodes = [81, 87, 69, 65, 83, 68, 90, 88, 67];
const keyLettersQWE = ['Q', 'W', 'E'];
const keyLettersASD = ['A', 'S', 'D'];
const keyLettersZXC = ['Z', 'X', 'C'];
const keyLettersGrouped = ['QWE', 'ASD', 'ZXC'];


const DEFAULT = "Press a key";

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
                input: LIBRARY1[LIBRARY1.findIndex(obj => obj.key === String.fromCharCode(event.keyCode))]["soundName"]
            });
            document.getElementById(String.fromCharCode(event.keyCode)).play();
        }
    }

    handleClick({currentTarget}) {
        this.setState({
            sound: true,
            input: LIBRARY1[LIBRARY1.findIndex(obj => obj.key === currentTarget.id[0])]["soundName"]
        });
        document.getElementById(currentTarget.id[0]).play();
    }

    togglePlay = () => {
        this.setState(
            { sound: !this.state.sound },
            () => {
                this.state.sound ? this.audio.play() : this.audio.pause();
            });
    }

    render() {
        return (
            <div className={"container-fluid"}>
                <div className={"d-flex justify-content-md-center align-items-center vh-100"}>
                    <div className={"drum-div row"} id={"drum-machine"}>
                        <div className={"sound-buttons border"}>
                            {/* go through each group of letters (qwe, asd, zxc) and set up a div for each */}
                            {keyLettersGrouped.map((group, i) => (
                                <div id={group + "-row"} className={"d-flex justify-content-around"} key={group}>
                                    {/* for each array (keyLettersQWE, keyLettersASD etc.) give each button its own div
                                     with its own sound
                                     eval to combine the string and variable (dynamic variable)
                                     */}
                                    {eval('keyLetters' + group).map((letter, j) => (
                                        <div className={letter + '-btn-div'} key={letter}>
                                            {/* if i = 0 the first row/group (QWE) then src is between 0-2
                                            if second group then need to add 3 to j since src will be 3-5 etc. */}

                                            <button className={"btn btn-default drum-pad"} id={letter + '-btn'}
                                                    onClick={this.handleClick}>{letter}
                                                    <audio className={"clip"} id={letter} src={
                                                        LIBRARY1[i === 0 ? j : i === 1 ? j+3 : j+6]['sound']}>
                                                    </audio>
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                        <div className={"sound-info border"} id={"display"}>
                            <h1>{this.state.input}</h1>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};


export default MyComponent;