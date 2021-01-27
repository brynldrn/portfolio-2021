import dp from '../../assets/images/dp.jpg';

const Header = () => {
  return (
    <header className="header">
      <div className="header__container grid-container">
        <figure className="header__image">
          <img src={dp} alt="Profile"/>
        </figure>
        <div className="header__block">
          <h1>Bryan Aldrin Quinalayo | <span>Full Stack Web Developer</span></h1>
          <p>Hi! I'm Bryan, a Full Stack Web Developer. If you need any work done, you can reach me with the links below. Thanks!</p>
        </div>
      </div>
    </header>
  );
}

export default Header;