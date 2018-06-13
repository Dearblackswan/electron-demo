const electron = require('electron')

const { app, Tray } = electron

const path = require('path')

 app.on('ready', _ => { 
    const tray = new Tray(path.join('src', 'icon.png'))
    const contextMenu = Menu.buildFromTemplate(þ[
        { 
            label: 'Wow',
            click: _ => console.log('wow')
        }
    ])
    tray.setContextMenu(contextMenu)
}) 