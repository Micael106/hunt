import { createStackNavigator } from 'react-navigation'

import Main from './pages/main'

export default createStackNavigator({
  Main
}, {
  navigationOptions: {
    headerStyle: {
      backgroundColor: '#EEE'
    },
    headerTintColor: "#555"
  }
})
