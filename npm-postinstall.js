const fs = require('fs');
const sources = [
    "./src/app/gulpfile.dist.json"
];
const targets = [
    "./src/app/gulpfile.json"
];

for (let i = 0; i < sources.length; i++) {
    if (!fs.existsSync(targets[i])) {
        fs.copyFile(sources[i], targets[i], (err) => {
            if (err) {
                throw err;
            }

            console.log(`${sources[i]} was copied to ${targets[i]}`);
        });
    }
}
