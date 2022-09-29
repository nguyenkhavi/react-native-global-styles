import React, { useEffect } from 'react'
import { View, Text } from 'react-native'
import { globalTextStyles } from 'react-native-global-styles'

const App = () => {
  useEffect(() => {
    console.log({globalTextStyles})
  })

  return <View>
    <Text style={globalTextStyles.fs14fw600}>Title</Text>
  </View>
}

export default App
