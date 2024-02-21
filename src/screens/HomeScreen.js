import React, { useState } from "react";
import { View, Text, Button, TextInput, SafeAreaView, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default HomeScreen = () => {
  const navigation = useNavigation();
  const [note, setNote] = useState("");

  const navigateToDetailsScreen = () => {
    navigation.navigate('YENİ NOT', { note: note });
  };

  return (
    <SafeAreaView style={styles.background}>
      <View style={{ width: 100, height: 75, justifyContent: 'center', alignItems: 'center' }}>

        <TextInput
          style={{ width: 400, height: 30, borderWidth: 2, borderColor: 'black', padding: 7, top: -250 }}
          placeholder="Notlarda Ara"
          value={note}
          onChangeText={setNote}
        />
        <Button
          style={{ width: 200, height: 200, top: 150, borderWidth: 2, borderColor: 'black' }}
          title="NOT EKLE"
          onPress={navigateToDetailsScreen}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: 'brown',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },

});
