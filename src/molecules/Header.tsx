import React from 'react';
import { View } from 'react-native';
import SearchEmail from '../atoms/SearchEmail';

// import { Container } from './styles';

type HeaderProps = {
  onSearch: (value: string) => void;
};

const Header: React.FC<HeaderProps> = ({ onSearch }) => {
  return (
    <View>
      <SearchEmail onDebouncedChange={onSearch} />
    </View>
  );
}

export default Header;
