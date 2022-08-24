import PropTypes from 'prop-types'
import { ImageGalleryStyled } from "./ImageGallery.styled"

export const ImageGallery = ({ children }) => {
    return (
        <ImageGalleryStyled>
            {children}
        </ImageGalleryStyled>
    )
}

ImageGallery.propTypes = {
    children: PropTypes.element.isRequired,
}