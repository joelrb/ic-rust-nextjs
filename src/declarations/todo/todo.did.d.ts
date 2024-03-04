import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';
import type { IDL } from '@dfinity/candid';

export interface ToDo { 'completed' : boolean, 'description' : string }
export interface _SERVICE {
  'addTodo' : ActorMethod<[string], bigint>,
  'clearComplete' : ActorMethod<[], undefined>,
  'getAllTodos' : ActorMethod<[], Array<[bigint, ToDo]>>,
  'toggleTodo' : ActorMethod<[bigint], undefined>,
}
export declare const idlFactory: IDL.InterfaceFactory;
export declare const init: ({ IDL }: { IDL: IDL }) => IDL.Type[];
