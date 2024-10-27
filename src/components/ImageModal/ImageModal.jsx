import css from "./ImageModale.module.css";
import Modal from "react-modal";

Modal.setAppElement("#root");

const ImageModal = ({ handleModalClose, fullImage }) => {
  return (
    <Modal
      className={css.Modal}
      isOpen={true}
      style={{
        overlay: {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: "999999",
          backgroundColor: "rgba(45, 45, 45, 0.3)",
          backdropFilter: "blur(5px)",          
        },
        content: {
          display: "flex",
          position: "relative",
          justifyContent: "center",
          alignItems: "center",
          border: "none",
          borderRadius: "0",
          padding: 0,
          width: "800px",
          height: "fit-content",
          opacity: 1,
          backgroundColor: "black",
          color: "black",
          inset: 0,
         
        },
      }}
      onRequestClose={handleModalClose}
    >
        <img src={fullImage} alt="full image" /> 
    </Modal>
  );
};

export default ImageModal;