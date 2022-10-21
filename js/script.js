let exibir = document.querySelector(".nomeUser");
const adicionar = document.getElementById("adicionar");
const nome = document.getElementById("nome");
const email = document.getElementById("email");
const funcao = document.getElementById("funcao");

const users = [
  {
    nome: "Mr Marta Silva",
    email: "marta@teste.com",
    role: "User",
  },
  {
    nome: "Mr Amanda Soares",
    email: "amanda.soares@teste.com",
    role: "Admin",
  },
  {
    nome: "Mr Paula Silva",
    email: "paula.silva@teste.com",
    role: "User",
  },
  {
    nome: "Mr Maria Jung",
    email: "cristijung@yahoo.com.br",
    role: "User",
  },
];

users.map(
  (user) =>
    (exibir.innerHTML += `
    <tr>
      <td>${user.nome}</td>
      <td>${user.email}</td>
      <td>${user.role}</td>
      <td>
        <button class ="btn btn-primary" onclick ="editarNome(this)">Editar</button>
        <button class ="btn btn-danger" onclick="deletar(this.parentNode)">Deletar</button>
      </td>
    </tr>`)
);

adicionar.addEventListener("click", (e) => {
  e.preventDefault();
  users.push({
    nome: nome.value,
    email: email.value,
    role: funcao.value,
  });
  console.log(users);
  // console.log(nome.value)
});


console.log(exibir);


// function deletar(e) {
//   e.parentElement.remove();
// }

// function editarNome(e) {
//   e.parentElement[0].innerText = prompt("Digite um novo nome: ");
// }

