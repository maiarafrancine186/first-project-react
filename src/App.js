import React, {useState,useRef} from 'react';
import avatar from './assets/avatar.svg';
import seta from'./assets/seta.svg';
import lixeira from'./assets/lixeira.svg';

import { Container, H1, Image, ContainerItens, 
  InputLabel, Input, Button,User } from './styles';



function App () {
  const [users,setUsers]= useState([]);
  const inputname = useRef()
  const inputage = useRef()
 
 
    

  function addNewUser(){
  setUsers ([...users,{id: Math.random(), name:inputname.current.value ,age:inputage.current.value}])
  }
   function deleteUser(userId){
    const newUsers = users.filter((user)=> user.id!== userId );

     setUsers(newUsers);
   }




  return (
    <Container >
      <Image alt="logo-imagem" src= {avatar} />
      <ContainerItens>
      <H1>Olá!</H1>

      <InputLabel>Name</InputLabel>
      <Input ref={inputname} placeholder='Name'/>

      <InputLabel>Idade</InputLabel>
      <Input ref={inputage} placeholder='age'/>

      <Button onClick={addNewUser}>Cadastrar<img alt= "seta" src={seta} /> </Button>
      <ul>
        {users.map((user)=>(
        <User key={user.id}>
        <p>{user.name}</p>  <p>{user.age}</p>

        <button onClick={()=>deleteUser(user.id)} ><img src={lixeira} alt="img-lixo"/></button>

          </User>
        ))}
      </ul>
      
      </ContainerItens>
      
      </Container>

  );

}

export default App