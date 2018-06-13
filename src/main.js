const electron = require('electron');

const countdown = require('./countdown')

const {app, BrowserWindow} = require('electron')

const ipc = electron.ipcMain

let mainWindow

app.on('ready', _ => { 
    //console.log('ready!')
    mainWindow = new BrowserWindow ({
        height: 600,
        width: 600
    })

    mainWindow.loadURL(`file://${__dirname}/countdown.html`)

    mainWindow.on('closed', _ => {
        //console.log('closed !')
        mainWindow = null
    })
})

ipc.on('countdown-start', _ => {
    countdown(count => {
        mainWindow.webContents.send('countdown', count)
    })
})