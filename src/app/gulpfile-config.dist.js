export default
{
    "browserSyncDocker": {
        "port": 3000,
        "proxy": "http://127.0.0.1:7701/",
        "ui": {
            "port": 3001
        }
    },
    "browserSyncConfig": "browserSyncDocker",
    "sourcePath": "src/",
    "publicPath": "public/",
    "systemPath": "path/to/system/",
    "env": "prod"
}
