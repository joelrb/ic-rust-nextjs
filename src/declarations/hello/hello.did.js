export const idlFactory = ({ IDL }) => {
  const ToDo = IDL.Record({ 'completed' : IDL.Bool, 'description' : IDL.Text });
  return IDL.Service({
    'addTodo' : IDL.Func([IDL.Text], [IDL.Nat], []),
    'clearAllTodos' : IDL.Func([], [IDL.Text], []),
    'clearComplete' : IDL.Func([], [], []),
    'getAllTodos' : IDL.Func(
        [],
        [IDL.Vec(IDL.Tuple(IDL.Nat, ToDo))],
        ['query'],
      ),
    'showTodos' : IDL.Func([], [IDL.Text], ['query']),
    'toggleTodo' : IDL.Func([IDL.Nat], [], []),
  });
};
export const init = ({ IDL }) => { return []; };
