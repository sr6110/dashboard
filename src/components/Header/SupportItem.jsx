import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SupportItem = ({ icon, textArr }) => (
    <div className="flex items-center text-[#3B39D9] gap-4 px-3 py-2">
        <FontAwesomeIcon icon={icon} />
        <div>
            {textArr.length > 0 && textArr.map((ele, index) => <div key={index}>{ele}</div>)}
        </div>
    </div>
)

export default SupportItem;