import { useSelector } from "react-redux";
import { selectAllUsers } from "../users/userSlice";

import React from 'react'

export default function PostAuthor({userId}) {
    const users =useSelector(selectAllUsers);
    const author =users.find(user => user.id === userId);
  return <span>  

    by <span> { author ?  author.name : "unknown aurhor"}</span>
  </span>
}
