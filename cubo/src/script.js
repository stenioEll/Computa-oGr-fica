function Iniciar(){
    // Estanciando objeto.função /Criando cena que recebe um objeto da biblioteca three
    var scene = new THREE.Scene(); 

    var WIDTH = window.innerWidth //tamanho da cena, largura
    var HEIGHT = window.innerHeight // tamanho da janela no browser

     // variavel que contém o objeto da camera
    var camera = new THREE.PerspectiveCamera(45, 1, 0.1, 1000 );
    
    //parametros(fov = campo de visão, dimensão da janela para os objetos em cena nao ficarem destorcidos)
    // NEAR = distância da lente em relação ao elemento, quanto menor o numero for o elemento estara mais perto
    // Fear =  limite de distancia de renderização mundo gigante em 3d e conforme a configuração não irá pesar no computador

    camera.position.z = 800;
    //Z como profundidade, podemos mudar o valor, pois quanto maior, mais longe a camera vai esta


    //objeto de renderização
    
    var renderer = new THREE.WebGLRenderer({antilias : true});//existem outros tipos{antiliasevita serrilhado no objeto 3d}
    renderer.setSize(500,500);//Tamanho da renderização, significar que vamos renderizar o tamanho da janela inteira

    var show = document.getElementById('area');
    //Aplicamos o objeto de renderização la no body

    show.appendChild(renderer.domElement); 
    //definir a cor de fundo da renderização(CORES EM HEXADECIMAL APOS 0X)
    renderer.setClearColor(0xA87643);
    
    //Definindo o formato do objeto, escolhi cubo
    var geometry = new THREE.BoxGeometry(200, 200, 200) // contém a geometria do objeto(largura, altura e profundidade do cubo)
    
    //Definindo o material do cubo
    var material = new THREE.MeshBasicMaterial({ color: 0xC9C097, wireframe: true});// wireframe exibe o esqueleto do objeto
    //Definindo textura do material
    const texture = new THREE.TextureLoader().load('texturas/crate.gif');
    var material = new THREE.MeshBasicMaterial({ map: texture});

    //Criando textura
    //renderizando de fato o cubo
    var cube = new THREE.Mesh(geometry, material);

    //adicionar o cubo na cena
    scene.add(cube);

    //Dentro do objeto de renderização(cubo) colocamos como parametros da cena e camera
    renderer.render(scene, camera);

    //Função para renderizar
    function animate(){

        //Atualização de frame
        requestAnimationFrame(animate);
        cube.rotation.z += 0.01;
        cube.rotation.y += 0.01;
        cube.rotation.x += 0.01;
         //criando animação para o cubo(+=para que ele se repita)
        renderer.render(scene, camera);

    }

    animate();
}
//Executar quando abrir o html
window.onload = Iniciar;