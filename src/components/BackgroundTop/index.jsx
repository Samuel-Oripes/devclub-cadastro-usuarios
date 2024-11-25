import UsersImage from '../../assets/users.png'
import { TopBackground } from './styles'

function Background(){

    return(
        <TopBackground>
            <img src={UsersImage} alt='imagem-usuarios' />
        </TopBackground>
    )
}

export default Background