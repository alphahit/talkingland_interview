import React, { useEffect, useState } from 'react';
import {
  Pressable,
  View,
  StyleSheet,
  FlatList,
  Text,
  TouchableOpacity,
} from 'react-native';

// import { Fontisto } from "@react-native-vector-icons/fontisto";
//  import { Container } from './styles';
// import AntDesign from "react-native-vector-icons";
import WhiteStar from '../assets/whiteStar.svg';
import YellowStar from '../assets/yellowstar.svg';
import SwipeableFlatList from 'react-native-swipeable-list';
type EmailItem = {
  id: number;
  sender: string;
  subject: string;
  body: string;
  timestamp: string;
  read: boolean;
  starred: boolean;
};

const emails: EmailItem[] = [
  {
    id: 1111,
    sender: 'hr@company.com',
    subject: 'Interview Schedule',
    body: 'Your interview is scheduled for Monday at 10 AM...',
    timestamp: '2025-12-18T10:30:00',
    read: false,
    starred: false,
  },
  {
    id: 267,
    sender: 'newsletter@react.dev',
    subject: 'React 19 Released',
    body: 'React 19 introduces new features including...',
    timestamp: '2025-12-17T08:15:00',
    read: true,
    starred: true,
  },
  {
    id: 11,
    sender: 'lrr@company.com',
    subject: 'Interviedfw Schedule',
    body: 'Your intefdrview is scheduled for Monday at 10 AM...',
    timestamp: '2025-12-18T10:30:00',
    read: false,
    starred: false,
  },
  {
    id: 3232,
    sender: 'newsletter@react.dev',
    subject: 'React 19 Released',
    body: 'React 19 introduces new features including...',
    timestamp: '2025-12-17T08:15:00',
    read: true,
    starred: true,
  },
  {
    id: 43443,
    sender: 'bewslettter@react.dev',
    subject: 'React 19 Released',
    body: 'React 19 introduces new features including...',
    timestamp: '2025-12-17T08:15:00',
    read: true,
    starred: true,
  },
  {
    id: 53443,
    sender: 'newssletter@react.dev',
    subject: 'React 1239 Released',
    body: 'React 19 intdfdroduces new features including...',
    timestamp: '2025-12-17T08:15:00',
    read: true,
    starred: true,
  },
  {
    id: 6224,
    sender: 'cewslettfer@react.dev',
    subject: 'React 1df9 Released',
    body: 'React 19 ifsfntroduces new features including...',
    timestamp: '2025-12-17T08:15:00',
    read: true,
    starred: true,
  },
  {
    id: 743242,
    sender: 'newslettdfer@react.dev',
    subject: 'Reacct 19 Released',
    body: 'React 19 intdfdroduces new features including...',
    timestamp: '2025-12-17T08:15:00',
    read: true,
    starred: true,
  },
  {
    id: 56788,
    sender: 'newsletter@react.dev',
    subject: 'React 19 Released',
    body: 'React 19 introduces new features including...',
    timestamp: '2025-12-17T08:15:00',
    read: true,
    starred: true,
  },
  {
    id: 65,
    sender: 'cewslettfer@react.dev',
    subject: 'React 1df9 Released',
    body: 'React 19 ifsfntroduces new features including...',
    timestamp: '2025-12-17T08:15:00',
    read: true,
    starred: true,
  },
  {
    id: 76,
    sender: 'newslettdfer@react.dev',
    subject: 'Reacct 19 Released',
    body: 'React 19 intdfdroduces new features including...',
    timestamp: '2025-12-17T08:15:00',
    read: true,
    starred: true,
  },
  {
    id: 88,
    sender: 'newsletter@react.dev',
    subject: 'React 19 Released',
    body: 'React 19 introduces new features including...',
    timestamp: '2025-12-17T08:15:00',
    read: true,
    starred: true,
  },
];

type EmailListProps = {
  searchQuery?: string;
};

const EmailList: React.FC<EmailListProps> = ({ searchQuery = '' }) => {
  const [emailItems, setEmailItems] = useState<EmailItem[]>(emails);
  const normalizedQuery = searchQuery.trim().toLowerCase();
  const filteredEmails = normalizedQuery
    ? emailItems.filter(email => {
        const searchable =
          `${email.sender} ${email.subject} ${email.body}`.toLowerCase();
        return searchable.includes(normalizedQuery);
      })
    : emailItems;

  const handleStarred = (eitem: { id: number }) => {
    console.log('Item--> ', eitem);
    const updatedEmailItem = emailItems.map(item => {
      return eitem.id === item.id
        ? {
            ...item,
            starred: !item.starred,
          }
        : item;
    });
    setEmailItems(updatedEmailItem);
  };
  const renderMailItem = ({ item }: { item: any }) => (
    <View style={styles.productContainer}>
      <View
        style={{
          height: 40,
          width: 40,
          backgroundColor: 'pink',
          borderRadius: 30,
          marginRight: 10,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Text style={{ fontWeight: '700' }}>{item.sender.slice(0, 1)}</Text>
      </View>
      <View style={{ width: '80%' }}>
        <Text style={styles.text}>{item.sender}</Text>
        <Text style={styles.textSubject}>{item.subject}</Text>
        <Text style={styles.textBody}>{item.body}</Text>
      </View>
      {item.starred ? (
        <TouchableOpacity onPress={() => handleStarred(item)}>
          <YellowStar width={15} height={15} />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={() => handleStarred(item)}>
          <WhiteStar width={40} height={40} />
        </TouchableOpacity>
      )}
    </View>
  );
  const handleDelete = (id: number) => {
    setEmailItems(current => current.filter(email => email.id !== id));
  };

  const renderQuickActions = ({ item }: { item: EmailItem }) => (
    <View style={styles.quickActionsContainer}>
      <Pressable onPress={() => handleDelete(item.id)}>
        <Text style={styles.actionText}>Delete</Text>
      </Pressable>
    </View>
  );

  const fetchNewData = () => {
    

    const updatedEmailItem = emailItems.map(item => {
      const start = Date.now();

      return {
        ...item,
        id: item.id.toString() + start,
      };
    });

    setEmailItems([...filteredEmails, ...updatedEmailItem]);
  };

  //   useEffect(()=>{
  //     console.log('emailItems--->',emailItems)
  //   },[emailItems])
  return (
    <View accessible={true} style={{ alignItems: 'center', marginTop: 10, flex:1 }}>
      <SwipeableFlatList
        accessible={true}
        data={filteredEmails}
        renderItem={renderMailItem}
        keyExtractor={item => item.id.toString()}
        renderQuickActions={renderQuickActions}
        maxSwipeDistance={150}
        style={{ flex: 1, width: 400 }}
        contentContainerStyle={styles.contentContainer}
        onEndReached={fetchNewData}
        onEndReachedThreshold={0.5}
        ListEmptyComponent={
          <View
            style={{
              marginHorizontal: 20,
              backgroundColor: 'white',
              borderRadius: 10,
              height: 40,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Text style={{ color: 'red' }}>No Mails Found</Text>
          </View>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  productContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 10,
    marginVertical: 10,
    backgroundColor: 'black',
  },
  contentContainer: {
    // flex: 1,
  },
  text: {
    color: 'white',
    marginVertical: 2,
  },
  textSubject: {
    color: 'white',
    marginVertical: 2,
  },
  textBody: {
    color: 'white',
    marginVertical: 2,
  },
  quickActionsContainer: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingRight: 20,
  },
  actionText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default EmailList;
