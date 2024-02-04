const ProfileDropdownContent = ({ items, onItemClick }) => (
    <div className="py-1">
        {items.map((item, index) => (
            <a
                key={index}
                href="#"
                className="flex gap-3 items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                onClick={() => onItemClick(item)}
            >
                <img src={item.icon} alt={item.alt} className="w-5 h-5" />
                {item.label}
            </a>
        ))}
    </div>
);

export default ProfileDropdownContent