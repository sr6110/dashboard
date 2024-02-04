import { implementationNeeded } from "../utils/sample";
import { truncateStringToWords } from "../utils/utility";

const FaqCard = ({ faq }) => {
    const { question, answer } = faq;
    return <div className='w-72 bg-white shadow p-5 rounded-md'>
        <h1 className='text-2xl'>{question}</h1>
        <p className='text-sm py-2'>{truncateStringToWords(answer, 15)}</p>
        <a onClick={implementationNeeded} className='cursor-pointer underline text-blue-500 text-sm'>Read more...</a>
    </div>
}

export default FaqCard;