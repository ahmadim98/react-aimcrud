import React from 'react';
import { Text, View} from 'react-native';
import { Button } from 'react-native-elements';

export default function ConfirmDelete(){
    return (
    <View style={{alignItems: 'center'}}>
        <Text style={{fontSize: 20}}>Are you sure you want to delete this item ?</Text>
        <View style={{marginTop: 25,}}>
          <Button
          title="Confirm"
          style={{width: 200}}
          onPress={() => Alert.alert('Simple Button pressed')}
          />
        </View>
    </View>
    );
}