import "../styles/ExampleCards.css"
import { BsSun } from "react-icons/bs"

const ExampleCards = ({ handleSubmit }) => {

  const exampleItems = [
    {
      id: 1,
      text: 'Como eu faço uma requisição HTTP em Javascript?'
    },
    {
      id: 2,
      text: 'Explique o que é a máquina de Turing'
    },
    {
      id: 3,
      text: 'Como aprender uma línguagem de programação?'
    }
  ]

  return (
    <div className="examples_cards mt-2">
      <BsSun size={30} color="white" />
      <h2>Exemplos</h2>
      {exampleItems.map((item) => (
        <div key={item.id} className="example_item" onClick={(e) => handleSubmit(e.target.textContent)}>
          "{item.text}"
        </div>
      ))}
    </div>
  )
}

export default ExampleCards
