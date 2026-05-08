const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('huntAPI', {
  readData: (filename) => ipcRenderer.invoke('read-data', filename),
  writeData: (filename, data) => ipcRenderer.invoke('write-data', filename, data),
  getAppPath: () => ipcRenderer.invoke('get-app-path')
})
