

const mutations = {
    change_UserInfo(state, data) {
        state.userInfo = data.username;
        state.model = data.model
    }
}
export default mutations