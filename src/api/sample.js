import axiosInstance from '@/util/http';
export function getRandomUserData(size) {
  return axiosInstance.get('https://randomuser.me/api/?results=' + size);
}
export function testNotFound() {
  return axiosInstance.get('https://randomuser.me/5545454');
}

export function testUnauthorized() {
  return axiosInstance.get('https://jojo-api-provider.herokuapp.com/api/RequestError/GetUnauthorized');
}

export function testSystemError() {
  return axiosInstance.get('https://jojo-api-provider.herokuapp.com/api/RequestError/GetSystemError');
}
