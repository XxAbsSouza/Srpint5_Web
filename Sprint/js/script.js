let canvas = document.querySelector("#canvas")
let cnvs = canvas.getContext("2d")


canvas.width = 1024
canvas.height = 576

cnvs.fillRect(0, 0, canvas.width, canvas.height)
// const arrowleft = 37
// const arrowRight = 39
// const arrowUp = 38
// const arrowDown = 40
// const A = 65
// const D = 68
// const W = 87
// const S = 83

// let moveLeft = false
// let moveUp = false
// let moveRight = false
// let moveDown = false
// let movLeft = false
// let movUp = false
// let movRight = false
// let movDown = false 

const gravity = 0.7
const background = new Sprite({
    position: {
        x: 0,
        y: 0
    },
    imageSrc: 'image/background/background_layer_1.png'
})

const player1 = new Fighter({
    position: {
        x: 0,
        y: 0
    },
    velocity: {
        x: 0,
        y: 0
    },
    offset: {
        x: 0,
        y: 0
    }
})



const player2 = new Fighter({
    position: {
        x: 400,
        y: 100
    },

    velocity: {
        x: 0,
        y: 0
    },
    color: 'blue',
    offset: {
        x: -50,
        y: 0
    }
})





const keys = {
    a: {
        pressed: false
    },
    d: {
        pressed: false
    },
    w: {
        pressed: false
    },
    ArrowRight: {
        pressed: false
    },
    ArrowLeft: {
        pressed: false
    },
    ArrowUp: {
        pressed: false
    }
}

decreaseTimer()

function animate() {
    window.requestAnimationFrame(animate)
    cnvs.fillStyle = 'black'
    cnvs.fillRect(0, 0, canvas.width, canvas.height)
    background.update()
    player1.update()
    player2.update()

    player1.velocity.x = 0
    player2.velocity.x = 0
    if (keys.a.pressed && player1.lastkey === 'a') {
        player1.velocity.x = -5
    } else if (keys.d.pressed && player1.lastkey === 'd') {
        player1.velocity.x = 5
    }
    if (keys.ArrowLeft.pressed && player2.lastkey === 'ArrowLeft') {
        player2.velocity.x = -5
    } else if (keys.ArrowRight.pressed && player2.lastkey === 'ArrowRight') {
        player2.velocity.x = 5
    }

    //detect for collision
    if (
        rectangularCollision({
            rectangule1: player1,
            rectangule2: player2
        }) &&
        player1.isAttacking) {
        player1.isAttacking = false
        console.log('oi');
        player1.health -= 20
        document.querySelector('#player1Life').style.width = player1.health + '%'
    }
    if (
        rectangularCollision({
            rectangule1: player2,
            rectangule2: player1
        }) &&
        player2.isAttacking) {
        player2.isAttacking = false
        console.log('eii');
        player2.health -= 20
        document.querySelector('#player2Life').style.width = player2.health + '%'
    }
    if(player2.health <= 0 || player1.health <= 0){
        determineWinner({player1, player2, timerId})
    }
}

animate()

window.addEventListener('keydown', (e) => {
    // let key = e.keyCode
    switch (e.key) {
        case 'd':
            keys.d.pressed = true
            player1.lastkey = 'd'
            break
        case 'a':
            keys.a.pressed = true
            player1.lastkey = 'a'
            break
        case 'w':
            player1.velocity.y = -20
            break
        case 'q':
            player1.attack()
            break
        case 'ArrowRight':
            keys.ArrowRight.pressed = true
            player2.lastkey = 'ArrowRight'
            break
        case 'ArrowLeft':
            keys.ArrowLeft.pressed = true
            player2.lastkey = 'ArrowLeft'
            break
        case 'ArrowUp':
            player2.velocity.y = -20
            break
        case '/':
            player2.attack()
            break
    }
})
window.addEventListener('keyup', (r) => {
    // let key = e.keyCode
    switch (r.key) {
        case 'd':
            keys.d.pressed = false
            break
        case 'a':
            keys.a.pressed = false
            break
        case 'w':
            keys.w.pressed = false
            break
        case 'ArrowRight':
            keys.ArrowRight.pressed = false
            break
        case 'ArrowLeft':
            keys.ArrowLeft.pressed = false
            break
        case 'ArrowUp':
            keys.ArrowUp.pressed = false
            break
    }
})
