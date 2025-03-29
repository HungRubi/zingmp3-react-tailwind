import PropTypes from "prop-types"


const Button = ({className, children}) => {
    return (
        <div className={`flex items-center cursor-pointer justify-center px-5 py-2.5 bg-[hsla(0,0%,100%,0.3)] rounded-[100px] ${className} text-[#218888] font-[600]`}>
            {children}
        </div>
    )
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.node.isRequired
  };

export default Button