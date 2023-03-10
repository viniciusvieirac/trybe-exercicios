const custo = 2;
const valorVenda = 5;

if (custo >=0 && valorVenda >=0){
    const custoTotal = custo * 1.2;
    const lucro = (valorVenda - custoTotal) * 1000;
    console.log(lucro);
} 
else {
    console.log("Error, os valores não podem ser negativos");
};