import Select from 'components/select-test/Select'
import { Test } from 'interface'
import { test } from 'module/test'
import { useState } from 'react'

export default function Test() {
  const [testData, setTest] = useState<Test[]>(test)
  return (
    <div>
      {testData.map((el, idx) => (
        <Select
          title={el.title}
          handleTestResult={(data) =>
            setTest([
              ...testData.slice(0, idx),
              { ...testData[idx], value: Number(data) },
              ...testData.slice(idx + 1, testData.length),
            ])
          }
        />
      ))}
    </div>
  )
}
