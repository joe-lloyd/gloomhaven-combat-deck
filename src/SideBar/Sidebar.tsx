import React from 'react';
import { useSpring, animated } from 'react-spring';
import './Sidebar.css';
import { useSidebar } from '../contexts/SidebarContext';
import CloseIcon from "../Icons/CloseIcon";
import {PerkList} from "../PerkList";

const Sidebar: React.FC = () => {
  const { isOpen, setIsOpen } = useSidebar();
  const props = useSpring({
    to: { transform: isOpen ? 'translateX(0%)' : 'translateX(100%)' },
    from: { transform: 'translateX(100%)' },
    config: { tension: 210, friction: 20, clamp: true },
  });

  return (
    <animated.div style={props} className="sidebar">
      <div className="close-icon" onClick={() => setIsOpen(false)}>
        <CloseIcon />
      </div>
      <h2>Scoundrel</h2>
      <PerkList />
    </animated.div>
  );
};

export default Sidebar;
