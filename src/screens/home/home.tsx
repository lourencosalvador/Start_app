import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { View, Text, TouchableOpacity } from 'react-native';
 
export function Home() {
  const navigation = useNavigation();

  const openConfig = () => {
    navigation.navigate('Settings');
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'white' }}>
      <TouchableOpacity onPress={openConfig} style={{ paddingHorizontal: 32, paddingVertical: 4, backgroundColor: 'violet', borderRadius: 8 }}>
        <Text style={{ fontSize: 14, color: 'slategray' }}>Configurações</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}