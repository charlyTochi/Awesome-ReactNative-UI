import React from 'react';
import {View, Text, StyleSheet, Switch} from 'react-native';
import {CustomHeader} from '../CustomHeader'

const FiltersScreen = props => {
    return(
        <View style={styles.screen}> 
            <Text>The Filters Screen>!</Text>
            <Text style={styles.title}>Available Filters/ Restrictions</Text>
       <View style={styles.filterContainer}>
           <Text> Gluten-free</Text>
           <Switch />
       </View>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1, 
        alignItems: 'center'
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 22,
        margin: 20,
        textAlign: 'cneter'
    },
    filterContainer: {
        flexDirection: 'row',
        justifyCOntent: 'space-around',
        alignItems: 'center'
    }
});


export default FiltersScreen;