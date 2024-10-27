const ImageCard = ({ image, handleImageClick }) => 
  <div>
    <img src={image.urls.small} alt={image.alt_description} onClick={()=>handleImageClick(image.urls.regular)}/>
  </div>

export default ImageCard