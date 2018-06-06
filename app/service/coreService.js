const remoteApp = require('electron').remote.app

export const userDataPath = remoteApp.getPath('userData')

export const appName = remoteApp.getName()