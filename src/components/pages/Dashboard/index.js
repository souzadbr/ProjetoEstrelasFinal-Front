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