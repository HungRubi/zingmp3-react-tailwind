import PropTypes from "prop-types"

const Button = ({className, children, onClick}) => {
    return (
        <button 
            onClick={onClick}
            className={`flex items-center cursor-pointer justify-center px-5 py-[5px] bg-[hsla(0,0%,100%,0.3)] rounded-[100px] ${className} text-[#218888] font-[600]`}
        >
            {children}
        </button>
    )
}

Button.propTypes = {
    children: PropTypes.node,
    className: PropTypes.node,
    onClick: PropTypes.func
};

export default Button