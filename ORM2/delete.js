const Usuario = require('./Usuario');

async function deletarUsuario() {
  try {
    await Usuario.destroy({ where: { nome: 'Maria Oliveira' } });
    console.log('Usuário deletado com sucesso!');
  } catch (error) {
    console.error('Erro ao deletar usuário:', error);
  }
}

deletarUsuario();