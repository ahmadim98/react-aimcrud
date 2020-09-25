import React from 'react';
import { Text, View,  TextInput } from 'react-native';
import { Button } from 'react-native-elements';
import DropDownPicker from 'react-native-dropdown-picker';
import NumericInput from 'react-native-numeric-input'
import { getProductByID } from '../API/Crud_API';


export default function AddEditForm(props){
    if(props.id=="add"){
        return (
            <View style={{alignItems: 'center'}}>
                <Text style={{fontSize: 30}}>Add New Product</Text>
                <Text style={{fontSize: 20,marginTop: 33,marginBottom:10}}>Product Name</Text>
                <TextInput
                style={{ height: 40,width: 250, borderColor: 'gray', borderWidth: 1, }}
                onChangeText={text => onChangeText(text)}
                value={''}
                />
                <Text style={{fontSize: 20,marginTop: 20,marginBottom:10}}>Product Type</Text>
                <DropDownPicker
                    items={[
                        {label: '1', value: 'food', icon: () => <Text style={{fontSize: 20}}>Food</Text>},
                        {label: '2', value: 'liquid', icon: () => <Text style={{fontSize: 20}}>Liquid</Text>},
                        {label: '3', value: 'meat', icon: () => <Text style={{fontSize: 20}}>Meat</Text>},
                    ]}
                    defaultValue={'food'}
                    containerStyle={{height: 40}}
                    style={{backgroundColor: '#fafafa'}}
                    itemStyle={{
                        justifyContent: 'flex-start'
                    }}
                    dropDownStyle={{backgroundColor: '#fafafa'}}
                    onChangeItem={item => setCountry(item.value)}
                />
                <Text style={{fontSize: 20,marginTop: 20,marginBottom:10}}>Product Quantity</Text>
                <NumericInput onChange={value => console.log(value)} />
                <View style={{marginTop: 25,}}>
                <Button
                title="Add"
                style={{width: 250}}
                onPress={() => Alert.alert('Simple Button pressed')}
                />
                </View>
            </View>    
          );
    }else{
        //var product= getProductByID(props.index.index)
        //console.log(product._id);
        return (
            <View style={{alignItems: 'center'}}>
                <Text style={{fontSize: 30}}>Edit Product</Text>
                <Text style={{fontSize: 20,marginTop: 33,marginBottom:10}}>Product Name</Text>
                <TextInput
                style={{ height: 40,width: 250, borderColor: 'gray', borderWidth: 1, }}
                onChangeText={text => onChangeText(text)}
                value={''}
                />
                <Text style={{fontSize: 20,marginTop: 20,marginBottom:10}}>Product Type</Text>
                <DropDownPicker
                    items={[
                        {label: '1', value: 'food', icon: () => <Text style={{fontSize: 20}}>Food</Text>},
                        {label: '2', value: 'liquid', icon: () => <Text style={{fontSize: 20}}>Liquid</Text>},
                        {label: '3', value: 'meat', icon: () => <Text style={{fontSize: 20}}>Meat</Text>},
                    ]}
                    defaultValue={'food'}
                    containerStyle={{height: 40}}
                    style={{backgroundColor: '#fafafa'}}
                    itemStyle={{
                        justifyContent: 'flex-start'
                    }}
                    dropDownStyle={{backgroundColor: '#fafafa'}}
                    onChangeItem={item => setCountry(item.value)}
                />
                <Text style={{fontSize: 20,marginTop: 20,marginBottom:10}}>Product Quantity</Text>
                <NumericInput onChange={value => console.log(value)} />
                <View style={{marginTop: 25,}}>
                <Button
                title="Confirm"
                style={{width: 250}}
                onPress={() => Alert.alert('Simple Button pressed')}
                />
                </View>
            </View>    
          );
    }
    
}