import app from './app';

function main() {
    const port = app.get('port')
    app.listen(port);
    console.log(`Server listening on port ${port}`);
}

main();