import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import AnswerScreen from './src/AnswerScreen';
import AnswerScreen2 from './src/AnswerScreen2';
import ThankScreen from './src/ThankYouScreen';
import SaltHomeScreen from './src/HomeScreen';

export default createAppContainer(
  createSwitchNavigator(
    {
      Home: SaltHomeScreen,
      Answer: AnswerScreen,
      Answer2: AnswerScreen2,
      Thank: ThankScreen,
    },
    {
      initialRouteName: 'Home',
    },
  ),
);
