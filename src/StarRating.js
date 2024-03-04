import React, { useState } from 'react';
import { Star } from './Star';
import PropTypes from 'prop-types';




const containerStyle = {
    display: 'flex',
    alingItems: 'center',
    gap: '16px' 
};

const starContainerStyle = {
    display: 'flex',
    alignItems: 'center',
};






export const StarRating = ({ maxRating = 5, color='#fcc419', size='48', setMovieRating }) => {


    const [ rating, setRating ] = useState( 0 );   
    const [ tempRaiting, setTempRaiting ] = useState( 0 );   

    const textStyle = {
        lineHeight: '3',
        margin: '0',
        color,
        fontSize: `${ size / 1.5}px`,
    }; 


    const handleRaiting = ( index ) => {
        setRating( index );
    };



    return (

        
            <div style={ containerStyle }>

                <div style={ starContainerStyle }>
                    { 
                        Array.from({ length: maxRating }, ( _, i) => 
                            <Star 
                                key={ i }
                                full={ tempRaiting ? tempRaiting >= i + 1 : rating >= i + 1}
                                rating={ () => handleRaiting( i + 1 )}
                                tempRatingIn={ () => setTempRaiting( i + 1 )}
                                tempRatingOut={ () => setTempRaiting( 0 )}
                                color={ color }
                                size={ size }
                            />
                        )
                    }
                </div>
                <p style={ textStyle }>{ tempRaiting || rating || '' }</p>
            </div>


    );
};




StarRating.propTypes = {
    maxRating: PropTypes.number.isRequired
}