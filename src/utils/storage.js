import { AsyncStorage } from 'react-native'

export const getData = key => {
  return AsyncStorage.getItem(key)
    .then(result => JSON.parse(result))
}

export const saveData = async (key, value) => {
  let data = await getData(key)

  console.log('savedData', data)

  if(!data){
    data = []
  }

  data.push(value)

  await AsyncStorage.setItem(key, [{ title: 'dsds' }])
}
