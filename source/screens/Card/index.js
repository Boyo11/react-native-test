import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';
import Icon from 'react-native-vector-icons/Ionicons';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import SelectedProduct from '../../components/SelectedProduct';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Card = () => {
  const renderContent = () => (
    <View style={styles.contentController}>
      {/* <View style={styles.scroller} /> */}
      <Text style={{color: '#007AFF'}}>Хүргэлтийн үнэ багтаагүй болно</Text>
      <View style={styles.name}>
        <Text style={{color: 'black', fontSize: 14, fontWeight: 'bold'}}>
          Нийт үнийн дүн
        </Text>
        <Text style={styles.contentNameText}>500.000₮</Text>
      </View>
      <TouchableOpacity style={styles.addToCard}>
        <MIcon name="shopping-outline" color="white" size={30} />
        <Text style={{color: 'white'}}>Захиалах</Text>
      </TouchableOpacity>
    </View>
  );

  const sheetRef = React.useRef(null);
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View style={styles.container}>
        <ScrollView style={styles.container}>
          <SelectedProduct />
          <SelectedProduct />
          <SelectedProduct />
          <SelectedProduct />
          <SelectedProduct />
          <SelectedProduct />
          <SelectedProduct />
        </ScrollView>
      </View>
      <BottomSheet
        ref={sheetRef}
        // initialSnap={100}
        enabledGestureInteraction={false}
        enabledContentTapInteraction={false}
        enabledBottomClamp={true}
        enabledBottomInitialAnimation={true}
        snapPoints={[300, 300, 150]}
        borderRadius={20}
        renderContent={renderContent}
      />
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    width: windowWidth,
    height: windowHeight * 0.65,
    // backgroundColor: 'yellow',
  },
  contentController: {
    paddingTop: '5%',
    backgroundColor: '#F8F8F8',
    // padding: 16,
    alignItems: 'center',
    height: windowHeight * 0.3,
  },
  scroller: {
    width: 60,
    height: 3,
    borderRadius: 3,
    backgroundColor: 'gray',
    alignSelf: 'center',
    marginTop: 8,
  },
  name: {
    margin: 10,
    width: '80%',
    // height: '20%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  contentNameText: {fontWeight: 'bold', fontSize: 14},
  addToCard: {
    backgroundColor: '#000000',
    opacity: 0.87,
    width: '84%',
    height: 50,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
});
