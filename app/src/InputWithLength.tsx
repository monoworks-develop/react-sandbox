import { useState } from "react"

export default function InputWithLength(){
  const [value, setValue] = useState('');
  return (
    <div>
      <input type='text' value={value} onChange={(e) => {setValue(e.target.value)}} />
      <p>入力された文字列の長さは {value.length} です</p>
    </div>
  )
}