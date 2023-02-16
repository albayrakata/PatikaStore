import React from "react";
import { Dimensions, FlatList, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";

import StoreCards from './components/patika_items';
import store_data from "./store_data.json";

const patikaStore = () => {
  const renderItem = ({ item }) => <StoreCards prod={item} />;
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        ListHeaderComponent={() => (
          <ScrollView horizontal showsHorizontalScrollIndicator>
            <Text style={styles.patika_title} >PATIKASTORE</Text>
            <TextInput
              style={styles.input}
              placeholder="useless placeholder"
            />
          </ScrollView>
        )}
        data={store_data}
        renderItem={({ item }) => <StoreCards prod={item} />}
        numColumns={2}

      />

    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    margin: 10

  },
  patika_title: {
    color: 'purple',
    fontSize: 30,
    fontWeight: 'bold',

  },
  input: {

    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  }

})


export default patikaStore;