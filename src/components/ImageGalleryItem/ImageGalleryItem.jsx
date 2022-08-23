import { GalleryImage, GalleryItem } from "./ImageGalleryItem.styled"

export const ImageGalleryItem = ({ images }) => {
    return (
        <>
            {images.map(({ id, webformatURL, largeImageURL }) => (
            <GalleryItem key={id}>
                <GalleryImage src={webformatURL} alt={largeImageURL} />
            </GalleryItem>
            ))}
       
        </>
    )
}