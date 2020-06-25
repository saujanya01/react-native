import React, {useState} from 'react'
import {View, Text, StyleSheet, FlatList, Alert} from 'react-native'
import Header from './components/Header'
import ListItem from './components/ListItem'
import AddItem from './components/AddItem'

const App = ()=>{
	let index = 0
	const [items, setItems] = useState([
		{id: index++, text: 'React and React Native'},
		{id: index++, text: 'Competitive Programming'},
		{id: index++, text: 'Placement Interview Prep'},
		{id: index++, text: 'Get Placed'},
	])

	const deleteItem = (id) => {
		setItems(prevItems => (
			prevItems.filter(item => item.id != id)
		))
	}

	const addItem = (itemName) => {
		if (!itemName){
			Alert.alert('Error','Please enter some ToDo',[{text: 'Ok'}])
		}
		else
		{
			setItems(prevItems => {
				return [{id: Math.random(), text: itemName}, ...prevItems]
			})
		}
	}

	return(
		<View style={styles.container}>
			<Header title="TODO  LIST"/>
			<AddItem addItem={addItem} />
			<FlatList 
			data={items}
			renderItem={
				({item}) => (
					<ListItem name={item} deleteItem={deleteItem}/>
				)
			}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white'
	},
	contents: {
		flex: 1,
		padding: 20,
		backgroundColor: 'pink',
	},
	text: {
		color: 'darkslateblue',
		fontSize: 30,
	}
});

export default App;