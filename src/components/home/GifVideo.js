import React from 'react';
import VideoPlayer from 'react-native-video-player';

export default function GifVideo({item}) {
  let uri = item?.images?.original_mp4.mp4?.split('?')[0];
  return (
    <VideoPlayer
      video={{
        uri,
      }}
      // video={require('../../assets/videos/dummy_video.mp4')}
      // videoHeight={500}
      // videoWidth={200}
      thumbnail={{uri: item?.images?.original_still.url}}
      endThumbnail={{uri: item?.images?.original_still.url}}
      showDuration={false}
      // autoplay
      controlsTimeout={20}
      disableControlsAutoHide={true}
      muted={true}
      defaultMuted={true}
      disableSeek={true}
      pauseOnPress={true}
      hideControlsOnStart
      loop
    />
  );
}
