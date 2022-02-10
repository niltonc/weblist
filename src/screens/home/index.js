import React, { useState } from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  ScrollView,
  FlatList,
  Dimensions,
  KeyboardAvoidingView,
  SafeAreaView,
} from 'react-native';

import { MaterialCommunityIcons, Feather } from '@expo/vector-icons';
import { Checkbox } from 'galio-framework';

export default function Home({ navigation }) {
  const [input, setInput] = useState();
  const [allItems, setAllItems] = useState([]);
  const [allSelects, setAllSelects] = useState([]);
  const [isSelected, setIsSelected] = useState(false);

  /* ADICIONAR OS ELEMENTOS */
  const addElement = () => {
    const timestamp = new Date().getDate();
    const newArray = [...allItems, { id: timestamp, title: input }];
    allItems.push({ id: timestamp, title: input });
    setAllItems(newArray);
  };

  /* DELETAR ELEMENTO */
  const deleteElement = (element) => {
    const newArray = allItems.filter((item) => item != element);
    setAllItems(newArray);
    setAllSelects([]);
  };

  /* EDITAR */
  const editElement = () => {
    console.log('editar');
  };

  /*  */

  function Item({ item }) {
    return (
      <View style={styles.itemFlatlist}>
        <Checkbox
          color="blue"
          value={isSelected}
          onChange={(value) => {
            setIsSelected(value);
          }}
        />

        <Text
          style={[
            styles.textItem,
            {
              //  opacity: isSelected ? 0.5 : 1.0,
              textDecorationLine: setIsSelected ? 'none' : 'line-through',
              // color: isSelected ? '#6969FF' : '#0000FF'
            },
          ]}>
          {item?.title}
        </Text>

        <TouchableOpacity
          onPressOut={() => editElement()}
          style={{ margin: 5 }}>
          <Feather name="edit" size={20} color="blue" />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => deleteElement(item)}
          style={{ margin: 5 }}>
          <Feather name="trash" size={20} color="red" />
        </TouchableOpacity>
      </View>
    );
  }

  const renderItem = ({ item }) => <Item item={item} title={item.title} />;

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../../assets/background.png')}
        style={styles.backgroundImg}>
        {/* TITLE */}
        <View style={styles.titleContainer}>
          <View style={styles.title}>
            <Text style={styles.textTitle}>Lista de Compras</Text>
          </View>

          <View style={styles.itemCounter}>
            <Text style={styles.textTitle}>
              {allSelects.length}/{allItems.length}
            </Text>
          </View>
        </View>

        {/* FLATLIST */}
        <View style={styles.flatlistContainer}>
          <ScrollView>
            <FlatList
              data={allItems}
              renderItem={renderItem}
              keyExtractor={(item) => item.timestamp}
            />
          </ScrollView>
        </View>

        {/* ADICIONA O ITEM A LISTA  */}
        <KeyboardAvoidingView
          keyboardVerticalOffset={-185} // adjust the value here if you need more padding
          style={{ flex: 1 }}
          behavior="position">
          <View style={styles.insertItemContainer}>
            {/* view text input */}
            <View style={styles.textInputContainer}>
              <TextInput
                placeholder="Novo item da lista..."
                numberOfLines={1}
                style={styles.textInput}
                onChangeText={(text) => setInput(text)}
                value={input}
              />
            </View>

            {/* View button */}
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => addElement()}>
                <MaterialCommunityIcons name="plus" size={24} color="black" />
                <Text>ADD</Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#FEF5E7',
    flex: 1,
    justifyContent: 'center',
  },
  backgroundImg: {
    flex: 1,
    height: Dimensions.get('window').height,
    resizeMode: 'cover',
    width: Dimensions.get('window').width,
  },
  titleContainer: {
    backgroundColor: 'transparent',
    flexDirection: 'row',
    height: 100,
    marginTop: 60,
    padding: 20,
    width: '100%',
  },
  title: {
    alignSelf: 'center',
    backgroundColor: 'transparent',
    justifyContent: 'center',
    width: 240,
  },
  textTitle: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
  itemCounter: {
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: 'transparent',
    justifyContent: 'center',
    width: 100,
  },

  flatlistContainer: {
    alignItems: 'center',
    backgroundColor: 'transparent',
    height: '65%',
    justifyContent: 'space-between',
    width: '100%',
  },

  itemFlatlist: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    elevation: 0.9,
    flexDirection: 'row',
    height: 45,
    justifyContent: 'center',
    marginBottom: 8,
    width: '100%',
  },

  insertItemContainer: {
    alignItems: 'center',
    backgroundColor: '#e85128',
    borderRadius: 10,
    flexDirection: 'row',
    height: 60,
    justifyContent: 'center',
    margin: 10,
  },
  textInputContainer: {
    alignItems: 'center',
    backgroundColor: '#1224',
    justifyContent: 'center',
    margin: 5,
    width: 200,
  },
  textInput: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    height: 40,
    padding: 10,
    width: 220,
  },
  buttonContainer: {
    alignItems: 'center',
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    margin: 5,
    width: 90,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    elevation: 6,
    flexDirection: 'row',
    height: 40,
    justifyContent: 'center',
    width: 80,
  },
  textItem: {
    backgroundColor: 'transparent',
    color: '#e85128',
    fontSize: 18,
    justifyContent: 'center',
    margin: 8,
    width: 190,
  },
});
