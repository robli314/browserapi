function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function run() {
    await new Promise(r => setTimeout(r, 8000));
}

run();

console.log(document.getElementById('test'));