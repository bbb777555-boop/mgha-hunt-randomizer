const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path')
const fs = require('fs')

function createWindow() {
  const win = new BrowserWindow({
    width: 1280,
    height: 820,
    minWidth: 900,
    minHeight: 650,
    show: false,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false,
    },
    backgroundColor: '#ede0c0',
    icon: path.join(__dirname, 'assets', 'icon.ico'),
    titleBarStyle: 'hidden',
    titleBarOverlay: {
      color: '#1a2d6a',
      symbolColor: '#f5ecd6',
      height: 36,
    },
    title: 'MHGA - Make Hunt Great Again!',
  })

  win.loadFile(path.join(__dirname, 'src', 'index.html'))
  win.webContents.once('did-finish-load', () => { win.show() })

  if (process.argv.includes('--dev')) {
    win.webContents.openDevTools()
  }
}

app.whenReady().then(() => {
  const userDataPath = app.getPath('userData')

  ipcMain.handle('read-data', async (_event, filename) => {
    const filePath = path.join(userDataPath, filename)
    try {
      if (!fs.existsSync(filePath)) return null
      return JSON.parse(fs.readFileSync(filePath, 'utf8'))
    } catch {
      return null
    }
  })

  ipcMain.handle('write-data', async (_event, filename, data) => {
    if (!fs.existsSync(userDataPath)) {
      fs.mkdirSync(userDataPath, { recursive: true })
    }
    const filePath = path.join(userDataPath, filename)
    try {
      fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8')
      return true
    } catch {
      return false
    }
  })

  ipcMain.handle('get-app-path', async () => __dirname)

  createWindow()
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow()
})
