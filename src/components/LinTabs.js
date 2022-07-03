import React, { useState } from "react"

function Tab(props) {
  const { tabSet } = props 
  const arr = Object.keys(tabSet) // 由tab标签名组成的数组
  const [selected, setSelected] = useState(arr[0]) // 当前选中的tab标签
  
  function select(item) {
    setSelected(item)
  }

  return (
        <div>
            <div className="selectWrapper">
                {arr.map(item => (
                    <div
                        key={item}
                        className={item === selected ? "selectItem_active" : "selectItem_basic"}
                        onClick={() => select(item)}
                    >
                        {item}
                    </div>
                ))}
            </div>
            {tabSet[selected]}
        </div>
  )
}

export default Tab