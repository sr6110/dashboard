import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { convertColorToRGBA } from '../utils/utility';
import { implementationNeeded } from '../utils/sample';


const BanksFeatureCard = ({ bankCard }) => {
    const { logo, bankName, features, interestRate, color } = bankCard
    return (
        <div className={`border-white border-4 p-4 w-[48%]`} style={{ backgroundColor: convertColorToRGBA(color, 0.08) }}>
            <div className='flex items-center gap-2 pb-4'>
                <img src={`\images\/${logo}`} className='w-12 h-12' alt={`${bankName} logo`} />
                <h2 className='text-sm font-bold'>{bankName}</h2>
            </div>
            <div className='flex flex-wrap gap-2 py-4 items-center'>
                {features.length > 0 && features.map((feature, index) =>
                (<div key={index}
                    className='flex gap-x-2 items-center rounded-md px-2 py-1 text-sm'
                    style={{ backgroundColor: convertColorToRGBA(color, 0.1) }}>
                    {<FontAwesomeIcon icon={faCheck} className=' text-white rounded-full p-1 w-3 h-3' style={{ backgroundColor: convertColorToRGBA(color, 1) }} />}{feature}
                </div>))}
            </div>
            <div className='flex justify-between'>
                <div>
                    <div className='text-gray-500'>Interest Upto</div>
                    <div>{interestRate}% p.a</div>
                </div>
                <button className='rounded border-none px-4 py-2 text-white' style={{ backgroundColor: convertColorToRGBA(color, 1) }} onClick={implementationNeeded}>Book Now</button>
            </div>
        </div>
    )
}


export default BanksFeatureCard;