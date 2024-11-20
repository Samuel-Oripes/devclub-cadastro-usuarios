import { Title, Container } from './styles'

function App() {

  const mytext = 'POPOPÓ'

  return (
    <>
      <Container>
        <h1 style={{color: 'blue', fontSize: 40}}>Meu texto</h1>
        <p>Olá</p>
      </Container>
      <div>
        <Title>{mytext}</Title>
      </div>
    </>
  )
}

export default App

