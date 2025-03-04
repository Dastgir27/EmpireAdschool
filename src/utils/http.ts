import axios from 'axios';

export default class HTTP {
  static async get({ url, requestOptions = {} }: { url: string; requestOptions: any; }) {
    try {
      const response = await axios.get(url, requestOptions);
      return response.data;
    } catch (error) {
      return error;
    }
  }

  static async post(url: string, data: any, requestOptions: any = {
    headers: {
      'Content-Type': 'application/json',
    },
  }) {
    try {
      const response = await axios.post(url, data, requestOptions);
      return response.data;
    } catch (error) {
      return error;
    }
  }

  static async put({ url, data, requestOptions = {
    headers: {
      'Content-Type': 'application/json',
    },
  }}: { url: string; data: any; requestOptions: any; }) {
    try {
      const response = await axios.put(url, data, requestOptions);
      return response.data;
    } catch (error) {
      return error;
    }
  }

  static async delete({ url, requestOptions }: { url: string; requestOptions: any; }) {
    try {
      const response = await axios.delete(url, requestOptions);
      return response.data;
    } catch (error) {
      return error;
    }
  }
}