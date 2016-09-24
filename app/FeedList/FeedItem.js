import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Text,
} from 'react-native';
import VideoPlayer from './VideoPlayer';
import VideoFullScreenView from './VideoFullScreenView';

const kWindowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    width: kWindowWidth,
    borderBottomWidth: 1,
    borderColor: 'black',
  },
  title: {
    margin: 8,
    fontSize: 18,
  },
})

export default class FeedItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isVideoFullscreen: false
    };
  }

  open() {
    console.log('inside open');
    this.setState({
      isVideoFullscreen: !this.state.isVideoFullscreen
    });
  }

  render() {
    console.log('this.state.isVideoFullscreen', this.state.isVideoFullscreen);
    if (this.state.isVideoFullscreen) {
      containerStyle = {
        position: 'absolute',
        top: -64,
        right: 0,
        left: 0,
        bottom: 0,
        backgroundColor: 'black'
      }
    } else {
      containerStyle = null;
    }
    return (
      <View style={[styles.container, containerStyle]}>
        <Text style={styles.title}>Video {this.props.index}</Text>
        <VideoFullScreenView
          navigator={this.props.navigator}
          underlayColor={'white'}
          open={this.open.bind(this)}
        >
          <VideoPlayer />
        </VideoFullScreenView>
      </View>
    );
  }
}
