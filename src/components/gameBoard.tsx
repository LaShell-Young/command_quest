import React, { useState } from "react";
import gameMap from "../images/gameMap.jpg";
import '../components/css/GameBoard.css';
// import TextInput from "./TextInput";
// import ButtonInput from "./ButtonInput";
import Prompts from "../components/prompts/MapPrompts.json"
import Prompt from "./Prompt";

function GameBoard() {
    const [titleText, setTitleText] = useState("Welcome to Maybor!");
    const [inputType, setInputType] = useState("text");

    const promptsArr: Prompt[] = Prompts.prompts;
    const [promptIndex, setPromptIndex] = useState(0);

    function getPrompt(index: number): Prompt {
        if (typeof Prompts.prompts.at(index) !== undefined)
            return Prompts.prompts.at(index)!;

        return new Prompt("", "", "End the line!", -1, false);
    }

    // display game map
    // text prompts
    // user input
    // user inventory

    return(
        <div>
            <div className="gameMap">
                <img src={gameMap} alt="game map" />
            </div>
            <h1>{titleText}</h1>
            <div className="prompt">
                {
                    getPrompt(promptIndex).message
                }
            </div>
            <button 
                className="button-19" 
                role="button"
                onClick={() => setPromptIndex(promptIndex + 1)}
            >Next</button>
            {/* <div className="userInput">
                {
                    inputType === "text" ?
                    <TextInput /> : <ButtonInput />
                }
            </div> */}
        </div>
    )
}

export default GameBoard;