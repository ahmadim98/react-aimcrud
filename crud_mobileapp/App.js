import React, { useState } from 'react';
import { Appbar } from 'react-native-paper';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { Icon, Overlay } from 'react-native-elements';
import AddEditForm from './components/AddEditForm';
import ConfirmDelete from './components/ConfirmDelete';
import { DATA , getProducts } from './API/Crud_API';

export default function App() {
  //const [country, setCountry] = useState('uk');
  const [country, setCountry] = useState('food');
  const [refreshing, setRefreshing] = useState(false);
  const text = '';
  getProducts();

  const renderItem = ({ item }) => (
    <Item title={item.name} index={item._id}/>
  );

    const [addeditOverlay, setAddeditoverlay] = useState(false);
    const toggleAddedit= () => {
      setAddeditoverlay(!addeditOverlay);
    };

    const [deleteOverlay, setDeleteOverlay] = useState(false);
    const toggleDelete = () => {
      setDeleteOverlay(!deleteOverlay);
    };

    const [addeditCondition, setAddeditcondition] = useState('add');
    const toggleAddeditCondition= (value) => {
      setAddeditcondition(value);
    };

    const [index, setIndex] = useState('');
    const setNewIndex = (value) => {
      setIndex(value);
    };


    const Item = ({ title,index }) => (
      <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
        <Icon
          name='gear'
          type='evilicon'
          color='#686DD6'
          size= '50'
          onPress={() => {toggleAddeditCondition('edit'); setNewIndex({index});toggleAddedit();}}
        />
        <Icon
          name='close-o'
          type='evilicon'
          color='red'
          size= '50'
          onPress={() => toggleDelete()}
        />
    
      </View>
    );
    
    const wait = (timeout) => {
      return new Promise(resolve => {
        setTimeout(resolve, timeout);
      });
    }

    const handleRefresh = React.useCallback(() => {
      setRefreshing(true);
      getProducts();
      wait(10).then(() => setRefreshing(false));
    }, []);

  return (
    <View style={styles.container}>
      <Appbar.Header style={styles.appbarStyle}>
        <Appbar.Content title="AIM-CRUD" subtitle="v0.1" />
        <Appbar.Action icon="plus-circle-outline" onPress={() => {toggleAddeditCondition('add');toggleAddedit()}}/>
      </Appbar.Header>

      <FlatList
        data={DATA}
        refreshing={refreshing}
        onRefresh={handleRefresh}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        style={{marginTop: '2.5%'}}
      />

      <Overlay isVisible={addeditOverlay} onBackdropPress={toggleAddedit} overlayStyle={{height: 450,width: 300,}}>
        <AddEditForm id={addeditCondition} index={index}/>
      </Overlay>
      
      <Overlay isVisible={deleteOverlay} onBackdropPress={toggleDelete} overlayStyle={{height: 150,width: 250,}}>
        <ConfirmDelete />
      </Overlay>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  appbarStyle: {
    backgroundColor: '#f0f5f5',
  },
  item: {
    backgroundColor: '#e0ebeb',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 15, 
    overflow: 'hidden',
    flex: 1, flexDirection: 'row'
  },
  title: {
    fontSize: 32,
    color: 'black',
  },
});

