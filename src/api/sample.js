import axios from 'axios';
export function getRandomUserData(size) {
  return axios.get('https://randomuser.me/api/?results=' + size);
}
