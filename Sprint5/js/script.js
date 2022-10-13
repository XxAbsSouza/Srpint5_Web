(function(){
    const cnv = document.querySelector('#canvas');
    const ctx = cnv.getContext('2d');

    //teclas
    const a = 65
    const w = 87
    const d = 68
    const s = 83
    const arrowLeft = 37
    const arrowUp = 38
    const arrowDown = 40
    const arrowRight = 39
    
    let moveLeft = false;
    let moveUp = false;
    let moveRight = false;
    let moveDown = false; 
    let movLeft = false;
    let movUp = false;
    let movRight = false;
    let movDown = false; 
    
    
    let robot = []; //imagens - carinha q anda
    let blocks = []; //carinha q n anda

    var player1 = new shapes(50, 700, 50, 50, "#00f", 5);
    robot.push(player1);


    let player2 = new shapes(1350, 200, 50, 50, "#f00", 5);
    robot.push(player2);


    let block1 = new shapes(90, 70, 300, 350, "#000", 0);
    robot.push(block1);
    blocks.push(block1);

    let block2 = new shapes(700, 90, 400, 400, "#000", 0);
    robot.push(block2);
    blocks.push(block2);

    let block3 = new shapes(420, 600, 1000, 100, "#000", 0);
    robot.push(block3);
    blocks.push(block3);
    //evento teclas

        //1
    window.addEventListener('keydown', function(e){
        let key = e.keyCode
        switch(key) {
            case a:
                moveLeft = true
                break
            case arrowRight:
                moveRight = true
                break
            case arrowUp:
                moveUp = true
                break
            case arrowDown:
                moveDown = true
                break
        }
    })
    window.addEventListener('keyup', function(e){
        let key = e.keyCode
        switch(key) {
            case arrowLeft:
                moveLeft = false
                break
            case arrowRight:
                moveRight = false
                break
            case arrowUp:
                moveUp = false
                break
            case arrowDown:
                moveDown = false
                break
        }
    })
        //2
    window.addEventListener('keydown', function(r){
        let key = r.keyCode
        switch(key) {
            case a:
                movLeft = true
                break
            case d:
                movRight = true
                break
            case w:
                movUp = true
                break
            case s:
                movDown = true
                break
        }
    })
    window.addEventListener('keyup', function(r){
        let key = r.keyCode
        switch(key) {
            case a:
                movLeft = false
                break
            case d:
                movRight = false
                break
            case w:
                movUp = false
                break
            case s:
                movDown = false
                break
        }
    })

    function loop() {
        window.requestAnimationFrame(loop, cnv);
        update();
        update2();
        render();
    }
    
    function update(){
        if(moveLeft && !moveRight){
            player1.posX -= player1.velocidade
        }
        if(moveRight && !moveLeft){
            player1.posX += player1.velocidade
        }
        if(moveUp && !moveDown){
            player1.posX -= player1.velocidade
        }
        if(moveDown && !moveUp){
            player1.posX += player1.velocidade
        }

        player1.posX = Math.max(0, Math.min(cnv.width - player1.width, player1.posX));
        player1.posY = Math.max(0, Math.min(cnv.height - player1.height, player1.posY));

        for(let i in blocks) {
            let blk = blocks[i];
            if(blk.visible){
                blockRect(player1, blk);
            }
            if(blk.visible){
                blockRect(player1, player2);
            }
        }
    }

    function update2(){
        if(movLeft && !movRight){
            player2.posX -= player2.velocidade
        }
        if(movRight && !movLeft){
            player2.posX += player2.velocidade
        }
        if(movUp && !movDown){
            player2.posX -= player2.velocidade
        }
        if(movDown && !movUp){
            player2.posX += player2.velocidade
        }

        player2.posX = Math.max(0, Math.min(cnv.width - player2.width, player2.posX));
        player2.posY = Math.max(0, Math.min(cnv.height - player2.height, player2.posY));

        for(let i in blocks) {
            let blk = blocks[i];
            if(blk.visible){
                blockRect(player2, blk);
            }
            if(blk.visible){
                blockRect(player2, player2);
            }
        }
    }

    function render(){
        ctx.clearReact(0,0,cnv.width,cnv.height)
        for(const i in robot) {
            const shape = robot[i]
            ctx.fillStyle = shape.color
            ctx.fillRect(shape.posX, shape.posY, shape.width, shape.height)
        }
    }
    loop()
}())