import PropTypes from 'prop-types';
import { GalleryImage, GalleryItem } from "./ImageGalleryItem.styled"

export const ImageGalleryItem = ({ images, onClick }) => {
    
    return (
        <>
            {images.map(({ id, webformatURL, largeImageURL }) => (
            <GalleryItem key={id}>
                    <GalleryImage src={webformatURL} onClick={()=>onClick(largeImageURL)} alt="" />
            </GalleryItem>
            ))}
        </>
    )
}

ImageGalleryItem.propTypes = {
    images: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.number.isRequired,
        webformatURL: PropTypes.string.isRequired,
        largeImageURL: PropTypes.string.isRequired,
    })).isRequired,
    onClick: PropTypes.func.isRequired,
}