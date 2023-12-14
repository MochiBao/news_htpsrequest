import React from 'react'
// id = видалить
const NewsItem = ({id, url, title}) => {
    console.log(url, title);
  return (
    <li>
        <a href={url}>{title}</a>
    </li>
  )
}

export default NewsItem