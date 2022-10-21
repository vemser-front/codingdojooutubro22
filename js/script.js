let exibir = document.querySelector('.nomeUser');

function adicionaUser(){
  const users = [
    { nome: 'Mr Marta Silva', email: 'marta@teste.com', role: 'User' },
    { nome: 'Mr Amanda Soares', email: 'amanda.soares@teste.com', role: 'Admin' },
    { nome: 'Mr Paula Silva', email: 'paula.silva@teste.com', role: 'User' },
    { nome: 'Mr Maria Jung', email: 'cristijung@yahoo.com.br', role: 'User' }
  ];

  let teste = users.map((user) => exibir.innerHTML = user.nome);
  console.log(teste)
};