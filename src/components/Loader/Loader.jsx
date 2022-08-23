 import PropTypes from 'prop-types'
import { Grid } from 'react-loader-spinner';

export const Loader = ({visible}) => {
    return (
        <Grid
            height="100"
            width="100"
            color="#3f51b5"
            ariaLabel="grid-loading"
            radius="12"
            visible={visible}
            wrapperStyle={{ justifyContent: 'center' }}
        />
    ) 
}

Loader.propTypes = {
    visible:PropTypes.bool.isRequired,
}

