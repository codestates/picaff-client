import SignIn from 'containers/login/Login'
export default function Sample() {
  return (
    <div>
      <SignIn setUserInfo={(user) => console.log(user)} />
    </div>
  )
}
