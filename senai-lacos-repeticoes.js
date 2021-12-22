let totalAlunos = 10;

 for (let contadorAluno = 0; contadorAluno <= totalAlunos; contadorAluno++) {
console.log(contadorAluno);
    
     if (contadorAluno == 0) {
        console.log("O número atual é zero")
     }else if (contadorAluno % 2 == 0) {
         console.log("O número " + contadorAluno + " é par")
     } else {
         console.log(`O número ${contadorAluno} é ímpar`)
     }
 }

 let contadorAluno = 0;

 while (contadorAluno <= totalAlunos) {
     console.log(contadorAluno);
    
     if (contadorAluno == 0) {
         console.log("O número atual é zero")
     } else if (contadorAluno % 2 != 0) {
         console.log("O número " + contadorAluno + " é ímpar")
     } else {
         console.log(`O número ${contadorAluno} é par`)
     }
     contadorAluno++
 }

let listaAlunos = ["Cleusa", "Danilo", "Patricia", "Antonia"]

for (let aluno of listaAlunos) {
    console.log(`Este aluno se chama ${aluno}`)
}
