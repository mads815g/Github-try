// use https (http secure).
// http (non secure) will make the app complain about mixed content when running the app from Azure
const baseUrl = "http://jsonplaceholder.typicode.com/todos"

Vue.createApp({
    data() {
        return {
            todos: [],
            idToGetBy : -1,
            singleTodo: null,
        }
    },
    methods: {
        getAllTodos() {
            this.helperGetAndShow(baseUrl)
        },
        async helperGetAndShow(url) { // helper metode: getAllCar + getByVendor are very similar
            try {
                const response = await axios.get(url)
                this.todos = await response.data
            } catch (ex) {
                alert(ex.message) // https://www.w3schools.com/js/js_popup.asp
            }
        },
        async getById(id) {
            const url = baseUrl + "/" + id
            try {
                const response = await axios.get(url)
                this.singleTodo = await response.data
            } catch (ex) {
                alert(ex.message)
            }
        }
    }
}).mount("#app")