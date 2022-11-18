let saldo = prompt("Informe o seu saldo inicial:");
saldo = parseFloat(saldo);
let opcao = "";

do {
  opcao = prompt(
    "Saldo Disponível: R$ " +
      saldo +
      "\n1. Adicionar Dinheiro" +
      "\n2. Remover Dinheiro" +
      "\n3. Sair"
  );

  switch (opcao) {
    case "1":
      saldo += parseFloat(prompt("Informe o valor a ser adicionado:"));
      break;
    case "2":
      saldo -= prompt("Informe o valor a ser removido:");
      break;
    case "3":
      alert("Saindo...");
      break;
    default:
      alert("Entrada Inválida.");
  }
} while (opcao !== "3");
