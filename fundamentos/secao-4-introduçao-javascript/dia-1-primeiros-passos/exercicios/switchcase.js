let chessPiece = 'Rei';

switch (chessPiece.toLowerCase()){
    case 'bispo': console.log ('Bispo -> diagonal');
    break
    case 'rei': console.log("Rei -> uma casa apenas para qualquer direção");
    break
    case 'rainha': console.log("Rainha -> Diagonal, Horizontal, Vertical");
    break
    case 'cavalo':
    console.log('Cavalo -> "L" pode pular sobre as peças.');
    break;
  case 'torre':
    console.log('Torre -> Horizontal e vertical.');
    break;
  case 'peão':
    console.log("Peão -> Apenas uma casa para frente, no primeiro movimento podem ser duas casas.");
    break;
  default:
    console.log('Erro, peça inválida!');
    break;
};
