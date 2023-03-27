import { BsSendCheck } from "react-icons/bs"

const CardAction = ({ handleSubmit, setQuestionValue, value }) => {
  return (
    <div className="card_action flex items-center gap-x-3 relative rounded-md overflow-hidden border border-neutral-900">
      <input
        type="text"
        id="question_input"
        className="w-full rounded-md border-0 py-1.5 pl-3 sm:text-sm sm:leading-6 shadow-sm bg-neutral-800 text-white text-lg focus:outline-none"
        onChange={(e) => setQuestionValue(e.target.value)}
        value={value}
        autoComplete="off"
      />
      <button
        className="absolute inset-y-0 right-0 px-4 py-2 bg-transparent text-white flex items-center"
        onClick={handleSubmit}
      >
        <BsSendCheck />
      </button>
    </div>
  )
}

export default CardAction
