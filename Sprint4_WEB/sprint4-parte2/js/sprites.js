var robots = function(posX, posY, width, height, color, velocidade){ //para saber se colidiu
	this.posX = posX;
	this.posY = posY;
	this.width = width;
	this.height = height;
	this.color = color;
	this.velocidade = velocidade;
	this.visible = true;
}
//Retorna  largura
robots.prototype.halfWidth = function(){
	return this.width/2;
}
//Retorna altura
robots.prototype.halfHeight = function(){
	return this.height/2;
}
//Retorna a posição do centro do objeto no eixo X
robots.prototype.centerX = function(){
	return this.posX + this.halfWidth();
}
//Retorna a posição do centro do objeto no eixo Y
robots.prototype.centerY = function(){
	return this.posY + this.halfHeight();
}
