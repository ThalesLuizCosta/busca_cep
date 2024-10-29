const buscaCep = () => {
    const cep = document.getElementById('cep').value;
    const cepError = document.querySelector('.cep_error');

    const updated_cep = cep.replace(/\D/g, '');

    if (!/[0-9]/.test(updated_cep) || !updated_cep || updated_cep.length !== 8) {
        cepError.style.display = 'block';
        return;
    }

    cepError.style.display = 'none';

    fetch(`https://viacep.com.br/ws/${updated_cep}/json/`)
        .then(resposta => resposta.json())
        .then(json => populaDados(json));
};

const populaDados = (json) => {
    const form = document.forms.cadastro;
    const {
        rua,
        cidade,
        bairro: distrito,
    } = form;

    const {
        logradouro,
        localidade,
        bairro
    } = json;

    rua.value = logradouro,
    cidade.value = localidade,
    distrito.value = bairro;
}