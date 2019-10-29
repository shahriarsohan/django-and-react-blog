const localhost = "http://127.0.0.1:8000/";
const apiURL = "api/v1/posts";

const endpoints = `${localhost}${apiURL}`;

export const postsListURL = `${endpoints}/list`;
export const postDetailsURL = slug => `${endpoints}/details/${slug}`;
export const categoryList = `${endpoints}/category/list`;
