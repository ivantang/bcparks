import React from 'react';
import { Image } from 'react-native';
import blackPersonIcon from '../assets/images/blackPersonIcon.png';
import whitePersonIcon from '../assets/images/whitePersonIcon.png';

export function PersonIcon(props) {
    var { personType } = props;

    return <Image source={personType === 'black' ? blackPersonIcon : whitePersonIcon}/>;
}