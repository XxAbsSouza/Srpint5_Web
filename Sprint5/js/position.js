const shapes = function (posX, posY, width, height, color, velocidade) {
    this.posX = posX;
    this.posY = posY;
    this.width = width;
    this.height = height;
    this.color = color;
    this.velocidade = velocidade;
}

shapes.prototype.halfWidth = function () {
    return this.width / 2;
}

shapes.prototype.halfHeight = function () {
    return this.height / 2;
}
//Retorna a posição do centro do objeto no eixo X
shapes.prototype.centerX = function () {
    return this.posX + this.halfWidth();
}
//Retorna a posição do centro do objeto no eixo Y
shapes.prototype.centerY = function () {
    return this.posY + this.halfHeight();
}