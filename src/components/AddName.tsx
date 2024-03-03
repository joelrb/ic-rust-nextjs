import { UseSharedCallReturnType } from "@ic-reactor/react/dist/types"
import React, { useState } from "react"
import { Hello, useUpdateCall } from "service/hello"

interface AddNameProps {
  getName: UseSharedCallReturnType<Hello, "get_name">["call"]
}

const AddName: React.FC<AddNameProps> = ({ getName }) => {
  const [name, setName] = useState("")

  const { call, error, loading } = useUpdateCall({
    functionName: "set_name",
    args: [name]
  })

  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newName = e.target.value
    setName(newName)
  }

  const setNameHandler = async () => {
    await call()
    await getName()
  }

  return (
    <div>
      <h2>Add Name</h2>
      <section>
        <label htmlFor="name">Enter your name: &nbsp;</label>
        <input
          id="name"
          alt="Name"
          type="text"
          value={name}
          onChange={onChangeName}
        />
        <button onClick={setNameHandler} disabled={loading}>
          {loading ? "Loading..." : "Set Name"}
        </button>
        {error ? <span>{error.message}</span> : null}
      </section>
    </div>
  )
}

export default AddName
