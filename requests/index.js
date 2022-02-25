import axios from 'axios';
import FormData from 'form-data';
import { Platform } from 'react-native';

const uploadFile = (fileUri) => {
  return new Promise(async (resolve, reject) => {
    try {
      const object = {
        name: 'image',
        type: 'image/jpg',
        uri:
          Platform.OS === 'android' ? fileUri : fileUri.replace('file://', ''),
      };
      console.log(object);
      const formData = new FormData();
      formData.append('image', object);
      // const { data } = await fetch({
      //   method: 'post',
      //   data: formData,
      //   headers: { 'Content-Type': 'multipart/form-data' },
      //   url: 'https://impact-detection2.herokuapp.com/upload',
      // });
      let res = await fetch('https://impact-detection2.herokuapp.com/upload', {
        method: 'POST',
        body: formData,
        headers: {
          'Content-Type': 'multipart/form-data',
          Accept: 'application/json',
        },
      });
      const resp = await res.json();
      resolve(resp);
    } catch (err) {
      reject(err);
    }
  });
};

export default uploadFile;
