
let bebidas = [
        { id: 1, nombre: "Fanta" },
        { id: 2, nombre: "Coca-Cola" },
        { id: 3, nombre: "Sprite" },
        { id: 4, nombre: "Pepsi" },
        { id: 5, nombre: "Manaos" },
        { id: 6, nombre: "Pritty" }
];

let marcas;

function elegiTuBebida() {
        let seleccionValida = false;
        do {
                let seleccion = parseInt(prompt("Hola! Por favor selecciona tu bebida favorita:\n1. Fanta\n2. Coca-Cola\n3. Sprite\n4. Pepsi\n5. Manaos\n6. Pritty"));
                if (seleccion >= 1 && seleccion <= 6) {
                        marcas = bebidas.find(bebida => bebida.id === seleccion).nombre;
                        seleccionValida = true;
                } else {
                        alert("Por favor, selecciona una opción válida.");
                }
        } while (!seleccionValida);
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


