import React, {memo} from 'react'

function Header() {
  return (
    <div>
      <h2 className="bg-dark text-center text-warning p-2">Todo List</h2>
    </div>
  )
}

export default memo(Header)
