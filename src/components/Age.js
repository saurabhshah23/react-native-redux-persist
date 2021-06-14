import React, {useState} from 'react';
import {View} from 'react-native';
import {Button, Text, TextInput, useTheme} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {addStep} from '../redux/ageSlice';

export const Age = () => {
  const theme = useTheme();
  // REDUX
  const count = useSelector(state => state.age.value);
  const dispatch = useDispatch();

  return (
    <>
      <View>
        <View style={{margin: 5}}>
          <Text style={{color: theme.colors.primary, fontSize: 20}}>
            Age Component (blacklist): {count}
          </Text>
          <Text style={{color: theme.colors.text, fontSize: 20}}>
            This value is blacklisted in our store's persistConfig, thus age
            won't persist.
          </Text>
        </View>
        <View style={{margin: 5}}>
          <TextInput
            mode="outlined"
            label="Your age"
            keyboardType="numeric"
            value={count}
            onChangeText={num => dispatch(addStep(num))}
          />
        </View>
      </View>
    </>
  );
};
