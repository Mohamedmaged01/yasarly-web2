const { contextBridge, ipcRenderer } = require("electron");

// Expose a minimal API for the renderer to notify main about auth token changes
contextBridge.exposeInMainWorld("electronAuth", {
  saveToken: (token) => ipcRenderer.send("auth-save-token", token),
  removeToken: () => ipcRenderer.send("auth-remove-token"),
});

// On preload, try to read stored token from main and set it into localStorage
(async () => {
  try {
    const token = await ipcRenderer.invoke("auth-get-token");
    if (token) {
      try {
        window.localStorage.setItem("token", token);
      } catch (e) {
        // ignore if localStorage not available
      }
    }
  } catch (e) {
    // ignore
  }
})();

// Watch for changes: periodically push current token to main (to persist when user logs in)
let lastToken = null;
setInterval(() => {
  try {
    const t = window.localStorage.getItem("token");
    if (t && t !== lastToken) {
      lastToken = t;
      ipcRenderer.send("auth-save-token", t);
    }
  } catch (e) {
    // ignore
  }
}, 2000);
