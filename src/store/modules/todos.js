import axios from "axios"

const state = { 
    todos : []
}
const getters = {
    allTodos : state => state.todos
}
const actions = {
async getTodos({commit}){
    const response = await axios.get("http://localhost:3000/todos");
    commit("setTodos",response.data);
},
async postTodos({commit},todo){
    const res = await axios.post("http://localhost:3000/todos",todo);
    commit("newTodo",res.data)
},
async deleteTodo({ commit }, id) {
    await axios.delete(`http://localhost:3000/todos/${id}`);

    commit("removeTodo", id);
  },
async updateTodo({ commit }, id) {
    await axios.get(`http://localhost:3000/todos/${id}`);

    commit("editingTodo", id);
  },


}
const mutations = {
setTodos:(state,todos)=>(state.todos=todos),
newTodo:(state,todo)=>(state.todos.push(todo)),
removeTodo: (state, id) =>{
    state.todos = state.todos.filter(todo => todo.id !== id)
},
editingTodo:(state,todo)=>{
    let index = state.todos.findIndex(t=>t.id==todo.id)
    console.log(index);
}


}



export default {
state,
getters,
actions,
mutations
}