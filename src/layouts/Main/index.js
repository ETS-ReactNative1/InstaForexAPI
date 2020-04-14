import React from 'react';
import { View } from 'react-native';
import { PRIMARY_COLOR } from "../../constants/themes";
import { isIOS } from "../../services/detectDevice";
import Navigation from "../../navigation";
import AppStatusBar from "../../components/AppStatusBar";
import styles from './styles';

const Main = () => (
    <View style={styles.container}>
        <AppStatusBar
            backgroundColor={isIOS ? '#fff' : PRIMARY_COLOR}
            barStyle={isIOS ? 'dark-content' : 'light-content'}
        />

        <View style={styles.container}>
            <Navigation />
        </View>
    </View>
);

export default Main;