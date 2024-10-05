import fs from 'fs';

const files = [
    {
        "source": "./src/app/gulpfile-config.dist.js",
        "target": "./src/app/gulpfile-config.js",
        "forceOverride": false
    }
];

for (const file of files) {
    // if source exists and target not exists OR source exists and force override
    if ((fs.existsSync(file.source) && !fs.existsSync(file.target)) || (fs.existsSync(file.source) && file.forceOverride)) {
        fs.copyFile(file.source, file.target, (err) => {
            if (err) {
                throw err;
            }

            console.log(`${file.source} was copied to ${file.target}`);
        });
    }
}
