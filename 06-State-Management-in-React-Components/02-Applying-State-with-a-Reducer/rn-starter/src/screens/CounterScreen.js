import React, {useReducer} from 'react';
import {Button, Text, View} from 'react-native';

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return {...state, count: state.count + action.payload};
    case 'decrement':
      return {...state, count: state.count + action.payload};
    default:
      return state;
  }
};

const CounterScreen = () => {
  const [state, runMyReducer] = useReducer(reducer, {count: 0});
  const {count} = state;

  return (
    <View>
      <Button
        title="Increase"
        onPress={() => {
          runMyReducer({type: 'increment', payload: 1});
        }}
      />
      <Button
        title="Decrease"
        onPress={() => {
          runMyReducer({type: 'decrement', payload: -1});
        }}
      />
      <Text>Current Count: {count}</Text>
    </View>
  );
};

export default CounterScreen;
