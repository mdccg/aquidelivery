import './styles.css';

import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';

function Drawer({ open, setOpen, children }) {
  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setOpen(open);
  };

  return (
    <SwipeableDrawer
      anchor="right"
      open={open}
      onClose={toggleDrawer('right', false)}
      onOpen={toggleDrawer('right', true)}>
      {children}
    </SwipeableDrawer>
  );
}

export default Drawer;