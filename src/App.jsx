import { useState } from 'react'
import Header from './components/Header/Header'
import Piechart from './components/Piechart'
import TimelineChart from './components/TimelineChart';
import banksData from "./banksData.json";
import BanksFeatureCard from './components/BanksFeatureCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import DynamicSection from './components/DynamicSection';
import FaqCard from './components/FaqCard';
import { implementationNeeded } from './utils/sample';



const faqData = [
  {
    question: 'How FDs are taxed 1?',
    answer: 'Lorem ipsum dolor sit amet consec tetur adipisicing elit. Magnam quo enim molestias soluta, sit quasi amet tenetur minima dolorum, sint cum, maiores alias! Tempore amet ea sapiente, doloremque reprehenderit impedit.'
  },
  {
    question: 'How FDs are taxed 2?',
    answer: 'Lorem ipsum dolor sit amet consec tetur adipisicing elit. Magnam quo enim molestias soluta, sit quasi amet tenetur minima dolorum, sint cum, maiores alias! Tempore amet ea sapiente, doloremque reprehenderit impedit.'
  },
  {
    question: 'How FDs are taxed 3?',
    answer: 'Lorem ipsum dolor sit amet consec tetur adipisicing elit. Magnam quo enim molestias soluta, sit quasi amet tenetur minima dolorum, sint cum, maiores alias! Tempore amet ea sapiente, doloremque reprehenderit impedit.'
  },
  {
    question: 'How FDs are taxed 4?',
    answer: 'Lorem ipsum dolor sit amet consec tetur adipisicing elit. Magnam quo enim molestias soluta, sit quasi amet tenetur minima dolorum, sint cum, maiores alias! Tempore amet ea sapiente, doloremque reprehenderit impedit.'
  },
  {
    question: 'How FDs are taxed 5?',
    answer: 'Lorem ipsum dolor sit amet consec tetur adipisicing elit. Magnam quo enim molestias soluta, sit quasi amet tenetur minima dolorum, sint cum, maiores alias! Tempore amet ea sapiente, doloremque reprehenderit impedit.'
  },
  {
    question: 'How FDs are taxed 6?',
    answer: 'Lorem ipsum dolor sit amet consec tetur adipisicing elit. Magnam quo enim molestias soluta, sit quasi amet tenetur minima dolorum, sint cum, maiores alias! Tempore amet ea sapiente, doloremque reprehenderit impedit.'
  },
  {
    question: 'How FDs are taxed 7?',
    answer: 'Lorem ipsum dolor sit amet consec tetur adipisicing elit. Magnam quo enim molestias soluta, sit quasi amet tenetur minima dolorum, sint cum, maiores alias! Tempore amet ea sapiente, doloremque reprehenderit impedit.'
  },
  {
    question: 'How FDs are taxed 8?',
    answer: 'Lorem ipsum dolor sit amet consec tetur adipisicing elit. Magnam quo enim molestias soluta, sit quasi amet tenetur minima dolorum, sint cum, maiores alias! Tempore amet ea sapiente, doloremque reprehenderit impedit.'
  }
];

const dynamicSections = [
  {
    title: 'Video KYC',
    bankName: 'Utkarsh SF Bank FD Plan 2',
    dateTitle: 'Scheduled On',
    date: '2024-03-15',
    depositAmount: 20000,
    tenure: '2 years',
    interestRate: 9.10,
    buttons: ['Complete Now', 'Reschedule']
  },
  {
    title: 'Pending Payment',
    bankName: 'Bajaj Finserv Corp FD 1',
    dateTitle: 'Pay By',
    date: '2024-03-20',
    depositAmount: 25000,
    tenure: '18 months',
    interestRate: 8.10,
    buttons: ['Pay Now', 'Cancel Application']
  },
  {
    title: 'Upcoming FD Maturity',
    bankName: 'Shriram Finance Corp FD 1',
    dateTitle: 'Renew By',
    date: '2024-04-10',
    depositAmount: 25000,
    tenure: '18 months',
    interestRate: 8.10,
    buttons: ['Renew Now', 'Compare other FDs']
  }
];


function App() {
  const [startIndex, setStartIndex] = useState(0);
  const faqCardShown = 3;

  const handleNext = () => {
    if (startIndex === faqData.length - faqCardShown) return false;
    setStartIndex(startIndex + 1);
  }
  const handlePrev = () => {
    if (startIndex === 0) return false;
    setStartIndex(startIndex - 1);
  }

  return (
    <div >
      <Header />
      <main className='bg-[#F7F8FA] w-screen h-auto px-10 pb-5'>
        <h1 className='py-5 text-2xl'>Welcome, John Paul</h1>
        <section className='flex gap-4 mb-4'>
          <div className='w-1/3 bg-white shadow-md rounded'>
            <div className='flex justify-between px-4 pt-4'>
              <h2 >Your FD Portfolio</h2>
              <button className="flex items-center justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold shadow-sm ring-1 ring-inset ring-gray-300  hover:bg-gray-50 gap-1.5" onClick={implementationNeeded}>
                Deposit Amt
                <FontAwesomeIcon icon={faChevronDown} className="w-2 h-2" />
              </button>
            </div>
            <Piechart />
          </div>
          <div className='w-2/3 bg-white p-4 shadow-md'>
            <h2 className='mb-4'>FD Maturity Timeline</h2>
            <TimelineChart />
          </div>
        </section>
        <section className='flex gap-4'>
          <div className='w-8/12'>
            <div className='flex flex-wrap gap-6 justify-between'>
              {
                banksData && banksData.map((bank, index) => <BanksFeatureCard bankCard={bank} key={index} />)
              }
            </div>
            <div>
              <div className='py-4'>
                <h1 className='text-3xl'>Get Answer</h1>
                <div className='flex justify-between'>
                  <div>to all your questions</div>
                  <div className='flex gap-2'>
                    <FontAwesomeIcon icon={faChevronLeft} className={`cursor-pointer w-4 h-6 ${startIndex == 0 ? 'text-gray-400' : ''}`} onClick={handlePrev} />
                    <FontAwesomeIcon icon={faChevronRight} className={`cursor-pointer w-4 h-6 ${startIndex == faqData.length - faqCardShown ? 'text-gray-400' : ''}`} onClick={handleNext} />
                  </div>
                </div>
              </div>
              <div className='flex gap-4'>
                {faqData.slice(startIndex, startIndex + faqCardShown).map((obj, index) => <FaqCard key={index} faq={obj} />)}
              </div>
            </div>
          </div>
          <div className='flex flex-col  w-4/12'>
            {
              dynamicSections.length > 0 && dynamicSections.map((card, index) => <DynamicSection key={index} card={{ ...card, index, totalCards: dynamicSections.length }} />)
            }
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
