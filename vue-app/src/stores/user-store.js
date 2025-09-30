import { defineStore } from 'pinia'
import { computed, reactive } from 'vue'

const USERS_URL = `https://jsonplaceholder.typicode.com/users`

export const useUserStore = defineStore('user', () => {
  // state (private)
  const store = reactive({
    selectedUser: undefined,
    userList: [],
  })

  const selectedUser = computed(() => store.selectedUser)
  const userList = computed(() => store.userList)
  const shortUserList = computed(() => store.userList.slice(0, 3))

  async function fetchUserList() {
    const response = await fetch(USERS_URL).then((response) =>
      new Promise((r) => setTimeout(r, 1000)).then(() => response.json()),
    )

    return (store.userList = response)
  }

  return {
    // getters
    selectedUser,
    userList,
    shortUserList,
    // actions
    fetchUserList,
  }
})
// export const useUserStore = defineStore('user', {
//   state: () => ({}),
//   getters: {},
//   actions: {},
// })
