import Select from 'components/select-test/Select'

export default function Sample() {
  return (
    <div>
      <Select
        title='여기에 질문을 입력하세요'
        handleTestResult={(n) => {
          console.log(n)
        }}
      />
    </div>
  )
}
