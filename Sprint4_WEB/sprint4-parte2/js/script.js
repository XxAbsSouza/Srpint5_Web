(function(){
	let cnv = document.querySelector("#canvas") 
	let ctx = cnv.getContext("2d") 
	let bloco
	let img = new Image()
	
	const arrowleft = 37 
	const arrowRight = 39
	const arrowUp = 38
	const arrowDown = 40 
	const A = 65 
	const D = 68 
	const W = 87 
	const S = 83 

	let moveLeft = false
	let moveUp = false 
	let moveRight = false 
	let moveDown = false 
	let movLeft = false 
	let movUp = false 
	let movRight = false 
	let movDown = false 
	
	let robot = []  
	let block = []  
	
	img.src = ''

	var player1 = new robots(50, 700, 50, 50, "#00f", 5) 
	robot.push(player1) 
	let player2 = new robots(750, 200, 50, 50, "#f00", 5) 
	robot.push(player2) 
	
	let block1 = new robots(90, 70, 300, 350 , "#000") 
	robot.push(block1) 
	block.push(block1) 
	let block2 = new robots(700, 90, 100, 100, "#000") 
	robot.push(block2) 
	block.push(block2) 
	let block3 = new robots(420, 600, 230, 100, "#000") 
	robot.push(block3) 
	block.push(block3) 
	
	function loop(){
		window.requestAnimationFrame(loop,cnv) 
		update() 
		update2() 
		render() 
	}
	//Evento disparado quando uma tecla é pressionada
	window.addEventListener("keydown",function(e){
		let key = e.keyCode  //keycode = código da tela, pq tem risco? pq tá depreciado, mas funciona
		switch(key){
			case arrowleft:
				moveLeft = true 
				break 
			case arrowUp:
				moveUp = true 
				break 
			case arrowRight:
				moveRight = true 
				break 
			case arrowDown:
				moveDown = true 
				break 
		}
	},false) 
	
	//Evento disparado quando uma tecla é solta
	window.addEventListener("keyup",function(e){
		let key = e.keyCode 
		switch(key){
			case arrowleft:
				moveLeft = false 
				break 
			case arrowUp:
				moveUp = false 
				break 
			case arrowRight:
				moveRight = false 
				break 
			case arrowDown:
				moveDown = false 
				break 
		}
	},false) 
	//Player 2 
	window.addEventListener("keydown",function(r){
		let key = r.keyCode 
		switch(key){
			case A:
				movLeft = true 
				break 
			case W:
				movUp = true 
				break 
			case D:
				movRight = true 
				break 
			case S:
				movDown = true 
				break 
		}
	},false) 
	
	//Evento disparado quando uma tecla é solta
	window.addEventListener("keyup",function(r){
		let key = r.keyCode 
		switch(key){
			case A:
				movLeft = false 
				break 
			case W:
				movUp = false 
				break 
			case D:
				movRight = false 
				break 
			case S:
				movDown = false 
				break 
		}
	},false) 


	//funções
	


	//Atualizações
	function update(){
		if(moveLeft && !moveRight){
			player1.posX -=player1.velocidade 
		}
		if(moveRight && !moveLeft){
			player1.posX +=player1.velocidade 
		}
		if(moveUp && !moveDown){
			player1.posY -=player1.velocidade 
		}
		if(moveDown && !moveUp){
			player1.posY +=player1.velocidade 
		}
		//Limites da tela
		player1.posX = Math.max(0, Math.min(cnv.width - player1.width, player1.posX)) 
		player1.posY = Math.max(0, Math.min(cnv.height - player1.height, player1.posY)) 
		
		//Colisões
		for(let i in block){
			let bloco = block[i] 
			if(bloco.visible){
				blockRect(player1,bloco) 
				
			}
			if(bloco.visible){
				blockRect(player1,player2) 
				
			}
		}
	}
	//Player 2 
	function update2(){
		if(movLeft && !movRight){
			player2.posX -=player2.velocidade 
		}
		if(movRight && !movLeft){
			player2.posX +=player2.velocidade
		}
		if(movUp && !movDown){
			player2.posY -=player2.velocidade
		}
		if(movDown && !movUp){
			player2.posY +=player2.velocidade
		}
		//Limites da tela
		player2.posX = Math.max(0, Math.min(cnv.width - player2.width, player2.posX)) 
		player2.posY = Math.max(0, Math.min(cnv.height - player2.height, player2.posY)) 
		
		//Colisões
		for(let i in block){
			var bloco = block[i] 
			if(bloco.visible){
					blockRect(player2,bloco) 
				}								
			}
			if(bloco.visible){
				blockRect(player2,player1) 				
		}			
		
	}

	//Renderização ou desenho na tela	
	function render(){
		ctx.clearRect(0,0,cnv.width,cnv.height) 
		for(let i in robot){
			let rob = robot[i] 
			if(rob.visible){
				ctx.fillStyle = rob.color 
				ctx.fillRect(rob.posX, rob.posY, rob.width, rob.height) 
			}
		}		
	}
	loop() 
}()) 