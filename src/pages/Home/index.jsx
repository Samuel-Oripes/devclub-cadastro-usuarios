import { useRef } from 'react'
import api from '../../services/api'

import { Title, Container, ContainerInputs, Input, Form, InputLabel } from './styles'
import Button from '../../components/Button'
import TopBackground from '../../components/BackgroundTop'

function Home() {

  const inputName = useRef()
  const inputAge = useRef()
  const inputEmail = useRef()

  async function registerNewUser(){

    const data = await api.post('/usuarios', {
      email: inputEmail.current.value,
      age: parseInt(inputAge.current.value),
      name: inputName.current.value
    })
  }

  return (
    <Container>
      <TopBackground />
      <Form>
        <Title>Cadastrar Usuário</Title>

        <ContainerInputs>
          <div>
            <InputLabel>Nome <span>*</span>
              <Input type='text' placeholder='Nome do usuário' ref={inputName}/>
            </InputLabel>
          </div>
          <div>
            <InputLabel>Idade <span>*</span>
              <Input type='number' placeholder='Idade do usuário' ref={inputAge}/>
            </InputLabel>
          </div>
        </ContainerInputs>
        <div style={{ width: '100%' }}>
          <InputLabel>E-mail <span>*</span>
            <Input type='email' placeholder='E-mail do usuário' ref={inputEmail}/>
          </InputLabel>
        </div>
        <Button type='button' onClick={registerNewUser}>Cadastrar Usuário</Button>
      </Form>
    </Container>
  )
}

export default Home

