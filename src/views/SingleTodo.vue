<template>
  <li class="max-w-sm mx-auto my-5 rounded overflow-hidden shadow-lg">
    <span class="text-xl">{{ props.id }}-</span
    ><span v-if="!editing" class="text-2xl font-bold uppercase">{{
      props.title
    }}</span>
    <div>
      <span v-if="!editing" class="text-bg normal-case">{{
        props.description
      }}</span>

      <span v-if="editing">
        <input
          @change="todoTitleChange"
          :value="todoTitleText"
          type="text"
          class="
            block
            w-full
            p-2
            text-gray-900
            border border-gray-300
            rounded-lg
            bg-gray-50
            sm:text-xs
            focus:ring-blue-500 focus:border-blue-500
            dark:bg-gray-700
            dark:border-gray-600
            dark:placeholder-gray-400
            dark:text-white
            dark:focus:ring-blue-500
            dark:focus:border-blue-500
            text-2xl
            font-bold
          "
        />
      </span>

      <span v-if="editing">
        <input
          @change="todoDescChange"
          :value="todoDescText"
          type="text"
          class="
            block
            w-full
            p-2
            text-gray-900
            border border-gray-300
            rounded-lg
            bg-gray-50
            sm:text-xs
            focus:ring-blue-500 focus:border-blue-500
            dark:bg-gray-700
            dark:border-gray-600
            dark:placeholder-gray-400
            dark:text-white
            dark:focus:ring-blue-500
            dark:focus:border-blue-500
            text-xl
            font-medium
          "
        />
      </span>

      <span
        ><button
          @click="onEditTodo(todo)"
          class="
            inline-block
            px-6
            py-2
            ml-3
            border-2 border-gray-800
            text-gray-800
            font-medium
            text-xs
            leading-tight
            uppercase
            rounded
            hover:bg-black hover:bg-opacity-5
            focus:outline-none focus:ring-0
            transition
            duration-150
            ease-in-out
          "
        >
          {{ editing ? "update" : "Edit" }}
        </button></span
      >

      <span
        ><button
          @click="deleteTodo(todo)"
          class="
            btn
            bg-red-500
            hover:bg-red-700
            text-white
            rounded
            px-4
            py-1
            mx-5
          "
        >
          Delete
        </button></span
      >
    </div>
  </li>
</template>

<script setup>
import { defineProps, ref } from "vue";
//const emit = defineEmits(["editTodo", "submit"]);

const props = defineProps(["id", "title", "description"]);
let editing = ref(false);
let todoDescText = ref("");
let todoTitleText = ref("");
const onEditTodo = (todo) => {
      editing.value = editing.value == true ? false : true;
      if (editing.value) {
        todoDescText = todo.description;
        todoTitleText = todo.title;
        this.updateTodo(todo);
      } else {
        todo.description = this.todoDescText;
        todo.title = this.todoTitleText;
      }
};
</script>

<style setup>
</style>