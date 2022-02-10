import PubSub from "pubsub-js";
import React, { Component } from "react";
import { Alert, Button, Form, FormGroup, Input, Label, Table } from "reactstrap";
import Header from "../../Header";

class ListarUsuarios extends Component {

    delete = (id) => {
        this.props.deleteUsuario(id);
    };

    onEdit = (usuario) => {
        PubSub.publish("edit-usuario", usuario);

    };

    render() {
        const { usuarios } = this.props;
        return (
            <div className="ListarUsuarios">
                <Header title="Usuários Cadastrados!" />

                <Table className="table-bordered text-center">
                    <thead className="thead-dark">
                        <tr>
                            <th>Nome</th>
                            <th>Idade</th>
                            <th>UF</th>
                            <th>Localidade</th>
                            <th>Data de Nascimento</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {usuarios.map((usuario) => (
                            <tr key={usuario.id}>
                                <td>{usuario.nome}</td>
                                <td>{usuario.idade}</td>
                                <td>{usuario.uf}</td>
                                <td>{usuario.localidade}</td>
                                <td>{usuario.dataNascimento}</td>
                                <td>
                                    <Button
                                        color="info"
                                        size="sm"
                                        onClick={(e) => this.onEdit(usuario)}
                                    >
                                        Editar
                                    </Button>
                                    <Button
                                        color="danger"
                                        size="sm"
                                        onClick={(e) => this.delete(usuario.id)}
                                    >
                                        Deletar
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        );
    }
}

class AtualizarDadosUsuario extends Component {

    state = {
        model: {
            nome: "",
            dataNascimento: "",
            cep: "",
            telefone: "",
            genero: "",

        },

    };

    componentWillMount() {
        PubSub.subscribe("edit-usuario", (topic, usuario) => {
            this.setState({ model: usuario });

        });
    }

    setValues = (e, field) => {
        const { model } = this.state;
        model[field] = e.target.value;
        this.setState({ model });
    };

    create = () => {
        this.setState({ model: { id: "", nome: "", dataNascimento: "", cep: "", telefone: "", genero: "" } });
        this.props.usuarioCreate(this.state.model);


    };

    render() {
        return (
            <div className="Dashboard">
                <Header title="Atualize seus dados!" />
                <hr />
                <Form>
                    <FormGroup>
                        <div className="form-row">
                            <Label for="nome"> Nome </Label>
                            <Input
                                id="nome"
                                type="text"
                                value={this.state.model.nome}
                                placeholder="Informe seu nome"
                                onChange={(e) => this.setValues(e, "nome")}
                            />
                        </div>
                    </FormGroup>
                    <FormGroup>
                        <div className="form-row">
                            <Label for="dataNascimento"> Data de Nascimento </Label>
                            <Input
                                id="dataNascimento"
                                type="date"
                                value={this.state.model.dataNascimento}
                                placeholder="Informe sua data de nascimento"
                                onChange={(e) => this.setValues(e, "dataNascimento")}
                            />
                        </div>
                    </FormGroup>
                    <FormGroup>
                        <div className="form-row">
                            <Label for="cep"> CEP </Label>
                            <Input
                                id="CEP"
                                type="text"
                                value={this.state.model.cep}
                                placeholder="Informe seu CEP"
                                onChange={(e) => this.setValues(e, "cep")}
                            />
                        </div>
                    </FormGroup>
                    <FormGroup>
                        <div className="form-row">
                            <Label for="telefone"> Telefone </Label>
                            <Input
                                id="telefone"
                                type="tel"
                                value={this.state.model.telefone}
                                placeholder="Informe seu telefone"
                                onChange={(e) => this.setValues(e, "telefone")}
                            />
                        </div>
                    </FormGroup>
                    <FormGroup>
                        <div className="form-row">
                            <Label for="genero"> Gênero </Label>
                            <Input
                                id="genero"
                                type="select"
                                value={this.state.model.genero}
                                placeholder="Informe seu gênero"
                                onChange={(e) => this.setValues(e, "genero")}
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
                        </div>
                    </FormGroup>
                    <Button color="primary" block onClick={this.create}>
                        ATUALIZAR
                    </Button>
                </Form>
            </div>
        );
    }

}
