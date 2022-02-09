import React from 'react';
import { Text, View, TextInput, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Item from '../../components/item/index';

export default function Home({ navigation }) {
    return (
        
        <View style={styles.container}>
         
            <ImageBackground source={require('../../../assets/background.png')}
                style={styles.backgroundImg}>
                {/* TITLE */}
                <View style={styles.titleContainer}>
                    
                    <View style={styles.title}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#FFFFFF' }}>Lista de Compras</Text>
                    </View>
                    
                    <View style={styles.itemCounter}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#FFFFFF' }}>1/2</Text>
                    </View>
                </View>

               {/* FLATLIST */}
                <View style={styles.flatlistContainer}>
                
                   {/* <Item
								//isCompleted={row.item.isCompleted}
								//textValue={row.item.textValue}
								//id={row.item.id}
								deleteTodo={this.deleteTodo}
								completeTodo={this.completeTodo}
								inCompleteTodo={this.inCompleteTodo}
							/> */}
                </View>

                {/* ADICIONA O ITEM A LISTA  */}

               
                <View style={styles.insertItemContainer}>

                    {/* view text input */}
                    <View style={styles.textInputContainer}>
                        <TextInput placeholder="Novo item da lista..." 
                        numberOfLines={1}
                        style={styles.textInput}
                        />
                    </View>

                    {/* View button */}
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.button}>
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
    itemCounter:{
        alignSelf: 'center', 
        justifyContent: 'center', 
        width: 100, 
        backgroundColor: 'transparent', 
        alignItems: 'center' 
    },
    flatlistContainer:{
        backgroundColor: '#1224', 
        width: '100%', 
        height: 450, 
        alignItems: 'center', 
        margin:10
    },
    insertItemContainer:{
        flexDirection: 'row', 
        backgroundColor: "#e85128", 
        borderRadius: 10,
        height: 65,
        justifyContent:'space-between',
        flexWrap:'wrap',
        alignItems:'center',
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
    }
})