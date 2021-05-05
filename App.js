import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import AlbumsScreen from './src/screens/AlbumsScreen';
import DetailsScreen from './src/screens/DetailsScreen';

const stackNavigator = createStackNavigator({
  Album: AlbumsScreen,
  Detail: DetailsScreen
});

const App = createAppContainer(stackNavigator)

export default App;
