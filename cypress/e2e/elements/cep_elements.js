class cepElements {
    navigateCepArea = () => { return 'nav a[href="/cep"]' }
    inputCep = () => { return 'input[name="cep"]' }
    inputLogradouro = () => { return 'input[name="logradouro"]' }
    inputCidade = () => { return 'input[name="cidade"]' }
    inputEstado = () => { return 'input[name="estado"]' }
    buttonCadastrar = () => { return 'button[type="submit"]:contains("Cadastrar")' }
}

export default cepElements;