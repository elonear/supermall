import axios from 'axios'

export default function request(config){

  //创建axios实例
  const instant = axios.create({
    baseURL:'http://123.207.32.32:8000',
    timeout:600
  })
  //请求拦截
  instant.interceptors.request.use(config=>{
    return config
  }, err => {
     console.log(err);
  })

  //返回拦截
  instant.interceptors.response.use(res=>{
    console.log(res.data)
    return res.data
  },err=>{
    console.log(err);
  })
  //去网络调用
  return instant(config)
}
