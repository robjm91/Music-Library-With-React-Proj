import axios from "axios"

 let url = "http://www.devcodecampmusiclibrary.com/api/music";

 export function getMusicAll() {
     return axios.get("${url}/music")
 }