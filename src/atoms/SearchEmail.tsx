import React, { useEffect, useState } from 'react';
import { View, TextInput, StyleSheet, Image } from 'react-native';

type SearchEmailProps = {
  onDebouncedChange?: (value: string) => void;
  delayMs?: number;
};

const SearchEmail: React.FC<SearchEmailProps> = ({
  onDebouncedChange,
  delayMs = 400,
}) => {
  const [value, setValue] = useState('');

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onDebouncedChange?.(value.trim());
    }, delayMs);

    return () => clearTimeout(timeoutId);
  }, [delayMs, onDebouncedChange, value]);

  return (
    <View 
    accessible={true}
    style={styles.container}>
      <View 
      accessible={true}
      style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Image
          style={{ width: 30, height: 30 }}
          source={require('../assets/menu.png')}
        />
        <TextInput
          accessibilityLabel="search email"
          accessible={true}
          accessibilityRole="search"
          style={styles.inputStyle}
          placeholder="Search in emails"
          placeholderTextColor={'white'}
          value={value}
          onChangeText={setValue}
        />
      </View>

      <Image
        style={{ width: 30, height: 30 }}
        source={require('../assets/profile.png')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '95%',
    backgroundColor: 'grey',
    height: 60,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    alignSelf: 'center',
    borderRadius: 40,
    justifyContent: 'space-between',
  },
  inputStyle: {
    height: '100%',

    color: 'white',
    fontSize: 18,
    paddingHorizontal: 10,
  },
});

export default SearchEmail;
