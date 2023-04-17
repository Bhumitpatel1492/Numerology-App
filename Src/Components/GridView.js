import React, {Component} from 'react';
import {View, Text, StyleSheet, FlatList, Dimensions} from 'react-native';
import {moderateScale} from '../Utils/scalling';
import fonts from '../Utils/Fonts';

const GridView = () => {
  const data = [
    {id: 'a', value: 4444},
    {id: 'b', value: 999},
    {id: 'c', value: 22},
    {id: 'd', value: 33},
    {id: 'e', value: 555},
    {id: 'f', value: 777},
    {id: 'g', value: 88},
    {id: 'h', value: 111},
    {id: 'i', value: 6},
  ];
  const numColumns = 3;
  const size = Dimensions.get('window').width / numColumns;

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <View style={styles.itemContainer}>
            <Text style={styles.item}>{item.value}</Text>
          </View>
        )}
        keyExtractor={item => item.id}
        numColumns={numColumns}
      />
    </View>
  );
};

export default GridView;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignItems: 'center',
    borderRadius: 40,
    borderWidth: 1,
    // marginVertical: 20,
    backgroundColor: '#45357C',
    marginHorizontal: 10,
    paddingVertical: 20,
  },
  itemContainer: {
    width: 85,
    height: 85,
    opacity: 1,
  },
  item: {
    flex: 1,
    borderColor: '#FFFFFF',
    borderWidth: 1.2,
    color: '#FFFFFF',
    fontSize: moderateScale(35),
    textAlign: 'center',
    fontFamily: fonts.ATR,
  },
});
