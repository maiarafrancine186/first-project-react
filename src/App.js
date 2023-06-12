import React, {useState} from 'react';
import avatar from './assets/avatar.svg';
import seta from'./assets/seta.svg';
import lixeira from'./assets/lixeira.svg';

import { Container, H1, Image, ContainerItens, 
  InputLabel, Input, Button,User } from './styles';



function App () {
  const [users, setUsers] = useState([]);
  const[name, setName] = useState();
  const[idade, setIdade] = useState();

    

  function addNewUser(){
    setUsers ([{id: Math.random(), name ,idade}])
  }

  function changeInputName(event){
    setName(event.target.value)
  }

  function changeInputIdade(event){
    setIdade(event.target.value)

  }

  return (
    <Container >
      <Image alt="logo-imagem" src= {avatar} />
      <ContainerItens>
      <H1>Olá!</H1>

      <InputLabel>Name</InputLabel>
      <Input onChange={changeInputName} placeholder='Name'/>

      <InputLabel>Idade</InputLabel>
      <Input onChange={changeInputIdade} placeholder='Idade'/>

      <Button>Cadastrar<img alt= "seta" src={seta} /> </Button>
      <ul>
        {users.map((user)=>(
        <User key={user.id}>
        <p>{user.name}</p>  <p>{user.age}</p>

        <button onClick={addNewUser}><img src={lixeira} alt="img-lixo"/></button>

          </User>
        ))}
      </ul>
      
      </ContainerItens>
      
      </Container>

  );

}

export default App