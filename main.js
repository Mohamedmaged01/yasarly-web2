const { app, BrowserWindow, ipcMain } = require("electron");
const fs = require("fs");
const path = require("path");

const tokenFile = path.join(app.getPath("userData"), "auth_token.json");

function createWindow() {
  const win = new BrowserWindow({
    width: 1400,
    height: 900,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
    },
  });

  win.loadURL("https://yasarly-web2.vercel.app/login");
  win.setMenuBarVisibility(false);
}

ipcMain.handle("auth-get-token", async () => {
  try {
    if (fs.existsSync(tokenFile)) {
      const data = fs.readFileSync(tokenFile, "utf8");
      const parsed = JSON.parse(data || "{}");
      return parsed.token || null;
    }
  } catch (e) {
    console.error("Failed to read token file", e);
  }
  return null;
});

ipcMain.on("auth-save-token", (event, token) => {
  try {
    fs.writeFileSync(tokenFile, JSON.stringify({ token }), "utf8");
  } catch (e) {
    console.error("Failed to save token", e);
  }
});

ipcMain.on("auth-remove-token", () => {
  try {
    if (fs.existsSync(tokenFile)) fs.unlinkSync(tokenFile);
  } catch (e) {
    console.error("Failed to remove token", e);
  }
});

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
