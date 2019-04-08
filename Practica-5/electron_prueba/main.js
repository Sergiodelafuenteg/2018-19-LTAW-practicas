const electron = require('electron')

console.log("Arrancando electron...")

//-- Punto de entrada. En cuanto electron está listo,
//-- ejecuta esta función
electron.app.on('ready', () => {
    console.log("Evento Ready!")

    // Crear la ventana principal de nuestra Interfaz Gráfica
    win = new electron.BrowserWindow({
        width: 800,
        height: 600
    })
    win.loadFile('simulador_huffman-master/simulador_huffman.html')
})