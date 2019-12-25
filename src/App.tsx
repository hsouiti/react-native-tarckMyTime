/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import * as React from 'react';
import { enableScreens } from 'react-native-screens';

import AppNavigator from './navigation/AppNavigator'
import { SafeAreaView } from 'react-native';


enableScreens();

const App = () => {
    return (
        <>
            <SafeAreaView>
                <AppNavigator />
            </SafeAreaView>
        </>
    );
};

const styles = StyleSheet.create({
});

export default App;
