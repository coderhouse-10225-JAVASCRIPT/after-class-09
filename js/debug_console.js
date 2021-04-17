class DebugConsole {
    constructor() {
        this.text = "<h2>Consola de Debug</h2><br>";
        this.debug_mode = false;

        //let myBody = document.body;
        document.body.onkeydown = (evento) => {

            //evento.preventDefault()
            // Si apreto control + alt + d

            this.text = this.text + " " + evento.key;

            if (evento.ctrlKey && evento.altKey && (evento.keyCode == 68)) {
                this.debug_mode = !this.debug_mode;
                console.log("enable debug..." + this.debug_mode);

                if (this.debug_mode) {
                    this.enable();
                } else {
                    this.disable();
                }


            }

        }
    }

    log(text) {
        this.text = this.text + " " + text + "<br>";
    }

    enable() {
        let htmlconsole = document.createElement("div");
        htmlconsole.id = "console";
        htmlconsole.innerHTML = this.text;
        document.body.appendChild(htmlconsole);

    }

    disable() {
        let htmlconsole = document.getElementById("console");
        htmlconsole.parentNode.removeChild(htmlconsole);
    }
}
