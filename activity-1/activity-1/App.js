import React from 'react';
import {View, Text, Image, ScrollView, TextInput} from 'react-native';

const App = () => {
  return (
    <ScrollView>
      <Text style={{
              textAlign:'center',}}>Tolentino, Jericho C.</Text>
      <View>
          <Text style={{
              textAlign:'center',}}>302</Text>
          <Image
            source={{
              uri: 'https://th.bing.com/th/id/OIP.09hR7F5lgs20WN-kXqbuGwHaNU?rs=1&pid=ImgDetMain',
            }}
            style={{width: 100, height: 200, alignSelf: 'center'}}
            />
          </View>
          <TextInput
            style={{
              textAlign:'center',
              height: 40,
              borderColor: 'gray',
              borderWidth: 1,
            }}
            defaultValue="You can type in me"
            />
          </ScrollView>
  );
};
export default App;