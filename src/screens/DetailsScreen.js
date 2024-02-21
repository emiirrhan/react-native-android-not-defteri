import React, { useState } from "react";
import { View, Text, Button, TextInput, SafeAreaView, StyleSheet } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import firebase from "firebase/app";
import "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
 apiKey: "AIzaSyCrtefuPtOkEjtIUisxBDxDeoK2MEebDLQ",
 authDomain: "awesomeproject2-32551.firebaseapp.com",
 projectId: "awesomeproject2-32551",
 storageBucket: "awesomeproject2-32551.appspot.com",
 messagingSenderId: "910723275961",
 appId: "1:910723275961:web:33c6998a69632f17b7cf68",
 measurementId: "G-1QENCDQ0K3"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = firebase.firestore();



export default DetailsScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [note, setNote] = useState("");

  const saveNote = async () => {
    try {
      await db.collection("notes").add({
        note: note,
      });
      console.log("Not başariyla kaydedildi!");
      navigation.goBack();
      
      alert("Not başariyla kaydedildi!");
    } catch (error) {
      console.error("Not kaydedilirken hata oluştu: ", error);
    }
  };

  return (
    <SafeAreaView style={styles.background}>
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <TextInput
          style={{ width: 400, height: 400, borderWidth: 4, borderColor: "black", padding: 7, top: -50, borderRadius: 40 }}
          placeholder="Yeni not"
          value={note}
          onChangeText={setNote}
        />
        <Button style={{ justifyContent: "center", alignItems: "center" }} title="Save" onPress={saveNote} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: "orange",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

