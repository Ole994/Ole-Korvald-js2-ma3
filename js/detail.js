import { baseUrl } from "./setting/api.js";

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id =params.get ("id");

const productUrl = baseUrl + "things/" + id;
