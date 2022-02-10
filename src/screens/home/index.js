import React, { useState } from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  FlatList,
  KeyboardAvoidingView,
  Button,
  Alert,
} from 'react-native';

import { Feather } from '@expo/vector-icons';
import { Checkbox } from 'galio-framework';

import styles from './styles';

export default function Home({ navigation }) {
  const [input, setInput] = useState();
  const [allItems, setAllItems] = useState([]);
  const [allSelects, setAllSelects] = useState([]);

  const addElement = () => {
    const timestamp = new Date().getDate();
    const newArray = [...allItems, { id: timestamp, title: input }];
    allItems.push({ id: timestamp, title: input });
    setAllItems(newArray);
  };

  const deleteElement = (element) => {
    const newArray = allItems.filter((item) => item != element);
    setAllItems(newArray);
    setAllSelects([]);
  };

  const editElement = (element) => {
    console.log('editar');
  };

  function Item({ item }) {
    const [isSelected, setIsSelected] = useState(false);

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
              opacity: isSelected ? 0.5 : 1.0,
              textDecorationLine: isSelected ? 'line-through' : 'none',
              color: isSelected ? '#7A7AF6' : '#e85128',
            },
          ]}>
          {item?.title}
        </Text>

        <TouchableOpacity
          onPressOut={(item) => editElement(item)}
          style={{ margin: 5 }}>
          <Feather name="edit" size={20} color="blue" />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() =>
            Alert.alert(
              'Atenção',
              'Você tem certeza que deseja excluir este item?',
              [
                {
                  text: 'Cancel',
                  onPress: () => console.log('Cancel Pressed!'),
                },
                {
                  text: 'OK',
                  onPress: () => {
                    deleteElement(item);
                  },
                },
              ],
              { cancelable: false }
            )
          }
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
        <View style={styles.titleContainer}>
          <View style={styles.title}>
            <Text style={styles.textTitle}>Lista de Compras</Text>
          </View>

          <View style={styles.itemCounter}>
            <Text style={styles.textTitle}>
              {Item.length}/{allItems.length}
            </Text>
          </View>
        </View>

        <View style={styles.flatlistContainer}>
          <ScrollView>
            <FlatList
              data={allItems}
              renderItem={renderItem}
              keyExtractor={(item) => item.timestamp}
            />
          </ScrollView>
        </View>

        <KeyboardAvoidingView style={{ flex: 1 }} behavior="height">
          <View style={styles.insertItemContainer}>
            <View style={styles.textInputContainer}>
              <TextInput
                placeholder="Novo item da lista..."
                numberOfLines={1}
                style={styles.textInput}
                onChangeText={(text) => setInput(text)}
                value={input}
              />
            </View>

            <View style={styles.buttonContainer}>
              <Button
                title="Add Item"
                onPress={() => addElement()}
                color="#0000ff"
              />
            </View>
          </View>
        </KeyboardAvoidingView>
      </ImageBackground>
    </View>
  );
}
