import { type Any } from '@restly/types';

export type EventPayload = {
  handled: boolean;
  req: {
    id: string;
    body: Any;
    query: Any;
    params: Any;
    timestamp: number;
  };
  res?: {
    id: string;
    body: Any;
    timestamp: number;
  };
};

export interface OnFindEvent {
  onFind(payload: EventPayload): void;
}
export interface OnFindOneEvent {
  onFindOne(payload: EventPayload): void;
}
export interface OnFindOneByEvent {
  onFindOneBy(payload: EventPayload): void;
}
export interface OnFindOneByIdEvent {
  onFindOneById(payload: EventPayload): void;
}
export interface OnFindManyEvent {
  onFindMany(payload: EventPayload): void;
}
export interface OnFindManyByEvent {
  onFindManyBy(payload: EventPayload): void;
}
export interface OnCreateEvent {
  onCreate(payload: EventPayload): void;
}
export interface OnCreateOneEvent {
  onCreateOne(payload: EventPayload): void;
}
export interface OnCreateManyEvent {
  onCreateMany(payload: EventPayload): void;
}
export interface OnSaveEvent {
  onSave(payload: EventPayload): void;
}
export interface OnSaveOneEvent {
  onSaveOne(payload: EventPayload): void;
}
export interface OnSaveManyEvent {
  onSaveMany(payload: EventPayload): void;
}
export interface OnUpdateEvent {
  onUpdate(payload: EventPayload): void;
}
export interface OnUpdateOneEvent {
  onUpdateOne(payload: EventPayload): void;
}
export interface OnUpdateOneByEvent {
  onUpdateOneBy(payload: EventPayload): void;
}
export interface OnUpdateOneByIdEvent {
  onUpdateOneById(payload: EventPayload): void;
}
export interface OnUpdateManyEvent {
  onUpdateMany(payload: EventPayload): void;
}
export interface OnUpdateManyByEvent {
  onUpdateManyBy(payload: EventPayload): void;
}
export interface OnDeleteEvent {
  onDelete(payload: EventPayload): void;
}
export interface OnDeleteOneEvent {
  onDeleteOne(payload: EventPayload): void;
}
export interface OnDeleteOneByEvent {
  onDeleteOneBy(payload: EventPayload): void;
}
export interface OnDeleteOneByIdEvent {
  onDeleteOneById(payload: EventPayload): void;
}
export interface OnDeleteManyEvent {
  onDeleteMany(payload: EventPayload): void;
}
export interface OnDeleteManyByEvent {
  onDeleteManyBy(payload: EventPayload): void;
}
