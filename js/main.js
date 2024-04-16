
let marcas;

function elegiTuBebida() {
        let bebidas;
        do {
                bebidas = parseInt(prompt("Hola! Por favor selecciona tu bebida favorita:\n1. Fanta\n2. Coca-Cola\n3. Sprite\n4. Pepsi\n5. Manaos\n6. Pritty"));
                switch (bebidas) {
                        case 1:
                                marcas = "Fanta";
                                break;
                        case 2:
                                marcas = "Coca-Cola";
                                break;
                        case 3:
                                marcas = "Sprite";
                                break;
                        case 4:
                                marcas = "Pepsi";
                                break;
                        case 5:
                                marcas = "Manaos";
                                break;
                        case 6:
                                marcas = "Pritty";
                                break;
                        default:
                                alert("Por favor, selecciona una opción válida.");
                }
        } while (isNaN(bebidas) || bebidas < 1 || bebidas > 6);
        console.log("Has seleccionado:", marcas);
}

function preguntarOtraVez() {
        return confirm("Has seleccionado " + marcas + ". ¿Deseas elegir otra bebida?");
}


elegiTuBebida();


while (preguntarOtraVez()) {
        elegiTuBebida();
}

alert("Gracias por tu selección.");

