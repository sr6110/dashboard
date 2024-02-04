import React, { useState } from 'react'
import userIcon from '/images/userIcon.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LogOutIcon from '/images/logOutIcon.svg';
import TransactionIcon from '/images/transactionIcon.svg';
import FdIcon from '/images/Group130.svg';
import { faChevronDown, faChevronUp, faEnvelope, faPhoneVolume, faUserAlt } from '@fortawesome/free-solid-svg-icons';
import ProfileDropdownContent from './ProfileDropdownContent';
import SupportItem from './SupportItem';







const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    const dropdownItems = [
        { icon: userIcon, alt: 'profile icon', label: 'My Profile' },
        { icon: FdIcon, alt: 'fd icon', label: 'My FDs' },
        { icon: TransactionIcon, alt: 'transaction icon', label: 'My Transactions' },
        { icon: LogOutIcon, alt: 'logout icon', label: 'Logout' }
    ];
    const handleItemClick = (item) => {
        console.log(`Clicked on ${item.label}`);
    };
    return (
        <nav>
            <ul className='flex gap-4'>
                <li>Dashboard</li>
                <li>FAQs</li>
                <li>
                    <div className='relative'>
                        <a
                            onClick={toggleVisibility}
                        >
                            Support
                        </a>

                        {isVisible && (
                            <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-sm bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none text-sm divide-y">
                                <SupportItem icon={faPhoneVolume} textArr={['+91 88777 37777', '+91 88777 5666']} />
                                <SupportItem icon={faEnvelope} textArr={['support@silverbullet.in', 'info@silverbullet.in']} />
                            </div>
                        )}
                    </div>
                </li>
                <li>
                    <div className="relative inline-block text-left">
                        <div>
                            <button className="flex items-center w-full justify-center rounded-3xl bg-white px-3 py-2 text-sm font-semibold shadow-sm ring-1 ring-inset ring-[#4A4ED4] text-[#4A4ED4] hover:bg-gray-50 gap-1.5" onClick={() => setIsOpen(!isOpen)}>
                                <FontAwesomeIcon icon={faUserAlt} />

                                {isOpen ? (
                                    <FontAwesomeIcon icon={faChevronUp} className="w-2 h-2" />
                                ) : (
                                    <FontAwesomeIcon icon={faChevronDown} className="w-2 h-2" />
                                )}

                            </button>
                        </div>

                        {isOpen && (
                            <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-sm bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                {/* <ProfileDropdownContent /> */}
                                <ProfileDropdownContent items={dropdownItems} onItemClick={handleItemClick} />

                            </div>
                        )}
                    </div>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation