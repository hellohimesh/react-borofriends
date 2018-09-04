import React from 'react';
import Card from './card';

const CardList = ({robots}) => {
const cardComp = robots.map(user=>{
  return (
    <Card
      key={user.id}
      id={user.id}
      name = {user.name}
      username = {user.username}
      email = {user.email}
    />
  )
})
//
// const cardComp = robots.map((user,i) =>{
//   return <Card id={robots[i].id} name = {robots[i].name} username = {robots[i].username} email = {robots[i].email} />
//
// })
return (
  <div>
    {cardComp}
  </div>
)
}

export default CardList;
