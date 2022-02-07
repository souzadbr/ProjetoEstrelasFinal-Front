import react, { Component } from "react";
import { Form, FormGroup, Label, Input, Button, DropdownToggle, DropdownMenu} from "reactstrap";
import Header from "../../Header";

export default class Landing extends Component {

  render(){
    return(
        <div className="Collector">
            <Header titulo="Cadastre-se"/>
            <hr/>
    
            <Form>
              <div className="campo1">
              <FormGroup>
                    <Label for="nome"> Nome: </Label>
                    <Input type="text" id="nome"placeholder="Seu nome completo" />
                </FormGroup>
                <FormGroup>
                    <Label for="dataNascimetno"> Data de Nascimento: </Label>
                    <Input type="date" id="data"/>
                </FormGroup>
              </div>
                
                <FormGroup>
                    <Label for="email"> Email: </Label>
                    <Input type="text" id="email"  placeholder="Seu email zup" />
                </FormGroup>
                
                <FormGroup>
                    <Label for="telefone"> Telefone: </Label>
                    <Input type="tel" id="fone" placeholder="+55 (99) 9999-9999" />
                </FormGroup>
                <FormGroup>
                    <Label for="cep"> CEP: </Label>
                    <Input type="text" id="cep" placeholder="Sem espaços" />
                </FormGroup>
                <FormGroup>
                    <Label for="genero"> Gênero: </Label>
                    <Input type="select" id="genero">
                      <option selected>Selecione</option>
                        <option>
                          Feminino
                        </option>
                        <option>
                          Masculino
                        </option>
                        <option>
                          Outros
                        </option>
                    </Input>
                </FormGroup>
                <div>
                  <div>
                  <FormGroup check>
                    <Input type="checkbox" />
                    {' '}
                    <Label check>
                      Possui algum Pet?
                    </Label>
                  </FormGroup>
                  <FormGroup>
                    <Label for="tipoDePet"> Caso possua, qual o tipo do seu pet? </Label>
                    <Input type="select" id="genero">
                      <option selected>Selecione</option>
                        <option>
                          Não possuo Pet
                        </option>
                        <option>
                          Cachorro
                        </option>
                        <option>
                          Gato
                        </option>
                        <option>
                          Pássaros
                        </option><option>
                          Animais Silvestres
                        </option>
                        <option>
                          Outros
                        </option>
                    </Input>
                </FormGroup>
                  <FormGroup check>
                    <Input type="checkbox" />
                    {' '}
                    <Label check>
                      É Fumante?
                    </Label>
                  </FormGroup>
                  <FormGroup check>
                    <Input type="checkbox" />
                    {' '}
                    <Label check>
                      Está disponível para abrigar um Zupper?
                    </Label>
                  </FormGroup>
                  </div>
                <FormGroup>
                    <Label for="observacoes"> Conte algo que não perguntamos </Label>
                    <textarea
                    class="form-control"
                    id="observacoes"
                    rows="3"
                    onChange={e => this.observacoes = e.target.value}
                    placeholder="Alguma observação que queira nos contar?"
                    />
                </FormGroup>
                </div>
                
                <Button color="success" block onClick={this.saveLead}>
                    {" "}
                    Cadastrar
                </Button>
                </Form>
            </div>
    );
}
}