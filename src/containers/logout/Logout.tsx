// import React from 'react'
// import { Link } from 'react-router-dom'
import axios from 'axios'
import Button from 'components/button/Button'

export default function SignOut() {
  const handleLogout = async () => {
    await axios
      .post('https://localhost:4000/user/signout', null, {
        headers: {
          //   'Authorization': `Bearer ${acceccToken}`,
          'Content-Type': 'application/json',
          'withCredentials': true,
        },
      })
      .then((/* res */) => {
        // if (res.body.message === '로그아웃에 성공하였습니다.') {
        console.log('로그아웃 완료')
        // } else {
        console.log('로그아웃 실패')
        // }
      })
  }

  return (
    <Button style='UserBtn' value='Logout' handleClick={handleLogout}></Button>
    // 버튼 클릭시 main 페이지로 라우팅
  )
}
