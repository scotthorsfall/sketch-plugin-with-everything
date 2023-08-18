// disable the context menu (eg. the right click menu) to have a more native feel
document.addEventListener('contextmenu', (e) => {
  e.preventDefault()
})

// call the plugin from the webview
document.getElementById('button').addEventListener('click', () => {
  window.postMessage('nativeLog', 'Called from the webview')
})

// call the webview from the plugin
window.setRandomNumber = (randomNumber) => {
  document.getElementById('answer').innerHTML = 'Random number from the plugin: ' + randomNumber
}

// sample function for messagingSystem in utils/sketch.js
window.updateButtonText = (buttonID, message) => {

  //document.getElementById('answer').innerHTML = 'ButtonID to run: ' + buttonID + ", with message: " + message

  var originalText = document.getElementById(buttonID).textContent

  document.getElementById(buttonID).textContent = message

  setTimeout(function() { resetText(buttonID, originalText); }, 1500);
  function resetText(button, originalText){ document.getElementById(button).textContent = originalText; }
}