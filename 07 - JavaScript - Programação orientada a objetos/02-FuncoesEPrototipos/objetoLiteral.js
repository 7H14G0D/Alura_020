const user = {
  nome: "Juliana",
  email: "j@j.com",
  nascimento: "2021/01/01",
  role: "estudante",
  ativo: true,
  exibirInfos: function() {
    console.log(this.nome, this.email)
  }
}

const admin = {
  nome: "Thiago",
  email: "contato@thiagonet.com",
  nascimento: "1981/04/27",
  role: "admin",
  ativo: true,
  criarCurso () {
    console.log('curso criado')
  }
}
//                   (herda, sede) as propriedades de user (exibirInfos).
Object.setPrototypeOf(admin, user)
admin.criarCurso()
admin.exibirInfos()


