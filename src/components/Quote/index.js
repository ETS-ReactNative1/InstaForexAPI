import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import AppText from "../AppText";
import styles from './styles';

const Quote = ({ symbol, onOpen }) => (
    <TouchableOpacity onPress={onOpen}>
        <View style={styles.quote}>
            <AppText style={styles.text}>{symbol}</AppText>
        </View>
    </TouchableOpacity>
);

Quote.propTypes = {
    symbol: PropTypes.string,
    onOpen: PropTypes.func
};

Quote.defaultProps = {
    quote: '',
    onOpen: () => {}
};

export default Quote;
