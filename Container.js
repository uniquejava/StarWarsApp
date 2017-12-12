import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Container = ({children}) => {
  return (
    <View style={styles.container}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black'
  }
});

export default Container;
