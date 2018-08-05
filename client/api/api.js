/**
 * API
 */
const initRequest = (method = 'GET', body) => ({
  method,
  body: JSON.stringify(body),
  headers: new Headers({
    'Content-Type': 'application/json'
  })
})

export default class API {

  static fetchCategories() {
    return fetch(`${apiUrl}categories`).then(res => res.json())
  }

  static putBlog(blog) {
    return fetch(`${apiUrl}blog`, initRequest(blog)).then(res => res.json())
  }

}