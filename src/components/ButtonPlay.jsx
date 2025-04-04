import { ButtonCricle } from '../components';
import PropTypes from 'prop-types';
import icons from '../util/icons';
const { MdPlayArrow } = icons;

const ButtonPlay = ({ className, classIcon }) => {
    return (
        <ButtonCricle className={`bg-transparent border !h-9 !w-9 ${className}`}>
            <MdPlayArrow className={`text-2xl ${classIcon}`} />
        </ButtonCricle>
    );
};

ButtonPlay.propTypes = {
    className: PropTypes.string.isRequired,
    classIcon: PropTypes.node.isRequired
};

export default ButtonPlay;
