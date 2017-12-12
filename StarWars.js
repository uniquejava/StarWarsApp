import React, { Component } from 'react';
import {
  FlatList, Image,
  Platform,
  StyleSheet,
  Text, TouchableHighlight,
  View
} from 'react-native';
import Container from './Container';

const links = [
  {title: 'People'},
  {title: 'Films'},
  {title: 'StarShips'},
  {title: 'Vehicles'},
  {title: 'Species'},
  {title: 'Planets'},
];


export default class StarWars extends Component<{}> {
  static navigationOptions = {
    headerTitle: <Image style={{width: 110, height: 64}}
                        source={require('./sw.jpg')}/>,
    headerStyle: {backgroundColor: 'black', height: 110}
  };

  navigate = (link) => {
    const {navigate} = this.props.navigation;
    navigate(link);
  };

  constructor(props) {
    super(props);
    this.renderItem = this.renderItem.bind(this);
  }

  renderItem = ({item, index}) => {
    return (
      <TouchableHighlight
        onPress={() => this.navigate(item.title)}
        style={[styles.item, {borderTopWidth: index === 0 ? 1 : null}]}
      >
        <Text style={styles.text}>{item.title}</Text>
      </TouchableHighlight>
    );

  };

  render() {
    return (
      <Container>
        <FlatList
          data={links}
          keyExtractor={item => item.title}
          renderItem={this.renderItem}
        />
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  item: {
    padding: 20,
    justifyContent: 'center',
    borderColor: 'rgba(255,232,31, .2)',
    borderBottomWidth: 1
  },
  text: {
    color: '#ffe81f',
    fontSize: 18
  }
});
