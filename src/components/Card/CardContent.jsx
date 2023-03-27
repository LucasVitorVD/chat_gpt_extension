import { useState } from "react"
import ExampleCards from "./ExampleCards"
import CardAction from "./CardAction"
import axios from "axios"
import "../styles/CardContent.css"

const CardContent = () => {

  const [chatAnswer, setChatAnswer] = useState('')
  const [questionValue, setQuestionValue] = useState('')

  const client = axios.create({
    headers: { Authorization: `Bearer ${import.meta.env.VITE_API_KEY}` }
  })

  async function doRequest(messageValue) {
    try {
      const data = await client.post('https://api.openai.com/v1/chat/completions', {
      "model": "gpt-3.5-turbo",
      "messages": [{"role": "user", "content": `${messageValue}`}],
      "temperature": 0.7
    })
    
    typeWriterStyle(data['data']['choices'][0]['message']['content'])
    } catch (err) {
      console.log(err)
    }
  }

  function handleSubmit(exampleItem) {
    doRequest(questionValue || exampleItem)
    setQuestionValue('')
  }

  function typeWriterStyle(textValue) {
    const mainText = textValue.split('')
    let message = ''

    mainText.forEach((letter, i) => {
      setTimeout(() => {
        message += letter
        setChatAnswer(message)
      }, 25 * i);
    })
  }

  return (
    <div className="card_content flex-1 p-4 bg-red">
      {chatAnswer ? (
        <textarea
          className={`chat_answer_area w-full p-2 resize-none shadow-sm focus:outline-none ${chatAnswer ? 'bg-zinc-800' : 'bg-transparent'} text-white rounded`}
          readOnly
          value={chatAnswer}
        />
      ) : (
        <ExampleCards handleSubmit={handleSubmit} />
      )}
      
      <CardAction handleSubmit={handleSubmit} setQuestionValue={setQuestionValue} value={questionValue} />
    </div>
  )
}

export default CardContent
