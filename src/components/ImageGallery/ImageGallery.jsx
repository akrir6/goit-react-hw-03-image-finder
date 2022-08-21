import { ImageGalleryStyled } from "./ImageGallery.styled"

export const ImageGallery = ({ children }) => {
    return (
        <ImageGalleryStyled>
            {children}
        </ImageGalleryStyled>
    )
}