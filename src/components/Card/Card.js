import { useState } from 'react';
import Modal from 'react-modal';
import ProjectInfo from '../ProjectInfo/ProjectInfo';

Modal.setAppElement('#root');

const Card = ({ id, content }) => {
  const { imageCap, name } = content;
  const [modalIsOpen, setIsOpen] = useState(false);

  const customStyles = {
    content : {
      padding: 0
    }
  };

  function openModal() {
    setIsOpen(!modalIsOpen);
  }
 
  function closeModal(){
    setIsOpen(!modalIsOpen);
  }

  return (
    <>
      <article onClick={openModal} className="card">
        <figure className="card__cover">
          <img src={imageCap.url} alt="Cover"/>
        </figure>
        <div className="card__overlay"></div>
        <div className="card__info"><span>{ name }</span></div>
      </article>
      <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Project Modal"
          closeTimeoutMS={300} 
          style={customStyles}
      >
        <ProjectInfo id={id} />
      </Modal>
    </>
  );
}

export default Card;