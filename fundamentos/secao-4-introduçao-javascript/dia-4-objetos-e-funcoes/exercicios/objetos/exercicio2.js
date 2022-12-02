let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

  let info2 = {
    personagem: 'Margarida e Tio Patinhas',
    origem: 'Pato Donald e Christmas on Bear Mountain, Dells Four Color Comics #178',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald e O último MacPatinhas',
    recorrente: 'sim'
  };

  for (let index in info){
    if (
        index === 'recorrente' &&
        info[index] === 'Sim' &&
        info2[index] === 'Sim'
      ) {
        console.log('Ambos recorrentes');
      } else {
        console.log(info[index] + ' e ' + info2[index]);
      }
    
  };
