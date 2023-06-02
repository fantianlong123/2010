import { history } from 'umi'
import is from 'is_js'
import _ from 'lodash'
import api from '@/services'

// 全局
export default {
  namespace: 'login',

  state: {

  },

  reducers: {
    setUserInfo (state, { payload }) {
      return {
        ...state,
        userInfo: payload,
      }
    }, 
  },

  effects: {
    // 获取用户资料信息
    *getUserInfo ({}, { call, put }) {
      const res = yield call(api.getAccoutInfo)
    },
  },
}
