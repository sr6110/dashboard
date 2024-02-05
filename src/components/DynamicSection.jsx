import { memo } from "react";
import { implementationNeeded } from "../utils/sample";
import { formatNumber, parseDateString } from "../utils/utility";

const DynamicSection = ({ card, index, totalCards }) => {
    const { title, bankName, dateTitle, date, depositAmount, tenure, interestRate, buttons } = card;

    const { day, monthName, year } = parseDateString(date);

    return (
        <div className={`bg-white px-5 py-4 shadow ${index == 0 ? 'rounded-t-md border-b border-[#EBEBEB]' : index == totalCards - 1 ? 'rounded-b-md' : 'border-b border-[#EBEBEB]'}`}>
            <h1 className='text-xl'>{title}</h1>
            <div className='flex gap-x-4 py-4'>
                <div>
                    <div className='text-gray-500 text-sm'>{dateTitle}</div>
                    <div className='text-center py-2'>
                        <div className='text-4xl py-1 bg-gray-100 font-bold'>{day}</div>
                        <div className='text-sm bg-[#CE5151] px-2 py-1 text-white'>{monthName}, {year}</div>
                    </div>
                </div>
                <div>
                    <h2 className='text-xl'>{bankName}</h2>
                    <div className='flex gap-2 py-3'>
                        <div className='text-sm'>
                            <div className='text-gray-500'>Deposit Amt</div>
                            <div className='text-black text-sm font-bold'>Rs. {depositAmount}</div>
                        </div>
                        <div className='text-sm'>
                            <div className='text-gray-500'>Tennure</div>
                            <div className='text-black text-sm font-bold'>{tenure}</div>
                        </div>
                        <div className='text-sm'>
                            <div className='text-gray-500'>Interest Rate</div>
                            <div className='text-black text-sm font-bold'>{formatNumber(interestRate)}%</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex gap-2 justify-around'>
                {buttons && buttons.map((buttonText, index) =>
                    index === 0 ? <button key={index} className='w-1/2 text-base border-none bg-[#3B39D9] px-5 py-3 text-white rounded-md' onClick={implementationNeeded}>{buttonText}</button> :
                        <button key={index} className='w-1/2 border-2 px-5 py-3 rounded-md border-[#3B39D9] text-[#3B39D9]' onClick={implementationNeeded}>{buttonText}</button>
                )}
            </div>
        </div>
    )
}


export default memo(DynamicSection);