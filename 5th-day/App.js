function randomColor() {
    const hex = '0123456789ABCDEF';
    let hash = '#';
    for (let i = 0; i < 6; i++) {
        hash += hex[Math.floor(Math.random() * 16)]
    }
    return hash
}

let color;

document.getElementById('start-button')
    .addEventListener('click', (e) => {
        // it is checking that if our color var has already assigned a value
        if (!color) {
            color = setInterval(() => {
                document.body.style.backgroundColor = randomColor()
            }, 1000)
        }
    })

document.getElementById('stop-button')
    .addEventListener('click', () => {
        clearInterval(color);
        color = null;
        console.log('stopped the background-color');
    })

