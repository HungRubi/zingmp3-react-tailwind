import { ButtonCricle } from '../components';
import PropTypes from 'prop-types';


const ButtonPlay = ({ className, children,onClick }) => {
    return (
        <ButtonCricle onClick={onClick} className={`bg-transparent border !h-10 !w-10 max-[1200px]:!h-8 max-[1200px]:!w-8 ${className}`}>
            {children}
        </ButtonCricle>
    );
};

ButtonPlay.propTypes = {
    className: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
};

export default ButtonPlay;
