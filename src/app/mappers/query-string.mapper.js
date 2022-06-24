// Create search query to send to API
module.exports.queryStringParamsMapper = (search, category) => {
  let query = `?`
  if (search) {
    query += `q=${search}`
  } else if (category) {
    query += `category=${category}`
  }
  return query;
}