import axios from 'axios';
export default function getRandUserData(size) {
  return axios.get('https://randomuser.me/api/?results=' + size);
}
