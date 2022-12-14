class Sprite {
    constructor({ position, imageSrc, scale = 1, framesMax = 1 }) {
        this.position = position
        this.width = 50
        this.height = 70
        this.image = new Image()
        this.image.src = imageSrc
        this.scale = scale
        this.framesMax = framesMax
        this.frameCurrent = 0
        this.framesElapsed = 0
        this.framesHold = 20
    }


    draw() {
        cnvs.drawImage(
            this.image,
            this.frameCurrent * ( this.image.width / this.framesMax),
            0,
            this.image.width / this.framesMax,
            this.image.height,
            this.position.x, 
            this.position.y,
            (this.image.width / this.framesMax) * this.scale, 
            this.image.height * this.scale)
    }

    update() {
        this.draw()
        this.framesElapsed ++
        if(this.framesElapsed % this.framesHold === 0) {
            if(this.frameCurrent < this.framesMax - 1){
                this.frameCurrent ++
            } else {
                this.frameCurrent = 0
            }
        }
    }
}

class Fighter  extends Sprite{
    constructor({ position, velocity, color = 'red', offset }) {
        this.position = position
        this.velocity = velocity
        this.width = 50
        this.height = 70
        this.lastkey
        this.attackBox = {
            position: {
                x: this.position.x,
                y: this.position.y
            },
            offset: offset,
            width: 100,
            height: 15
        },
            this.color = color
        this.isAttacking
        this.health = 100
    }


    draw() {
        cnvs.fillStyle = this.color
        cnvs.fillRect(this.position.x, this.position.y, this.width, this.height)
        //ataquebox
        if (this.isAttacking) {
            cnvs.fillStyle = 'green'
            cnvs.fillRect(
                this.attackBox.position.x,
                this.attackBox.position.y,
                this.attackBox.width,
                this.attackBox.height
            )
        }
    }

    update() {
        this.draw()
        this.attackBox.position.x = this.position.x + this.attackBox.offset.x
        this.attackBox.position.y = this.position.y

        this.position.y += this.velocity.y
        this.position.x += this.velocity.x


        if (this.position.y + this.height + this.velocity.y >= canvas.height) {
            this.velocity.y = 0
        } else {
            this.velocity.y += gravity
        }
    }
    attack() {
        this.isAttacking = true
        setTimeout(() => {
            this.isAttacking = false
        }, 100) //depois de 100ms ataque = falso
    }
}
