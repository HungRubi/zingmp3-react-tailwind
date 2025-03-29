import { ButtonCricle } from '../components';
import PropTypes from 'prop-types';
import icons from '../util/icons';
const { MdPlayArrow } = icons;

const ButtonPlay = ({ className }) => {
    return (
        <ButtonCricle className={`bg-transparent border !h-9 !w-9 ${className}`}>
            <MdPlayArrow className={`text-2xl`} />
        </ButtonCricle>
    );
};

ButtonPlay.propTypes = {
    className: PropTypes.string.isRequired
};

export default ButtonPlay;
