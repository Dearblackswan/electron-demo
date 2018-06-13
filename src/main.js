const electron = require('electron')
const path = require('path')

const {app, clipboard, Menu, Tray} = electron

function addToStack(item, stack){
    return [item].concat(stack.length >)
}

function checkClipboardForChange(clipboard){
    let cache = clipboard.readText()
    let latest
    setInterval(_ => {
        latest = clipboard.readText()
        if (latest !== cache) {
            cache = latest
            onchange(cache)
        }
    }, 1000)
}

app.on('ready', _ => { 
    let stack = []
    const tray = new Tray(path.join('src', 'eye.png'))
    tray.setContextMenu(Menu.buildFromTemplate([{label: '<Empty>', enabled: false}]))

    checkClipboardForChange(clipboard, text => {
        addToStack(text, stack)
    } )
})