import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, ImageBackground, StyleSheet, ScrollView, FlatList, Dimensions, KeyboardAvoidingView,SafeAreaView } from 'react-native';
import { MaterialCommunityIcons, Feather  } from '@expo/vector-icons';
import { Checkbox } from 'galio-framework';


export default function Home({ navigation }) {
  
    const [input, setInput] = useState();
    const [allItems,setAllItems] = useState([]);
    const [allSelects, setAllSelects] = useState([]);
    const [isSelected, setIsSelected]  = useState(false);
    
    /* ADICIONAR OS ELEMENTOS */
    const addElement = () => {
        const timestamp = new Date().getDate();
        var newArray = [...allItems , { id : timestamp, title: input }];
        allItems.push({ id: timestamp, title: input });
        setAllItems(newArray);
      }

    /* DELETAR ELEMENTO */
    const deleteElement = (element) => {
        const newArray = allItems.filter(function (item) {
          return item != element;
        })
        setAllItems(newArray);
        setAllSelects([]);
      }

      /* EDITAR */
      const editElement = () =>{
          console.log('editar')
      } 
      
      function Item ({ item }) {      

        return (
            <View style={styles.itemFlatlist}>
    
        <Checkbox color="blue" value={isSelected} onChange={(value)=> {
            setIsSelected(value);
        }} />

                <Text style={[styles.textItem,
                {
                  //  opacity: isSelected ? 0.5 : 1.0,
                    textDecorationLine: setIsSelected ? 'none' : 'line-through',
                   // color: isSelected ? '#6969FF' : '#0000FF'
                }
                 ]}> 
                {item?.title}
                </Text>

                <TouchableOpacity onPressOut={() => editElement()} style={{margin:5}}>
                <Feather name="edit" size={20} color="blue" />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => deleteElement(item) } style={{margin:5}}>
            <Feather name="trash" size={20} color="red" />
            </TouchableOpacity>

    </View>
        )
      };

      const renderItem = ({ item }) => <Item item={item} title={item.title} />;

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
                            <Text style={styles.textTitle}>{allSelects.length}/{allItems.length}</Text>
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
                            <MaterialCommunityIcons 
                            name="plus" 
                            size={24} 
                            color="black" />
                            <Text>ADD</Text>
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
        flex: 1,
        resizeMode: 'cover',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
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
        height: '65%', 
        alignItems: 'center',
        justifyContent:'space-between', 
    },

    itemFlatlist:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'center',
    backgroundColor:'#FFFFFF',
    borderRadius:10,
    width: '100%',
    marginBottom: 8,
    height: 45,
    elevation:0.8
    },
    
    insertItemContainer:{
        backgroundColor:'#e85128',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        margin: 10,
        height:60,
        borderRadius:10,
    },
    textInputContainer:{
        backgroundColor:'#1224',
        justifyContent:'center', 
        alignItems:'center',
        width: 200,
        margin:5,        
    },
    textInput:{
        height: 40,
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#FFFFFF',
        width: 220,
    },
    buttonContainer:{
        flexDirection:'row',
        backgroundColor: 'transparent', 
        justifyContent: 'flex-end', 
        alignItems: 'center', 
        width: 90,
        margin:5,
    },
    button:{
        flexDirection:'row',
        backgroundColor: "#FFFFFF", 
        height: 40, 
        width: 80, 
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
        margin: 8,
    },
})