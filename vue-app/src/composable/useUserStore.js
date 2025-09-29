import { reactive } from 'vue'

const USERS_URL = `https://jsonplaceholder.typicode.com/users`

export const userStore = reactive({
  selectedUser: undefined,
  userList: [],
})

export async function fetchUserList() {
  const response = await fetch(USERS_URL).then((response) =>
    new Promise((r) => setTimeout(r, 1000)).then(() => response.json()),
  )

  return response
}
