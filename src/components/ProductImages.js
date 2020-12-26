import * as React from "react";
import { StyleSheet, View, ScrollView, Dimensions, Image, ImageBackground, Pressable } from "react-native";
import { COLORS, SIZES, icons } from "../constants";


class ProductImages extends React.Component {
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
            x: (SIZES.width * .6) * this.state.selectedIndex,
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
    const selectedIndex = Math.floor(contentOffset.x / (viewSize.width * .6));
    
    
    this.setState({ selectedIndex });
  };

  setIndexMinus = () => {
    const selectedIndex = this.state.selectedIndex - 1;
    
    this.setState({
      selectedIndex : selectedIndex
    })
    
    this.scrollRef.current.scrollTo({
      animated: true,
      x: (SIZES.width * .6) * selectedIndex,
      y: 0
    });
  }


  setIndexPlus = () => {
    const selectedIndex = this.state.selectedIndex + 1;
    
    this.setState({
      selectedIndex : selectedIndex
    })
    
    this.scrollRef.current.scrollTo({
      animated: true,
      x: (SIZES.width * .6) * selectedIndex,
      y: 0
    });
  }


  render() {
    const { images } = this.props;
    const { selectedIndex } = this.state;
    
    return (
      <View style={{ height: "100%", width: "100%", flexDirection : 'row' }}>
        <View style={{width : '20%', justifyContent : 'center',alignItems : 'center'}}>
            <Pressable onPress={this.setIndexMinus} style={{backgroundColor : '#4daac9bf', padding : 7, borderRadius : 50}}>
                <Image
                    source={icons.back}
                    resizeMode="contain"
                    style={{
                        width: 24,
                        height: 24,
                        tintColor : COLORS.white
                    }}
                    />
            </Pressable>
        </View>

        <View style={{width : '60%'}}>

        <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onMomentumScrollEnd={this.setSelectedIndex}
          ref={this.scrollRef}
          >
          {images.map((item, i) => (
              <ImageBackground
              imageStyle={{width : '100%', height : '100%' }}
              style={styles.backgroundImage}
              source={{ uri  : item.image}}
              key={i}
            >

            </ImageBackground>
          ))}
        </ScrollView>
        </View>
        <View style={{width : '20%', justifyContent : 'center',alignItems : 'center'}}>
        <Pressable onPress={this.setIndexPlus} style={{backgroundColor : '#4daac9bf', padding : 7, borderRadius : 50}}>
                <Image
                    source={icons.right}
                    resizeMode="contain"
                    style={{
                        width: 24,
                        height: 24,
                        tintColor : COLORS.white
                    }}
                    />
            </Pressable>
        </View>

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
    width: SIZES.width * .6
    },
circleDiv: {
    position: "absolute",
    bottom: -10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 10
  },
  whiteCircle: {
    width: 20,
    height: 3,
    borderRadius: 3,
    margin: 4,
    backgroundColor: COLORS.primary
  },
  moreInfo : {
      width : '100%',
      height : '100%',
      paddingHorizontal : 20,
      paddingTop : '10%'
  }
});

export default ProductImages ;