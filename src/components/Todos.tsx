import React, { useEffect } from "react"
import { useActorMethod } from "service/hello"
import Todo from "./Todo"

interface TodosProps {}

let timer: NodeJS.Timeout

const Todos: React.FC<TodosProps> = ({}) => {
  const { call, data, error, loading } = useActorMethod("getAllTodos")

  useEffect(() => {
    timer = setInterval(() => {
      call()
    }, 5000)

    call()
    return () => {
      clearInterval(timer)
    }
  }, [])

  return (
    <div>
      <section>
        <label>Todos: &nbsp;</label>
        {loading ? <span>Loading...</span> : null}
        {error ? <span>Error: {JSON.stringify(error)}</span> : null}
        {data && data.length > 0
          ? data.map(([id, todo]) => <Todo {...todo} key={id} id={id} />)
          : null}
      </section>
    </div>
  )
}

export default Todos
