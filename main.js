const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path')
const fs = require('fs')

function createWindow() {
  const win = new BrowserWindow({
    width: 1280,
    height: 820,
    resizable: false,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false,
    },
    backgroundColor: '#0d0a06',
    icon: path.join(__dirname, 'assets', 'icon.ico'),
    titleBarStyle: 'hidden',
    titleBarOverlay: {
      color: '#0d0a06',
      symbolColor: '#c8962a',
      height: 36,
    },
    title: 'MHGA - Make Hunt Great Again!',
  })

  win.loadFile(path.join(__dirname, 'src', 'index.html'))

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
