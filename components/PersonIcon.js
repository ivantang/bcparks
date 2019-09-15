import React from 'react';
import { Image } from 'react-native';
import blackPersonIcon from '../assets/images/blackPersonIcon.png';
import whitePersonIcon from '../assets/images/whitePersonIcon.png';
import blackPersonIcon2 from '../assets/images/blackPersonIconx2.png';
import whitePersonIcon2 from '../assets/images/whitePersonIconx2.png';

export function PersonIcon(props) {
    var { personType, size } = props;

    if (size != 'large'){
      return <Image source={personType === 'black' ? blackPersonIcon : whitePersonIcon}/>;
    } else {
      return <Image source={personType === 'black' ? blackPersonIcon2 : whitePersonIcon2}/>;
    }
}
