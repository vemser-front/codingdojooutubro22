let exibir = document.querySelector('.nomeUser');

function adicionaUser() {
  const users = [{
      nome: 'Mr Marta Silva',
      email: 'marta@teste.com',
      role: 'User'
    },
    {
      nome: 'Mr Amanda Soares',
      email: 'amanda.soares@teste.com',
      role: 'Admin'
    },
    {
      nome: 'Mr Paula Silva',
      email: 'paula.silva@teste.com',
      role: 'User'
    },
    {
      nome: 'Mr Maria Jung',
      email: 'cristijung@yahoo.com.br',
      role: 'User'
    }
  ];

  users.map((user) => exibir.innerHTML += `<tr><td>${user.nome}</td><td>${user.email}</td><td>${user.role}</td></tr>`);
  console.log(exibir)



};