import api from "./api-requests";


export const state = {
    users: [],
    filterCountry: 'all',
    filterSort: 'all',
    isLoading: false,
}

const getters = {
    users: state => {
        return state.users;
    },
    filterCountry: state => {
        return state.filterCountry;
    },
    filterSort: state => {
        return state.filterSort;
    },
    isLoading: state => {
        return state.isLoading;
    }
}

const actions = {
    addFilterCountry({ commit }, country) {
        commit('setLoading', true)
        commit('setFilterCountry', country ? country : 'all');
        setTimeout(()=>{
            commit('setLoading', false)
        },1000)
    },
    addFilterSort({ commit }, sort) {
        commit('setLoading', true)
        commit('setFilterSort', sort ? sort : 'all');
        setTimeout(()=>{
            commit('setLoading', false)
        },1000)
    },

    async getUsers({ commit }) {
        commit('setLoading', true)
        const response = await api.getUsers();
        if (response?.data?.users) {
            await commit('setUsers', response.data.users);
            commit('setLoading', false)
            return response.data.users
        } else {
            await commit('setUsers', usersCopy);
            commit('setLoading', false)
        }
        
    }
}

const mutations = {
    setUsers(state, value) {
        state.users = value;
    },
    setFilterCountry(state, value) {
        state.filterCountry = value;
    },
    setFilterSort(state, value) {
        state.filterSort = value;
    },
    setLoading(state, value) {
        state.isLoading = value;
    }

}

export default {
    state,
    actions,
    mutations,
    getters
};


const usersCopy = [
    {
        "header": "List"
    },
    {
        "sort": "25",
        "title": "Brunch this weekend?",
        "avatar": "https://cdn.vuetifyjs.com/images/lists/1.jpg",
        "address": "Подлесная ул., 3Б, Пермь, Пермский край, 614097",
        "country": "russia",
        "subtitle": "<span class=\"text--primary\">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"
    },
    {
        "inset": true,
        "divider": true
    },
    {
        "sort": "1",
        "title": "Summer BBQ <span class=\"grey--text text--lighten-1\">4</span>",
        "avatar": "https://cdn.vuetifyjs.com/images/lists/2.jpg",
        "address": "182 E Galena Ave, Crestone, CO 81131, Соединенные Штаты",
        "country": "usa",
        "subtitle": "<span class=\"text--primary\">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend."
    },
    {
        "inset": true,
        "divider": true
    },
    {
        "sort": "30",
        "title": "Oui oui",
        "avatar": "https://cdn.vuetifyjs.com/images/lists/3.jpg",
        "address": "ул. Серова, 8А, Екатеринбург, Свердловская обл., 620144",
        "country": "russia",
        "subtitle": "<span class=\"text--primary\">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?"
    },
    {
        "inset": true,
        "divider": true
    },
    {
        "sort": "5",
        "title": "Birthday gift",
        "avatar": "https://cdn.vuetifyjs.com/images/lists/4.jpg",
        "address": "4555 York St, Denver, CO 80216, Соединенные Штаты",
        "country": "usa",
        "subtitle": "<span class=\"text--primary\">Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?"
    },
    {
        "inset": true,
        "divider": true
    },
    {
        "sort": "27",
        "title": "Recipe to try",
        "avatar": "https://cdn.vuetifyjs.com/images/lists/5.jpg",
        "address": "26th St NE, Harvey, ND 58341, Соединенные Штаты",
        "country": "usa",
        "subtitle": "<span class=\"text--primary\">Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos."
    }
]