import ImageCard from '../ImageCard/ImageCard'
import css from './ImageGallery.module.css'

const ImageGallery = ({ images, handleImageClick}) => {
	 return (
    <ul className={css.ImageGallery}>
      {images.map((image) =>       
          <li key={image.id} className={css.ImageGalleryItem}>
            <ImageCard image={image} handleImageClick={handleImageClick}/>
          </li>       
      )}
    </ul>
  );
}

export default ImageGallery