class DebugConsole {
    constructor() {
        this.text = "<h2>Consola de Debug</h2><br>";
        this.debug_mode = false;
        this.htmlconsole = null;

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
            } else {
                if(this.debug_mode && this.htmlconsole){
                    this.htmlconsole.innerHTML = this.text
                }
            }

        }
    }

    log(text) {
        this.text = this.text + " " + text + "<br>";
    }

    enable() {
        this.htmlconsole = document.createElement("div");
        this.htmlconsole.id = "console";
        this.htmlconsole.innerHTML = this.text;
        this.htmlconsole.style.cssText = 'position:absolute;left:0px;top:0px;width:100%;height:100%;opacity:0.8;z-index:100;background:black;color:white';

        document.body.appendChild(this.htmlconsole);

    }

    disable() {
        if(this.htmlconsole) {
            this.htmlconsole.parentNode.removeChild(this.htmlconsole);
        }
       
    }
}
