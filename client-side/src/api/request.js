import axios from 'axios';

const ins = axios.create(); // 创建一个axios实例

ins.interceptors.response.use((resp) => resp.data.data);

export default ins;
