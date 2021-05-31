import Result from 'containers/result/Result'
import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { testResultTempArr } from 'interface/sampledata'

export default function Sample() {
  const history = useHistory()
  useEffect(() => {
    history.push('/result', testResultTempArr[0])
  }, [])

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <Result />
    </div>
  )
}
