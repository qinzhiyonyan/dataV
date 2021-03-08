import axios from "@/utils/axios";
import store from "@/store";
import qs from "qs";

export const login = obj => {
  return axios.post(`v1/getList`, obj).then(res => res.data);
};
export const loginOut = obj => {
  const { appId } = store.state;
  const params = qs.stringify(obj);
  return axios.get(`/loginOut?appId=${appId}&${params}`).then(res => res.data);
};
