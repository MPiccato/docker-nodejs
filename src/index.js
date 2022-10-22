const app = require('./app');

const port = process.env.PORT || 3000;

async function main() {
    await app.listen(3000);
    console.log('Server is running on port: ' + port);
}

main();