export default function onData(stringData) {
    const data = JSON.parse(stringData);
    console.log(data)

    switch (data.type) {
        case "version":
            console.log("Version du serveur :", data.value);
            break;

        case "update":
            this.mainWindow.webContents.send(data.channel, data.value);
            break;

        case "fullUpdate":
            this.mainWindow.webContents.send('fullUpdate', data.value);
            break;

        default:
            console.log("CPT ?");
            break;
    }
}