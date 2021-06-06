// import React from 'react'
// import { Link } from 'react-router-dom'
import axios from 'axios'
import Button from 'components/button/Button'

export default function SignOut() {
  const handleLogout = async () => {
    await axios
      .post('http://localhost:4000/user/signout', null, {
        headers: {
          //   'Authorization': `Bearer ${acceccToken}`,
          'Content-Type': 'application/json',
          'withCredentials': true,
        },
      })
      .then((/* res */) => {
        // if (res.status === 200) {
        // main으로 라우팅
        // } else {
        // 페이지 새로고침
        // }
      })
  }

  return <Button style='UserBtn' value='Logout' handleClick={handleLogout}></Button>
}
