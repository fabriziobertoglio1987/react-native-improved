import * as React from 'react';

import { View, StyleSheet, Text, TextInput } from 'react-native';
import { TextImproved } from 'react-native-improved';

export default function App() {
  const email =
    'From vincenzoddragon+five@gmail.com  From vincenzoddrlxagon+five@gmail.com';
  return (
    <>
      <View style={styles.container}>
        <View style={styles.flexBrokenStyle}>
          <TextImproved
            textBreakStrategy="simple"
            style={styles.parentText}
            numberOfLines={1}
          >
            {email}
          </TextImproved>
        </View>
        <TextInput style={styles.input} />
        <Text>Normal Text</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 8,
    backgroundColor: 'yellow',
  },
  flexBrokenStyle: {
    flexDirection: 'row',
  },
  parentText: {
    backgroundColor: 'red',
  },
  input: { borderWidth: 1 },
});
