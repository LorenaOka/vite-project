import './App.css'
import ButtonFatec from './componets/Button/ButtonFatec'
import InputAtv from './componets/inputAtv/inputAtv'

function App() {

  return (
    <div className='fundo'>
     <p>
        Insira os dados
     </p>
     <InputAtv placeholder="Digite o seu e-mail" type="email"/> 
     <InputAtv placeholder="Digite seu telefone" type="tel" />
     <InputAtv placeholder="Digite sua senha" type="password" />
     <ButtonFatec type='button' label='confirmar'/>
     </div>
  )
}

export default App
