
import { View, Image } from 'react-native';

export function SliderDescription({ imageUrl }) {

 return (
   <View style={{flex: 2}}>
    <Image
        source={{uri: imageUrl}}
        style={{height: 300, backgroundColor: 'red'}}
    />
   </View>
  );
}