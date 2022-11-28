/* no java script só inicia com  letra maiúscula quando trabalhamos com classes,
sempre quando vamos criar um modelo utilizamos letra maiúscula
 como (User) abaixo */
/*
function User(nome, email) {
  //propriedades
  this.nome = nome
  this.email = email

  this.exibirInfos = function () {
    return `${this.nome}, ${this.email}`
  }
}
*/
/* modelo 1
const novoUser = new User('Juliana', 'j@j.com')
console.log(novoUser.exibirInfos())
*/

/* modelo 2 com Admin */
//function Admin(role) { 
  /* this é o contexto de User que vamos aproveitar dentro de Admin
  e passando as proipriedades 'Juliana', 'j@j.com' para usar dentro de Admin */
 // User.call(this, 'Juliana', 'j@j.com')
  //this.role= role || 'estudante'
//}

/* Agora criamos o prototipo chamando as propriedades de User para dentro de admin */
/*Admin.prototype = Object.create(User.prototype)
const novoUser = new Admin('admin')
console.log(novoUser.exibirInfos())
console.log(novoUser.role)
*/

/* quando criamos um novo objeto a partir do new, qua chamamos de construtor
 User, que é uma função construtora
 O javaScript vai fazer duas coisas, Primeiro vai criar o novo objeto (novoUser)
 Depois vai  checar no (prototype) o que tem que ser encaixado na cadeia de protoripo
 que são as cadeias de User 
 onde User vai ser o prototipo de novoUser que está sendo criado
 e vai retornar o objeto criado no contexto do tal do this */

 const user = {
  init: function(nome, email) {
    this.nome = nome
    this.email = email
  },

  exibirInfos: function() {
    return this.nome
  }
}

const novoUser = Object.create(user)
novoUser.init('Juliana', 'j@j.com')
console.log(novoUser.exibirInfos())
