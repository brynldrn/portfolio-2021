import facebook from '../../assets/images/facebook.svg';
import github from '../../assets/images/github.svg';
import linkedin from '../../assets/images/linkedin.svg';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul className="sidebar__socials">
        <li>
          <a target="_blank" href="https://facebook.com/bryanaldrin09">
            <img src={ facebook } alt="Facebook"/>
          </a>
        </li>
        <li>
          <a target="_blank" href="https://github.com/brynldrn">
            <img src={ github } alt="Github"/>
          </a>
        </li>
        <li>
          <a target="_blank" href="https://www.linkedin.com/in/bryan-aldrin-quinalayo-144097100/">
            <img src={ linkedin } alt="LinkedIn"/>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;