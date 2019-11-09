import React from "react";

export const getNewsData = async (source) => {
  let response = await fetch(`https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=6d81e40eb39f4f5ab14621edb90e651b`)
  let result = await response.json();
  console.log(result);
  if (result.status === "ok"){
    let data = result.articles.map(obj => {
      return (
        {
          title : obj.title,
          detail : obj.description,
          image : obj.urlToImage,
          fullDetail : obj.url,
        }
      )
    })

    console.log("data is", data)
    return data;
  }
}
