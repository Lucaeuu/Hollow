
let nomes = ['Elizabeth', 'Joui', 'Kaiser'];
console.log(nomes);
console.log("O tamanho do array nomes é: " + nomes.length);


nomes.push('Dante', 'Beatriz');
console.log("Após adicionar novos nomes: " + nomes);


nomes.unshift('Fernando');
console.log("Após adicionar um nome no início: " + nomes);


let removidoUltimo = nomes.pop();
console.log(`Removido o último nome: ${removidoUltimo}`);
console.log("Array restante: " + nomes);


let removidoPrimeiro = nomes.shift();
console.log(`Removido o primeiro nome: ${removidoPrimeiro}`);
console.log("Array restante: " + nomes);


let frutas = ['Maçã', 'Morango', 'mamao', 'Uva', 'Manga'];
frutas.splice(1, 2, 'Melancia', 'Abacaxi');
console.log("Array de frutas após alteração: " + frutas);


console.log("O tamanho do array de frutas é: " + frutas.length);


let historico = [];
historico.push("home", "sobre", "contato");
console.log("Histórico de páginas: " + historico);


let paginaRemovida = historico.pop();
console.log(`Saída da página: ${paginaRemovida}`);
console.log("Histórico atualizado: " + historico);


let cores = ['Preto', 'Roxo', 'Rosa', 'Vermelho'];
cores.splice(2, 1, 'Azul-Marinho');
console.log("Cores após alteração: " + cores);
