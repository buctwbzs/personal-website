/**
 * API
 */

export default class API {

  static fetchCategories(){
    return fetch(`${apiUrl}categories`).then(res => res.json())
  }
}