/* eslint-disable react/jsx-no-undef */
import react, {Component} from "react";
import {Form, FormGroup, Input, Label, Button} from "reactstrap"
import Header from "../../components/Header";


export default class Login extends Component{
    render(){
        return(
            <div className="Collector">
                <Header title="Área de Login Couch Zupper"/>
                <hr/>
               <Form>
               <FormGroup>
                   <Label for="email">Email</Label>
                    <Input type ="text" id ="email" placeholder="Informe seu email:"/>
               </FormGroup>
               <FormGroup>
                   <Label for="password">Senha</Label>
                    <Input type ="password" id ="senha" placeholder="Informe a sua senha:" />
               </FormGroup>
               <Button color ="primary" block>Entrar</Button>
           </Form>
           </div>  
        );
    }
}