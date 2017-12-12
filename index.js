import { AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';
import StarWars from './StarWars';
import People from './People';

const Navigation = StackNavigator({
  StarWars: {
    screen: StarWars
  },
  People: {
    screen: People
  }
});

AppRegistry.registerComponent('StarWarsApp', () => Navigation);
