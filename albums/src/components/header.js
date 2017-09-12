/**
 * Created by tyhink on 6/29/17.
 */

// Import libraries for making a component
import React from 'react';
import { Text, View } from 'react-native';

// Make a component
const Header  = (props) => {
    const { textStyle, viewStyle } = styles;
    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    );
};

const styles = {
    textStyle: {
        fontSize:20,
        color: '#333'
    },
    viewStyle: {
        backgroundColor: '#f3f3f3',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2, },
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative',
    }
};



// Make component available for other parts of the app
export default Header;
