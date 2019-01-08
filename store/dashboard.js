
export const state = () => ({
  selectedMeasure: "THS/s",
  defaultCurrency: "BTC",
  workersInfo: null,
  charts: { 
    shares: [],
    hashrate: []
  },
  accountInfo: null, 

});

export const mutations = {
  setAccountInfo(state, data) {
    state.accountInfo = data;
  },
  setChartHashrate(state,  data) {
    state.charts.hashrate = data;
  },
  setChartShares(state, data) {
    state.charts.shares = data;
  },
  setWokersInfo(state, data) {
    state.workersInfo = data;
  }
 
}
 

export const getters = {
  selectedMeasure(state) {
    return state.selectedMeasure;
  },
  accountInfo(state) { 

    return state.accountInfo;
  },
  chartShares(state) {
    return state.charts.shares;
  },
  chartHashrate(state) {
    return state.charts.hashrate;
  },
  
}
