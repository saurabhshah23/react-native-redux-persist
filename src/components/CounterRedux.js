import React, {useState} from 'react';
import {View} from 'react-native';
import {Button, Text, useTheme} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {addThunk, decrement, increment} from '../redux/counterSlice';

export const CounterRedux = () => {
  const theme = useTheme();

  // withou Redux
  // const [count, setCount] = useState(0);
  // const addCount = (step = 0) => {
  //   setCount(Number(Number(count) + Number(step)));
  // };

  // REDUX
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();

  return (
    <>
      <View>
        <View style={{margin: 5}}>
          <Text style={{color: theme.colors.primary, fontSize: 20}}>
            CounterRedux Component: {count}
          </Text>
        </View>
        <View style={{flexDirection: 'row', margin: 5}}>
          <Button
            labelStyle={{paddingHorizontal: 20}}
            style={{marginHorizontal: 5}}
            compact
            mode="contained"
            onPress={() => dispatch(increment())}>
            Inc
          </Button>
          <Button
            labelStyle={{paddingHorizontal: 20}}
            style={{marginHorizontal: 5}}
            compact
            mode="contained"
            onPress={() => dispatch(decrement())}>
            Dec
          </Button>
        </View>
        <View style={{flexDirection: 'row', margin: 5}}>
          <Button
            labelStyle={{paddingHorizontal: 20}}
            style={{marginHorizontal: 5}}
            compact
            mode="contained"
            onPress={() => dispatch(addThunk())}>
            Add Thunk
          </Button>
          <Button
            labelStyle={{paddingHorizontal: 20}}
            style={{marginHorizontal: 5}}
            compact
            mode="contained"
            onPress={() => dispatch(addThunk(10))}>
            Add Thunk 10
          </Button>
        </View>
      </View>
    </>
  );
};
