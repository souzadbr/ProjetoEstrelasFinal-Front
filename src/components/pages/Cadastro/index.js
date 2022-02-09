import react, { Component } from "react";
import { Form, FormGroup, Label, Input, Button, DropdownToggle, DropdownMenu } from "reactstrap";
import Header from "../../Header";

export default class Cadastro extends Component {

  constructor(props) {
    super(props);
    this.state = {
      message: this.props.state ? this.state.message : '',
      
    };
  }

  
  save = () => {
    const url = "http://localhost:8080/usuario";
    const data = {
      nome: this.nome,
      email: this.email,
      dataNascimento: this.dataNascimento,
      telefone: this.telefone,
      cep: this.cep,
      genero: this.genero,
      senha: this.senha,
      preferencia: {
        temPet: this.temPet,
        tipoDePet: this.tipoDePet,
        fumante: this.fumante,
        disponivelParaReceberUmZupper: this.disponivelParaReceberUmZupper,
        conteAlgoQueNaoPerguntamos: this.conteAlgoQueNaoPerguntamos,
      },
    };
    const requestInfo = {
      method: "POST",
      body: JSON.stringify(data),
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    };

    fetch(url, requestInfo)
      .then((response) => {
        this.props.history.push("/");
        return response
      })
      .catch(e => {
        this.setState({ message: e.message });
      });
      
  };

  render() {
    return (
      <div className="Cadastro">
        <Header title="Cadastre-se" />
        <hr />

        <Form>
          <div className="campo1">
            <FormGroup>
              <Label for="nome"> Nome: </Label>
              <Input
                type="text"
                id="nome"
                onChange={(e) => (this.nome = e.target.value)}
                placeholder="Seu nome completo"
              />
            </FormGroup>
            <FormGroup>
              <Label for="dataNascimento"> Data de Nascimento: </Label>
              <Input
                type="date"
                id="data"
                onChange={(e) => (this.dataNascimento = e.target.value)}
              />
            </FormGroup>
          </div>

          <FormGroup>
            <Label for="email"> Email: </Label>
            <Input
              type="text"
              id="email"
              onChange={(e) => (this.email = e.target.value)}
              placeholder="Seu email zup"
            />
          </FormGroup>

          <FormGroup>
            <Label for="email"> Senha: </Label>
            <Input
              type="password"
              id="senha"
              onChange={(e) => (this.senha = e.target.value)}
              placeholder="Digite uma senha"
            />
          </FormGroup>

          <FormGroup>
            <Label for="telefone"> Telefone: </Label>
            <Input
              type="tel"
              id="fone"
              onChange={(e) => (this.telefone = e.target.value)}
              placeholder="+xx (xx) x xxxx-xxxx"
            />
          </FormGroup>
          <FormGroup>
            <Label for="cep"> CEP: </Label>
            <Input
              type="text"
              id="cep"
              onChange={(e) => (this.cep = e.target.value)}
              placeholder="Sem espaços nem -"
            />
          </FormGroup>
          <FormGroup>
            <Label for="genero"> Gênero: </Label>
            <Input
              type="select"
              id="genero"
              onChange={(e) => (this.genero = e.target.value)}
            >
              <option selected>Selecione</option>
              <option value="FEMININO">
                Feminino
              </option>
              <option value="MASCULINO">
                Masculino
              </option>
              <option value="NAO_BINARIO">
                Não binário
              </option>
              <option value="OUTRO">
                Outro
              </option>
            </Input>
          </FormGroup>
          <div className="preferencias">
            <div>
              <FormGroup check>
                <Input 
                type="checkbox"
                defaultChecked ={this.temPet = false}
                onChange={(e) => (this.temPet = true)}
                />
                {' '}
                <Label check>
                  Possui algum Pet?
                </Label>
              </FormGroup>
              <FormGroup>
                <Label for="tipoDePet"> Qual o tipo do seu pet? </Label>
                <Input 
                type="select" 
                id="tipoDePet"
                onChange={(e) => (this.tipoDePet = e.target.value)}
                >
                  <option selected>Selecione</option>
                  <option value="NENHUM">
                    Não possuo Pet
                  </option>
                  <option value="CACHORRO">
                    Cachorro
                  </option>
                  <option value="GATO">
                    Gato
                  </option>
                  <option value="PASSAROS">
                    Pássaros
                  </option>
                  <option value="ANIMAIS_SILVESTRES">
                    Animais Silvestres
                  </option>
                  <option value="OUTROS">
                    Outros
                  </option>
                </Input>
              </FormGroup>
              <FormGroup check>
                <Input 
                type="checkbox" 
                defaultValue ={this.fumante = false}
                onChange={(e) => (this.fumante = true)}
                />
                {' '}
                <Label check>
                  É Fumante?
                </Label>
              </FormGroup>
              <FormGroup check>
                <Input 
                type="checkbox" 
                defaultValue ={this.disponivelParaReceberUmZupper = false}
                onChange={(e) => (this.disponivelParaReceberUmZupper = true)}
                />
                {' '}
                <Label check>
                  Está disponível para abrigar um Zupper?
                </Label>
              </FormGroup>
            </div>
            <FormGroup>
              <Label for="conteAlgoQueNaoPerguntamos"> Conte algo que não perguntamos </Label>
              <textarea
                class="form-control"
                id="conteAlgoQueNaoPerguntamos"
                rows="3"
                onChange={(e) => (this.conteAlgoQueNaoPerguntamos = e.target.value)}
                placeholder="Alguma observação que queira nos contar?"
              />
            </FormGroup>
          </div>

          <Button color="success" block onClick={this.save}>
            {" "}
            Cadastrar
          </Button>
        </Form>
      </div>
    );
  }
}