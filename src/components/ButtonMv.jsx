import PropTypes from "prop-types"

const ButtonMv = ({className}) => {
    return (
        <button className={`text-[8px] uppercase border-[1px] cursor-pointer border-gray-800 text-gray-800 rounded-[4px] p-[2px] font-[600] ${className}`}>
            mv
        </button>
    )
}

ButtonMv.propTypes = {
    className: PropTypes.node.isRequired
}

export default ButtonMv