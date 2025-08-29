//Importaçoes de bibliotecas
import { useState, useRef } from 'react'
import { v4 } from 'uuid'
import './App.css'


//Função principal
function App() {

  //Variaveis de estado e referencias
  const [produto, setProduto] = useState([])
  const ref = useRef()


  //Conteudo principal
  return (
    <div id='app-container'>
      <h1>Lista de compras</h1>
      <input placeholder="Produto:" type="text" ref={ref} />
      <button id='add' onClick={adicionar}>Adicionar</button>

      <ul>
        {
          produto.map((produto) => (
            <div id='item' key={produto.id}>
              <li><div>{produto.nome}</div></li>
              <button id='del' onClick={() => del(produto.id)}>❌</button>
            </div>
          ))
        }
      </ul>
    </div>
  )


  //Funções internas
  function adicionar() {
    setProduto([{ id: v4(), nome: ref.current.value }, ...produto])
    ref.current.value = ''
  }

  function del(id) {
    setProduto(produto.filter((produto) => produto.id !== id))
  }
}

export default App