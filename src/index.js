function sum (numbers) {
    if (numbers.length === 0){
        return 0
    }
    if (numbers.length === 1){
        return numbers[0,0]
    }

    var soma = 0;
    for (let i = 0; i < numbers.length; i++) {
        soma += numbers[i];
      }
    return soma;
};

module.exports = sum