export default {
    handleClassifyData(state, params) {
        state.arrClassify = params.item
        // console.log(state.arrClassify)
    },
    handleGoodListData(state, params) {
        state.arrGoodList = params.data.results
        // console.log(state.arrGoodList)
    }
}