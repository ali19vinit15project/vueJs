import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        tableData: {}
    },
    actions: {
    async getListOfEmployees({ commit }, serverParams) {
        const url = "http://localhost:8090/api/employees/search/globalSearch";
        const params = {
            q: serverParams.q,
            size: serverParams.perPage,
            page: serverParams.page - 1,
            sort: `${serverParams.sort[0].field},${serverParams.sort[0].type}`
        };
        await axios.get(url, { params })
            .then(response => {
                console.log("response", response);
                commit("setTableData", response.data);
            })
        }
    },
    mutations: {
        setTableData(state, tableData) {
            state.tableData = tableData;
        }
    },
    getters: {
        getTableData: state => state.tableData,
    }
});
