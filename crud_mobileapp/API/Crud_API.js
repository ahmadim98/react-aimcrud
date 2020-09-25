
var DATA = [];


function getProducts(){
  fetch('http://192.168.8.104:5000/product')
    .then((response) => response.json())
    .then((responseJson) => {
      DATA = responseJson;
      //return responseJson.movies;
    })
    .catch((error) => {
      console.error(error);
  });
}

function getProductByID(id){
  fetch('http://192.168.8.104:5000/product/'+id)
    .then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson);
      return responseJson;
    })
    .catch((error) => {
      console.error(error);
  });
}



export { DATA , getProducts , getProductByID };