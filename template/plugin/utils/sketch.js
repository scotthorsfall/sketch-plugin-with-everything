import sketch from 'sketch'

let document = sketch.getSelectedDocument();
let page = document.selectedPage

export function getSelectedLayers(){
    return document.selectedLayers.layers
}

// to manage local and web messages, call this and pass something to ui/webview.js
export function messagingSystem(context, buttonID, message) {
  
    if (context && context.context == "web") {

        context.webContents
        .executeJavaScript(`updateButtonText(${JSON.stringify(buttonID)},${JSON.stringify(message)})`)
        .catch(console.error)

    } else {
        
        sketch.UI.message("{{ name }}: " + message.slice(3))
    }

}