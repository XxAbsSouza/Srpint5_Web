(function(){
    let canvas = document.querySelector('#canvas')
    let ctx = canvas.getContext("2d");
    let blk;

    const LEFT = 37
    const UP = 38
    const RIGHT = 39
    const DOWN = 40;

    const A = 65;
    const W = 87;
    const D = 68;
    const S = 83;

    let mvLeft = mvUp = mvRight = mvDown = false;
    let plLeft = plUp = plRight = plDown = false;

    let square = [];
    let blocks = [];

    // let img1 = new Image();
    // img1.addEventListener('load', function(){
    //     ctx.drawImage(this, 20, 20, 60, 60, 5)
    // })
    // img1.scr = 'images/Layer 0.png'

    const player1 = new square(20, 10, 60, 60, "#f60", 5); 
    square.push(player1); 
    const player2 = new square  (20, 10, 60, 60, "#f60", 5); 
    square.push(player2); 

    const obstaculo1 = new blocks(100, 120, 550, 50, "#000", 0);
    blocks.push(obstaculo1);
    const obstaculo2 = new blocks(400, 350, 500, 50, "#000", 0); 
    blocks.push(obstaculo2);

    window.addEventListener('keydown', function(e) {
        let key = e.keyCode;
        switch (key) {
            case LEFT:
                mvLeft = true;
                break;
            case UP:
                mvUp = true;
                break;
            case RIGHT:
                mvRight = true;
                break;
            case DOWN:
                mvDown = true;
                break;
        }
    }, false);

    window.addEventListener("keyup", function (e) {
        let key = e.keyCode;
        switch (key) {
            case LEFT:
                mvLeft = false;
                break;
            case UP:
                mvUp = false;
                break;
            case RIGHT:
                mvRight = false;
                break;
            case DOWN:
                mvDown = false;
                break;
        }
    }, false);

    window.addEventListener("keydown", function (f) {
        let key = f.keyCode;
        switch (key) {
            case A:
                plLeft = true;
                break;
            case W:
                plUp = true;
                break;
            case D:
                plRight = true;
                break;
            case S:
                plDown = true;
                break;
        }
    }, false);

    window.addEventListener("keyup", function (r) {
        let key = r.keyCode;
        switch (key) {
            case A:
                plLeft = false;
                break;
            case W:
                plUp = false;
                break;
            case D:
                plRight = false;
                break;
            case S:
                plDown = false;
                break;
        }
    }, false);

    function loop() {
        window.requestAnimationFrame(loop, cnv);
        update();
        update2();
        render();
    }

    //player 1
    player1.velocidade = 5;
    function update() {
        if (mvLeft && !mvRight) {
            player1.posX -= player1.velocidade;
        }
        if (mvRight && !mvLeft) {
            player1.posX += player1.velocidade;
        }
        if (mvUp && !mvDown) {
            player1.posY -= player1.velocidade;
        }
        if (mvDown && !mvUp) {
            player1.posY += player1.velocidade;
        }

        player1.posX = Math.max(0, Math.min(canvas.width - player1.width, player1.posX));
        player1.posY = Math.max(0, Math.min(canvas.height - player1.height, player1.posY));

        for (let i in blocks) {
            let blk = blocks[i];
            if (blk.visible) {
                blockRect(player1, blk);
            }
            if (blk.visible) {
                blockRect(player1, player2);
            }
        }
    }

    //player 2
    player2.velocidade = 5;
    function update2() {
        if (plLeft && !plRight) {
            player2.posX -= player2.velocidade = 5;
        }
        if (plRight && !plLeft) {
            player2.posX += player2.velocidade = 5;
        }
        if (plUp && !plDown) {
            player2.posY -= player2.velocidade = 5;
        }
        if (plDown && !plUp) {
            player2.posY += player2.velocidade = 5;
        }
        //Limites da tela
        player2.posX = Math.max(0, Math.min(canvas.width - player2.width, player2.posX));
        player2.posY = Math.max(0, Math.min(canvas.height - player2.height, player2.posY));

        //Colisões
        for (let i in blocks) {
            var blk = blocks[i];
            if (blk.visible) {
                blockRect(player2, blk);
            }
        }
        if (blk.visible) {
            blockRect(player2, player1);
        }

    }

    function render() {
        ctx.clearRect(0, 0, cnv.width, cnv.height);
        for (let i in sprites) {
            let spr = sprites[i];
            if (spr.visible) {
                ctx.fillStyle = spr.color;
                ctx.fillRect(spr.posX, spr.posY, spr.width, spr.height);
            }
        }
    }
    loop();

}())