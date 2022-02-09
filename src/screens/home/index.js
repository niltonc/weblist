import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, ImageBackground, StyleSheet, ScrollView, FlatList, } from 'react-native';
import { MaterialCommunityIcons, Feather  } from '@expo/vector-icons';


const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
    
  ];

  const Item = ({ title }) => (
    <View style={styles.list}>

        <TouchableOpacity onPress={() => selectItem()}
        >
        <Feather name="square" size={20} color="blue" />
				</TouchableOpacity>

                <Text style={[styles.textItem
                ]}> 
                {title}
                </Text>

                <TouchableOpacity onPressOut={() => editItem()} style={{margin:5}}>
				<Feather name="edit" size={20} color="blue" />
			</TouchableOpacity>

            <TouchableOpacity onPressOut={() => deleteItem() } style={{margin:5}}>
            <Feather name="trash" size={20} color="red" />
			</TouchableOpacity>

    </View>
  );

  const selectItem = () => {
      console.log('item selecionado')
  }

  const deleteItem = () => {
    console.log('item Deletado')
}

const editItem = () => {
    console.log('Iditar Item')
}


export default function Home({ navigation }) {
  
    const [input, setInput] = useState();
    const [allItems,setAllItems] = useState([]);

    const addElement = () => {
        const timestamp = new Date().getDate();
        var newArray = [...allItems , { id : timestamp, title: input }];
        allItems.push({ id: timestamp, title: input });
        setAllItems(newArray);
      }

        /* RENDER DO ITEM*/ 
    const renderItem = ({ item }) => (
        <Item title={item.title} />
      );   

    return (
        <View style={styles.container}>
         
            <ImageBackground source={require('../../../assets/background.png')}
                style={styles.backgroundImg}>
                {/* TITLE */}
                <View style={styles.titleContainer}>
                    
                    <View style={styles.title}>
                        <Text style={styles.textTitle}>Lista de Compras</Text>
                    </View>
                    
                    <View style={styles.itemCounter}>
                            <Text style={styles.textTitle}>5/{allItems.length}</Text>
                    </View>
                </View>

               {/* FLATLIST */}
                <View style={styles.flatlistContainer}>
                <ScrollView> 

                <FlatList
        data={allItems}
        renderItem={renderItem}
        keyExtractor={item => item.timestamp}
      />
          
                </ScrollView>
                </View>

                {/* ADICIONA O ITEM A LISTA  */}

               <View style={styles.insertItemContainer}>

                    {/* view text input */}
                    <View style={styles.textInputContainer}>
                        <TextInput placeholder="Novo item da lista..." 
                        numberOfLines={1}
                        style={styles.textInput}
                        onChangeText={(text)=>setInput(text)}
                        value={input}
                        />
                    </View>

                    {/* View button */}
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.button} onPress={()=>addElement()}>
                            <MaterialCommunityIcons name="plus" size={24} color="black" />
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: '#FEF5E7'
    },
    backgroundImg:{
        alignItems: 'center',
        flex: 1,
        height: '100%',
        justifyContent: 'center',
        width: '100%',
    },
    titleContainer:{
        backgroundColor: 'transparent', 
        flexDirection: 'row', 
        width: '100%', 
        height: 100,
        marginTop:60,  
        padding: 20,
    },
    title:{
        alignSelf: 'center', 
        justifyContent: 'center', 
        backgroundColor: 'transparent', 
        width: 240
    },
    textTitle:{
        fontSize: 20, 
        fontWeight: 'bold', 
        color: '#FFFFFF'
    },
    itemCounter:{
        alignSelf: 'center', 
        justifyContent: 'center', 
        width: 100, 
        backgroundColor: 'transparent', 
        alignItems: 'center' 
    }, 
    flatlistContainer:{
        backgroundColor: 'transparent', 
        width: '100%', 
        height: '60%', 
        alignItems: 'center',
        justifyContent:'space-between', 
        margin:10
    },
    list:{
        flexDirection: 'row',
     alignItems: 'center',
    justifyContent:'center',
    backgroundColor:'#FFFFFF',
    borderRadius:15,
    width: '100%',
    marginBottom: 8,
    height: 45
    },
    
    insertItemContainer:{
        flexDirection: 'row', 
        backgroundColor: "#e85128", 
        borderRadius: 10,
    },
    textInputContainer:{
        justifyContent:'center', 
        alignItems:'center'
    },
    textInput:{
        height: 40,
        margin: 12,
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#fff',
        width: 240
    },
    buttonContainer:{
        backgroundColor: 'transparent', 
        justifyContent: 'center', 
        alignItems: 'center', 
        width: 80
    },
    button:{
        backgroundColor: "#fff", 
        flexDirection: 'row', 
        height: 40, 
        width: 60, 
        alignItems: 'center', 
        justifyContent: 'center', 
        borderRadius: 10,
        elevation:6
    },
    textItem:{
        color: '#e85128',
		fontSize: 18,
        backgroundColor:'transparent',
        width: 190,
        justifyContent:'center',
        margin: 8
    },
})