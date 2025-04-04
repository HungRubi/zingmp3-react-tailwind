import PropTypes from "prop-types"

const ButtonCircle = ({className, children, onClick}) => {
    return (
        <button onClick={onClick}
        className={`flex items-center justify-center bg-[hsla(0,0%,100%,0.3)] h-10 w-10 rounded-[50%] cursor-pointer ${className}`}>
            {children}
        </button>
    )
}

ButtonCircle.propTypes = {
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired,
    className: PropTypes.node.isRequired
  };

export default ButtonCircle