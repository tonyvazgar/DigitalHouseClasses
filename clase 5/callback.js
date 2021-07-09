function agregarHttp(url) {
    return "http://" + url;
}

function procesar(arr, fun){
    let ans = [];
    for(let i = 0; i <  arr.length; i++){
        ans.push(agregarHttp(arr[i]));
    }
    return ans;
}

  let urlCompletas = procesar(["www.google.com","www.yahoo.com"],agregarHttp)
  console.log(urlCompletas); // imprime [ 'http://www.google.com', 'http://www.yahoo.com' ]