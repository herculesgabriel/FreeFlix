import config from '../config';

const URL_CATEGORIES = `${config.URL_TOP}/categorias`;

function getAll() {
  return fetch(`${URL_CATEGORIES}`)
    .then(async (respostaDoServidor) => {
      if (respostaDoServidor.ok) {
        const resposta = await respostaDoServidor.json();
        return resposta;
      }

      throw new Error('Não foi possível pegar os dados :(');
    });
}

function getAllWithVideos() {
  return fetch(`${URL_CATEGORIES}?_embed=videos`).then(async (res) => {
    if (res.ok) {
      const response = await res.json();
      return response;
    }

    throw new Error('Não foi possível carregar os dados :(');
  });
}

export default {
  getAllWithVideos,
  getAll,
};

