import axios from "axios";


const state = {
  todos: [],
};
const getters = {
  allTodos: (state) => state.todos,
};
const actions = {
  async getTodos({ commit }) {
    const response = await axios.get("http://localhost:3000/todos");
    commit("setTodos", response.data);
  },
  async postTodos({ commit }, todo) {
    const res = await axios.post("http://localhost:3000/todos", todo);
    commit("newTodo", res.data);
  },
  async deleteTodo({ commit }, id) {
    commit("removeTodo", id);
    await axios.delete(`http://localhost:3000/todos/${id}`);

    
  },
  async updateTodo({ commit }, todo) {
    commit("editingTodo", todo);
   await axios.put(`http://localhost:3000/todos/${todo.id}`,todo);
    
  },
};
const mutations = {
  setTodos: (state, todos) => (state.todos = todos),
  newTodo: (state, todo) => state.todos.push(todo),
  removeTodo: (state, id) => {
    state.todos = state.todos.filter((todo) => todo.id !== id);
  },
  editingTodo:(state,todo)=>{
    console.log(todo);
    let index = state.todos.findIndex(t=>t.id==todo.id)
    // console.log(index);
     state.todos[index] = todo
    //console.log(state.todos)
  },

  


  // editingTodo: (state, id, description, title) => {
  //   let index = state.todos.findIndex((t) => t.id == id);
  //   state.todos[index].title = title;
  //   state.todos[index].description = description;
  //   console.log('on Update');
  // },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
