import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {SliderBox} from 'react-native-image-slider-box';
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';
import Icon from 'react-native-vector-icons/Ionicons';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../../components/colors';
import Sizes from '../../components/Sizes';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const images = [
  'https://cdn.luxe.digital/media/2019/09/12084906/casual-dress-code-men-street-style-luxe-digital-1.jpg',
  'https://images.squarespace-cdn.com/content/576df23929687f12f6831057/1544740970724-BX8JOMPYCBCVWXSYMO3E/Men%27s%2BFashion%2BStreet%2BStyle.jpg?content-type=image%2Fjpeg',
  'https://i.pinimg.com/originals/8d/bb/1e/8dbb1e179e04e7ab8a66e419609599fa.jpg',
];

const ProcuctScreen = (props) => {
  const colors = ['#4A4B2C', '#FF004D', '#8A00F5', '#D5E817'];
  const sizes = ['S', 'M', 'L', 'XL', 'XLL'];
  let colorOfIndex = null;
  let sizeOfIndex = null;

  const onClickColor = (i) => {
    colorOfIndex = i;
    console.log('ene codetoi ongo daragdlaa: ' + colors[colorOfIndex]);
  };
  const onClickSize = (i) => {
    sizeOfIndex = i;
  };

  const renderContent = () => (
    <View style={styles.contentController}>
      <View style={styles.scroller} />
      <View style={styles.name}>
        <Text style={styles.contentNameText}>Цэнхэр jeans</Text>
        <Text style={styles.contentNameText}>500.000₮</Text>
      </View>
      <View style={styles.desc}>
        <Text style={{color: 'black', fontSize: 12, opacity: 0.5}}>
          Цэвэр даавуугаар хийгдсэн. Таны биеийн хөдөлгөөнийг хязгаарлахгүй.
          Хөнгөн сэрүүн мэдрэмжийг танд төрүүлэх болно.
        </Text>
      </View>
      <View style={{width: '100%', marginLeft: '20%', marginTop: 5}}>
        <Text style={{fontWeight: 'bold'}}>Өнгө</Text>
        <Colors colors={colors} onClickColor={onClickColor} />
      </View>
      <View style={{width: '100%', marginLeft: '20%', marginTop: 5}}>
        <Text style={{fontWeight: 'bold'}}>Хэмжээ</Text>
        <Sizes sizes={sizes} onClickSize={onClickSize} />
      </View>
      <TouchableOpacity style={styles.addToCard}>
        <MIcon name="shopping-outline" color="white" size={30} />
        <Text style={{color: 'white'}}>Сагсанд нэмэх</Text>
      </TouchableOpacity>
    </View>
  );

  const sheetRef = React.useRef(null);
  return (
    <>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.goArrow}
            onPress={() => props.navigation.goBack()}>
            <Icon name="chevron-back" color="black" size={30} />
          </TouchableOpacity>
          {/* <Icon name="heart-outline" color="black" size={30} /> */}
          <TouchableOpacity style={styles.goArrow}>
            <Icon name="heart" color="#E80CBD" size={30} />
          </TouchableOpacity>
        </View>
        <SliderBox
          images={images}
          sliderBoxHeight={windowHeight * 0.8}
          dotColor="#FFFFFF"
          inactiveDotColor="#90A4AE"
          autoplay
          // circleLoop
          resizeMethod={'resize'}
          resizeMode={'cover'}
          dotStyle={styles.dot}
        />
      </View>
      <BottomSheet
        ref={sheetRef}
        // initialSnap={100}
        // enabledGestureInteraction={false}
        enabledContentTapInteraction={false}
        enabledBottomClamp={true}
        enabledBottomInitialAnimation={true}
        snapPoints={[300, 300, 150]}
        borderRadius={20}
        renderContent={renderContent}
      />
    </>
  );
};

export default ProcuctScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  dot: {
    width: 15,
    height: 15,
    borderRadius: 15,
    marginHorizontal: 10,
    padding: 0,
    marginBottom: 30,
  },
  header: {
    width: windowWidth,
    height: windowHeight * 0.06,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // backgroundColor: 'red',
    paddingHorizontal: windowHeight * 0.015,
    position: 'absolute',
    zIndex: 10,
  },
  goArrow: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    // backgroundColor: 'red',
  },
  contentController: {
    backgroundColor: 'white',
    // padding: 16,
    alignItems: 'center',
    height: 300,
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
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  contentNameText: {fontWeight: 'bold', fontSize: 14},
  desc: {
    width: '80%',
  },
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
