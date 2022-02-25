import { useState, useEffect, useRef } from 'react';
import { Camera } from 'expo-camera';
import { Ionicons } from '@expo/vector-icons';
import * as MediaLibrary from 'expo-media-library';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import uploadFile from '../requests';

export default function App() {
  const [status, requestPermission] = MediaLibrary.usePermissions();

  const cam = useRef();
  const _takePicture = async () => {
    try {
      if (cam.current) {
        const options = { quality: 0.2, base64: true, skipProcessing: false };

        let picture = await cam.current.takePictureAsync(options);

        const source = picture.uri;

        if (source) {
          cam.current.resumePreview();
          const uri = await handleSave(source);
          const { prediction } = await uploadFile(source);
          Alert.alert('Prediction', `${prediction}`, [
            { text: 'OK', onPress: () => console.log('OK Pressed') },
          ]);
        }
      }
    } catch {}
  };

  const handleSave = async (picture) => {
    return new Promise(async (resolve, reject) => {
      try {
        if (status.granted) {
          const assert = await MediaLibrary.createAssetAsync(picture);
          resolve(assert);
        } else {
          console.log('you Missed to give permission');
          reject();
        }
      } catch {
        reject();
      }
    });
    // const { status } = await MediaLibrary.getPermissionsAsync();
    //  const {status} = await Permissions.askAsync(Permissions.CAMERA_ROLL)
  };

  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      await requestPermission();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={styles.container}>
      <Camera ref={cam} style={styles.camera} type={type}>
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <TouchableOpacity
              onPress={() => {
                setType(
                  type === Camera.Constants.Type.back
                    ? Camera.Constants.Type.front
                    : Camera.Constants.Type.back
                );
              }}>
              {/* 
            <Text style={styles.text}> Flip </Text> */}
              <Ionicons name="camera-reverse-sharp" size={24} color="black" />
            </TouchableOpacity>
          </View>
          <View style={styles.button}>
            <TouchableOpacity onPress={_takePicture}>
              {/*             
            <Text style={styles.text}> Click </Text> */}
              <Ionicons name="aperture-outline" size={80} color="black" />
            </TouchableOpacity>
          </View>
        </View>
      </Camera>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    margin: 20,
  },
  button: {
    justifyContent: 'space-around',
    //  alignself: 'flex-end',
    alignItems: 'flex-end',
  },
  button1: {
    flex: 0.1,
    alignSelf: 'flex-end',
    alignItems: 'flex-end',
  },
  text: {
    fontSize: 18,
    color: 'white',
  },
});
