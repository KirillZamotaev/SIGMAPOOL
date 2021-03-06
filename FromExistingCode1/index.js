import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = () => new Vuex.Store({

  state: {
    currency: "BTC",
    defaultCurrency: "BTC",
    security: {
      doubleFactorAuth: false,
      passwordReset: false,
    },
    notifications: {
      workersTurnOff: false
    },
    payments: {
      paymentScheme: "PPS",
      paymentLimit: [{ currency: "BTC", value: "0,1" }],
      paymentAddress: "example@gmail.com",
    },
    actionsHistory: null,
    exchangeRate: [{
      currency: "BTC",
      targetCurrency: "USD",
      value: "54.50"
    }]  
  },
  mutations: {
    increment(state) {
      state.counter++
    }
  }
})

export default store
