import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import Icons from 'react-native-vector-icons/dist/FontAwesome';

const ListItem = (props)=>{
	return(
		<TouchableOpacity style={styles.listItem}>
			<View style={styles.listItemView}>
                <Text style={styles.listItemText}>
                    {props.name.text}
                </Text>
                <Icons name="remove" size={20} color="firebrick" onPress={() => props.deleteItem(props.name.id)} />
            </View>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	listItem: {
        padding: 15,
        backgroundColor: '#CFCFCF',
        borderBottomWidth: 0.5,
        borderTopWidth: 1,
        borderColor: "black",
    },
    listItemView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    listItemText: {
        fontSize: 20,
    },
});

export default ListItem;