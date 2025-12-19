import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Header from '../molecules/Header';
import EmailList from '../molecules/EmailList';



const AppContent: React.FC = () => {
  const safeAreaInsets = useSafeAreaInsets();
  const [searchQuery, setSearchQuery] = useState('');
  return (
    <View style={[styles.container, {marginTop: safeAreaInsets.top} ]}>
      <Header onSearch={setSearchQuery} />
      <EmailList searchQuery={searchQuery} />
    </View>
  );
}

export default AppContent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black'
  },
});
