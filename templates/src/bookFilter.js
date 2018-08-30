const bookFilter = (book, query) => {

  if(!query.length) return true;

  if(query.indexOf('number:') == 0) {

    if(book["number"].toLowerCase().indexOf(query.substring(8).trim().toLowerCase()) > -1) {
      return true;
    }

  } else if(query.indexOf('name:') == 0) {

    if(book["name"].toLowerCase().indexOf(query.substring(6).trim().toLowerCase()) > -1) {
      return true;
    }
  
  } else if(query.indexOf('author:') == 0) {

    if(book["author"].toLowerCase().indexOf(query.substring(8).trim().toLowerCase()) > -1) {
      return true;
    }
  
  } else if(query.indexOf('pages:') == 0) {

    if(book["pages"].toLowerCase().indexOf(query.substring(7).trim().toLowerCase()) > -1) {
      return true;
    }
  
  } else if(query.indexOf('price:') == 0) {

    if(book["price"].toLowerCase().indexOf(query.substring(7).trim().toLowerCase()) > -1) {
      return true;
    }
  
  } else {

    for(let property in book) {
      if(book[property].toLowerCase().indexOf(query.toLowerCase()) > -1) {
        return true;
      }
    }
  }

  return false;
}

export default bookFilter