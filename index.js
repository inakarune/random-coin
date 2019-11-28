const { app, BrowserWindow, ipcMain } = require('electron')
const WebSocket = require('ws');

const url = `file://${__dirname}/dist/index.html`;

function createWindow() {
    let win = new BrowserWindow({
        width: 800,
        height: 740,
        webPreferences: {
            nodeIntegration: true
        }
    });
    let loginWin = new BrowserWindow({
        parent: mainWindow,
        show: false,
        frame: false,
        width: 800,
        height: 400,
        resizable: false,
        movable:true,
        center: true,
        transparent: true
    });

    win.webContents.openDevTools();
    win.once('ready-to-show', () => {
        win.show();

    });
    win.loadURL(`${ url }#about`);

    loginWin.webContents.openDevTools();
    loginWin.once('ready-to-show', () => {
        loginWin.show();
    });
    loginWin.loadURL(`${ url }#login`);
    loginWindow.setMenu(null);
}

app.on('ready', createWindow);

ipcMain.on('exit', () => {
	mainWindow = null;
	if (process.platform !== 'darwin') {
		app.quit();
	}
});
