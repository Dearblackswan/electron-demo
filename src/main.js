const electron = require('electron');

const app = electron.app
const BrowserWindow = electron.BrowserWindow
const Menu = electron.Menu

let mainWindow

app.on('ready', _ => { 
    //console.log('ready!')
    mainWindow = new BrowserWindow ()

    const name = electron.app.getName()
    const template = [
        {
            //label: electron.app.getName(),
            label: name,
            submenu: [{
                label: `About ${name}`,
                click: _ => {

                },
                role: 'about'
            },{
                type: 'separator'
            },{
                label: 'Quit',
                click: _ => { app.quit() },
                accelerator: 'Ctrl+Q'
            }]
        }
    ]

    const menu = Menu.buildFromTemplate(template)
    Menu.setApplicationMenu(menu)
})