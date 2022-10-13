// MONTA OS QUADRADOS(ROBÔS E OBSTÁCULOS)
const quadrado = function (posX, posY, width, height, color, velocidade) { //parametros
    this.posX = posX; //this é umca constante, ou seja: peque a posição x DESSE objeto
    this.posY = posY;
    this.width = width;
    this.height = height;
    this.color = color;
    this.velocidade = velocidade; //é o que faz andar, ele está literalmente se movendo? Não, ele sendo reposicionado
} //isso está passando todas as propriedades(td o que compôem o objeto)