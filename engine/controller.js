/* handle the user input */

export default class Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;
    }

    jump() {
        this.model.jump();
        //render the board?
    }
    duck() {
        this.model.duck();
    }
}