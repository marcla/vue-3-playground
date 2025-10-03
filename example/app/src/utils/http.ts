/* eslint-disable @typescript-eslint/no-explicit-any */
const API_BASE_URL = 'http://localhost:3000'

const request = async (params: {
  method?: 'GET' | 'POST' | 'DELETE' | 'PATCH' | 'PUT'
  url: string
  headers?: any
  body?: any
}) => {
  const { method = 'GET', url, headers = {}, body } = params

  const config: {
    method: string
    headers: Headers
    body?: string
  } = {
    method,
    headers: new Headers(headers),
  }

  if (body) {
    config.body = JSON.stringify(body)
  }

  const response = await fetch(`${API_BASE_URL}/${url}`)

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`)
  }

  const data = await response.json()

  return {
    status: response.status,
    data,
  }
}

const get = async (url: string, headers = {}) => {
  const response = await request({
    url,
    method: 'GET',
    headers,
  })

  return response.data
}

const post = async (url: string, body = {}, headers = {}) => {
  const response = await request({
    url,
    method: 'POST',
    headers,
    body,
  })

  return response.data
}

export default {
  get,
  post,
}
