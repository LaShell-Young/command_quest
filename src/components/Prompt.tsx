import React from "react"

class Prompt {
    id: Number;
    message: String;
    shouldChangeImg: Boolean;
    img: String|null;
    inputType: String

    public constructor(img: String, inputType: String, message: String, id: Number, shouldChangeImg: Boolean) {
        this.img = img;
        this.inputType = inputType;
        this.message = message;
        this.id = id;
        this.shouldChangeImg = shouldChangeImg;
    }
}

export default Prompt;