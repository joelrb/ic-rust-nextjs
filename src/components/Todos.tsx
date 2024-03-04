import React from "react"
import Todo from "./Todo"
import { useQueryCall } from "service/todo"

interface TodosProps {}

const Todos: React.FC<TodosProps> = ({}) => {
  const { data, error, loading } = useQueryCall({
    functionName: "getAllTodos",
    refetchInterval: 1000
  })

  return (
    <div>
      <section>
        <label>Todos: &nbsp;</label>
        {loading ? <span>Loading...</span> : null}
        {error ? <span>Error: {JSON.stringify(error)}</span> : null}
        {data && data.length > 0
          ? data[0]?.map(todo => <Todo {...todo} key={todo.id} />)
          : null}
      </section>
    </div>
  )
}

export default Todos
