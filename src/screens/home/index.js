import React, { useState, useEffect } from 'react';
import {
  BackHandler,
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
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Checkbox } from 'galio-framework';

import styles from './styles';

export default function Home({ navigation }) {
  const [input, setInput] = useState();
  const [allItems, setAllItems] = useState([0]);

  const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('@storage_Key', jsonValue);
    } catch (e) {
      // saving error
    }
  };

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@storage_Key');
      const currentData = JSON.parse(jsonValue);
      setAllItems(currentData);
    } catch (e) {
      // getting error
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const addElement = () => {
    if (input !== '') {
      const timestamp = new Date().getDate();
      const arrayStructure = [...(allItems || [])];
      const newArray = [...arrayStructure, { id: timestamp, title: input }];
      storeData(newArray).then(() => {
        getData();
      });
    } else {
      return Alert.alert(
        'Atenção',
        'Você não pode adicionar um item sem um nome.',
        [
          {
            text: 'OK',
          },
        ],
        { cancelable: false }
      );
    }
  };

  const deleteElement = async (element) => {
    try {
      const newArray = allItems.filter((item) => item != element);
      storeData(newArray).then(() => {
        getData();
      });
    } catch (e) {
      // deleting error
    }
  };

  const editElement = (element) => {
    console.log('editar');
  };

  useEffect(() => {
    const backAction = () => {
      Alert.alert('Atenção!', 'Você realmente deseja sair do app?', [
        {
          text: 'Cancelar',
          onPress: () => null,
          style: 'cancel',
        },
        { text: 'Sim', onPress: () => BackHandler.exitApp() },
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction
    );

    return () => backHandler.remove();
  }, []);

  function Item({ item }) {
    const [isSelected, setIsSelected] = useState(false);
    return (
      <View style={styles.itemFlatlist}>
        <Checkbox
          label=""
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
            <Text style={styles.textTitle}>{allItems?.length || 0}</Text>
          </View>
        </View>

        <View style={styles.flatlistContainer}>
          {allItems.length != 0 ? (
            <ScrollView>
              <FlatList
                data={allItems}
                renderItem={renderItem}
                keyExtractor={(item) => item.timestamp}
              />
            </ScrollView>
          ) : (
            <View style={{ position: 'absolute', top: '50%' }}>
              <Text style={styles.textNenhumItem}>Nenhum item na lista...</Text>
            </View>
          )}
        </View>

        <KeyboardAvoidingView style={{ flex: 1 }}>
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
