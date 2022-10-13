var position = function (posX, posY, width, height, color) { //para saber se colidiu
    this.posX = posX;
    this.posY = posY;
    this.width = width;
    this.height = height;
    this.color = color;
    this.visible = true;
}

position.prototype.halfWidth = function () {
    return this.width / 2;
}
position.prototype.halfHeight = function () {
    return this.height / 2;
}

position.prototype.centerX = function () {
    return this.posX + this.halfWidth();
}
position.prototype.centerY = function () {
    return this.posY + this.halfHeight();
}