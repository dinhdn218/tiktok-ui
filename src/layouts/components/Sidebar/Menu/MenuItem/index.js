import Button from '@/components/Button';
import PropTypes from 'prop-types';

function MenuItem({ text, to, icon, activeIcon, overrideStyleClass }) {
  return (
    <Button
      overrideStyleClass={overrideStyleClass}
      leftIcon={icon}
      leftActiveIcon={activeIcon}
      toActive={to}
    >
      {text}
    </Button>
  );
}

MenuItem.propTypes = {
  text: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  overrideStyleClass: PropTypes.string,
};

export default MenuItem;
