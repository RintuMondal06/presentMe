import * as React from "react";
import { StyleSheet, View, ScrollView, Dimensions, Image, ImageBackground } from "react-native";
import { COLORS, SIZES } from "../constants";
// import { Title, Subheading, Caption } from 'react-native-paper';

const DEVICE_WIDTH = Dimensions.get("window").width;

class BackgroundCarousel extends React.Component {
  scrollRef = React.createRef();
  constructor(props) {
    super(props);

    this.state = {
      selectedIndex: 0
    };
    this.scrollRef = React.createRef();
  }

  componentDidMount = () => {
    setInterval(() => {
      this.setState(
        prev => ({
          selectedIndex:
            prev.selectedIndex === this.props.images.length - 1
              ? 0
              : prev.selectedIndex + 1
        }),
        () => {
          this.scrollRef.current.scrollTo({
            animated: true,
            x: DEVICE_WIDTH * this.state.selectedIndex,
            y: 0
          });
        }
      );
    }, 3000);
  };

  setSelectedIndex = event => {
    const contentOffset = event.nativeEvent.contentOffset;
    const viewSize = event.nativeEvent.layoutMeasurement;

    // Divide the horizontal offset by the width of the view to see which page is visible
    const selectedIndex = Math.floor(contentOffset.x / viewSize.width);
    this.setState({ selectedIndex });
  };

  render() {
    const { images } = this.props;
    const { selectedIndex } = this.state;
    return (
      <View style={{ height: "100%", width: "100%", borderRadius : SIZES.radius }}>
        <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onMomentumScrollEnd={this.setSelectedIndex}
          ref={this.scrollRef}
        >
          {images.map((item, i) => (
            <ImageBackground
              imageStyle={{ borderRadius: SIZES.radius, width : '90%', height : '100%' }}
              style={styles.backgroundImage}
              source={item.image}
              key={i}
            >
                <View style={styles.moreInfo}>
                    {/* <Title style={{color : '#fff'}}>{item.title}</Title>
                    <Subheading style={{color : '#fff'}}>{item.subtitle}</Subheading>
                    <Caption style={{color : '#fff'}}>{item.desc}</Caption> */}
                </View>

            </ImageBackground>
          ))}
        </ScrollView>
        <View style={styles.circleDiv}>
          {images.map((item, i) => (
            <View
              style={[
                styles.whiteCircle,
                { opacity: i === selectedIndex ? 0.5 : 1 }
              ]}
              key={i}
              active={i === selectedIndex}
            />
          ))}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  backgroundImage: {
    height: "100%",
    opacity : 0.8,
    width: Dimensions.get("window").width
  },
  circleDiv: {
    position: "absolute",
    bottom: 15,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 10
  },
  whiteCircle: {
    width: 6,
    height: 6,
    borderRadius: 3,
    margin: 5,
    backgroundColor: COLORS.primary
  },
  moreInfo : {
      width : '100%',
      height : '100%',
      paddingHorizontal : 20,
      paddingTop : '10%'
  }
});

export default BackgroundCarousel ;