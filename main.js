const { app, BrowserWindow } = require('electron')
const path = require('path')

let  window

function createWindow() {
    window = new BrowserWindow({
        width: 1500,
        minWidth: 700,
        height: 800,
        minHeight: 600,
        show: true,
        frame: true,
        autoHideMenuBar: true,
        icon: __dirname + './assets/logo.jpg',
        fullscreenable: true,
        resizable: true,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    })

    window.on('closed', () => window = null)

    window.loadURL('http://localhost:3000')
    // window.webContents.openDevTools()
}
   
app.whenReady().then(() => {
    createWindow()
})

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit()
})
