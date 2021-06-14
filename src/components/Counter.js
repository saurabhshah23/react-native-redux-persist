import React, {useState} from 'react';
import {View} from 'react-native';
import {Button, Text, useTheme} from 'react-native-paper';

export const Counter = () => {
  const theme = useTheme();
  const [count, setCount] = useState(0);
  const addCount = (step = 0) => {
    // console.log(`count=${count}==step=${step}=|`);
    setCount(Number(Number(count) + Number(step)));
  };
  return (
    <>
      <View>
        <View style={{margin: 5}}>
          <Text style={{color: theme.colors.primary, fontSize: 20}}>
            Counter Component: {count}
          </Text>
        </View>
        <View style={{flexDirection: 'row', margin: 5}}>
          <Button
            labelStyle={{paddingHorizontal: 20}}
            style={{marginHorizontal: 5}}
            compact
            mode="contained"
            onPress={() => addCount(1)}>
            +
          </Button>
          <Button
            labelStyle={{paddingHorizontal: 20}}
            style={{marginHorizontal: 5}}
            compact
            mode="contained"
            onPress={() => addCount(-1)}>
            -
          </Button>
        </View>
      </View>
    </>
  );
};
