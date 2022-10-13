(function () {
    const cnv = document.querySelector('#canvas');
    const ctx = cnv.getContext('2d');

    //movimentos
    let moveLeft = false;
    let moveUp = false;
    let moveRight = false;
    let moveDown = false; //pq false? pq se n o bicho vai andar. E quando ele tem q andar? quando apertar a tecla

    // arrays
    const quadrados = []; //pq? preciso montar esse cara, para exibir na tela, jogar dentro do array pq se n, teria q criar uma variável para cada quadrado que vc desejaria colocar


    // quadrados
    const quadrado1 = new quadrado(20, 10, 50, 70, "#f60", 5); //velocidade é quanto ele empurra. 5 = px
    quadrados.push(quadrado1); //push coloca no fim do array

    const quadrado2 = new quadrado(100, 120, 550, 50, "#000", 0);
    quadrados.push(quadrado2);

    const quadrado3 = new quadrado(400, 350, 500, 50, "#000", 0); //dizendo como eu quero o quadrado
    quadrados.push(quadrado3);

    // pressionar as teclas
    window.addEventListener('keydown', function (e) { // Window = objeto de maior hierarquia (a janela) dps vem document | keydown = fica esperando a telca ser precionada | e = é um parâmetro, recebe a tecla que foi precionada. Pq e? pq é um nome padrão mas pode chamar de qualquer coisa. Pega toda e qualquer tecla precionada

        const nomeKey = e.key; //propriedade que retorna o nome da tecla (isso é nativo do js) | nesse e estou pegando o key, ou seja, o nome dessa tecla
        console.log(nomeKey);
        switch (nomeKey) { //pesquisar o que é swith
            case 'ArrowLeft': //case = se estiver armazenado aqui faz isso
                moveLeft = true;
                break; //break obrigatório do switch para sair do swith
            case 'ArrowUp':
                moveUp = true;
                break;
            case 'ArrowRight':
                moveRight = true;
                break;
            case 'ArrowDown':
                moveDown = true;
                break;
        }
    });

    //soltar as teclas  
    window.addEventListener('keyup', (e) => { //keyup = quando a tecla subir (quando ela deixar de ser precionada) | => == arrow function, uma notação mais nova
        const key = e.key;
        switch (key) {
            case 'ArrowLeft':
                moveLeft = false;
                break;
            case 'ArrowUp':
                moveUp = false;
                break;
            case 'ArrowRight':
                moveRight = false;
                break;
            case 'ArrowDown':
                moveDown = false;
                break;
        }
    });

    function moverQuadrados() {
        if (moveLeft && !moveRight) { //torna possível o movimento, e torna tbm impossível apertar esquerda e direita ao msm tempo
            quadrado1.posX -= quadrado1.velocidade;
        }
        if (moveRight && !moveLeft) {
            quadrado1.posX += quadrado1.velocidade;
        }
        if (moveUp && !moveDown) {
            quadrado1.posY -= quadrado1.velocidade;
        }
        if (moveDown && !moveUp) {
            quadrado1.posY += quadrado1.velocidade;
        }

        //fiixar na tela - NÃO SAI DO CANVAS - Precisa pensar em como fazer isso com o obstáculo
        quadrado1.posX = Math.max(0, Math.min(cnv.width - quadrado1.width, quadrado1.posX)); //Math.max = retorna o maior valor de um conjunto de valores; 12, 15, 20, 1000,  retorna 1000
        quadrado1.posY = Math.max(0, Math.min(cnv.height - quadrado1.height, quadrado1.posY));
    }


    function exibirQuadrados() {
        ctx.clearRect(0, 0, cnv.width, cnv.height); //clearRect = limpando o canvas (apagando todo o conteúdo do canvas)
        for (const i in quadrados) { //for in = substitui o for convencional; vai percorrer todo o array baseado no indice (n precisa deficnir o indice q omeça e termina e os incremetos)
            const spr = quadrados[i]; //spr = abreviação para sprit
            ctx.fillStyle = spr.color //fillStyle método para pintar alguém
            ctx.fillRect(spr.posX, spr.posY, spr.width, spr.height);
        }
    }
    //solicitar uma animação ao browser e chamar a função
    //que é a propria função atualizarTela
    function atualizarTela() {
        window.requestAnimationFrame(atualizarTela, cnv); //atualizarTela fica atualizando sempre | cnv = para o canvas ser limpo
        moverQuadrados();
        exibirQuadrados();
    }
    atualizarTela(); //chama a função

}()); //pq tá abrindo parentese antes da função? quando eu faço um (function(){}) eu estou encapsulando essa função e assim nenhuma variável vai funcionar fora dessa função