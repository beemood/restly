import { type EventEmitter2 } from '@nestjs/event-emitter';
import { ResourceOperationNamePrefix } from '../names/resource-operation-name.js';
import { createResourceEventName } from './create-resource-event-name.js';
import { type EventPayload } from './resource-event-listeners.js';

export interface ResourceEventEmitter {
  emitFind(payload: EventPayload): void;

  emitFindOne(payload: EventPayload): void;

  emitFindOneBy(payload: EventPayload): void;

  emitFindOneById(payload: EventPayload): void;

  emitFindMany(payload: EventPayload): void;

  emitFindManyBy(payload: EventPayload): void;

  emitCreate(payload: EventPayload): void;

  emitCreateOne(payload: EventPayload): void;

  emitCreateMany(payload: EventPayload): void;

  emitSave(payload: EventPayload): void;

  emitSaveOne(payload: EventPayload): void;

  emitSaveMany(payload: EventPayload): void;

  emitUpdate(payload: EventPayload): void;

  emitUpdateOne(payload: EventPayload): void;

  emitUpdateOneBy(payload: EventPayload): void;

  emitUpdateOneById(payload: EventPayload): void;

  emitUpdateMany(payload: EventPayload): void;

  emitUpdateManyBy(payload: EventPayload): void;

  emitDelete(payload: EventPayload): void;

  emitDeleteOne(payload: EventPayload): void;

  emitDeleteOneBy(payload: EventPayload): void;

  emitDeleteOneById(payload: EventPayload): void;

  emitDeleteMany(payload: EventPayload): void;

  emitDeleteManyBy(payload: EventPayload): void;
}

export class ResourceEventEmiterService implements ResourceEventEmitter {
  constructor(
    protected readonly resourceName: string,
    protected readonly eventEmitter2: EventEmitter2
  ) {}

  emitFind(payload: EventPayload): void {
    this.eventEmitter2.emit(
      createResourceEventName(
        this.resourceName,
        ResourceOperationNamePrefix.Find
      ),
      payload
    );
  }

  emitFindOne(payload: EventPayload): void {
    this.eventEmitter2.emit(
      createResourceEventName(
        this.resourceName,
        ResourceOperationNamePrefix.FindOne
      ),
      payload
    );
  }
  emitFindOneBy(payload: EventPayload): void {
    this.eventEmitter2.emit(
      createResourceEventName(
        this.resourceName,
        ResourceOperationNamePrefix.FindOneBy
      ),
      payload
    );
  }
  emitFindOneById(payload: EventPayload): void {
    this.eventEmitter2.emit(
      createResourceEventName(
        this.resourceName,
        ResourceOperationNamePrefix.FindOneById
      ),
      payload
    );
  }
  emitFindMany(payload: EventPayload): void {
    this.eventEmitter2.emit(
      createResourceEventName(
        this.resourceName,
        ResourceOperationNamePrefix.FindMany
      ),
      payload
    );
  }
  emitFindManyBy(payload: EventPayload): void {
    this.eventEmitter2.emit(
      createResourceEventName(
        this.resourceName,
        ResourceOperationNamePrefix.FindManyBy
      ),
      payload
    );
  }
  emitCreate(payload: EventPayload): void {
    this.eventEmitter2.emit(
      createResourceEventName(
        this.resourceName,
        ResourceOperationNamePrefix.Create
      ),
      payload
    );
  }
  emitCreateOne(payload: EventPayload): void {
    this.eventEmitter2.emit(
      createResourceEventName(
        this.resourceName,
        ResourceOperationNamePrefix.CreateOne
      ),
      payload
    );
  }
  emitCreateMany(payload: EventPayload): void {
    this.eventEmitter2.emit(
      createResourceEventName(
        this.resourceName,
        ResourceOperationNamePrefix.CreateMany
      ),
      payload
    );
  }
  emitSave(payload: EventPayload): void {
    this.eventEmitter2.emit(
      createResourceEventName(
        this.resourceName,
        ResourceOperationNamePrefix.Save
      ),
      payload
    );
  }
  emitSaveOne(payload: EventPayload): void {
    this.eventEmitter2.emit(
      createResourceEventName(
        this.resourceName,
        ResourceOperationNamePrefix.SaveOne
      ),
      payload
    );
  }
  emitSaveMany(payload: EventPayload): void {
    this.eventEmitter2.emit(
      createResourceEventName(
        this.resourceName,
        ResourceOperationNamePrefix.SaveMany
      ),
      payload
    );
  }
  emitUpdate(payload: EventPayload): void {
    this.eventEmitter2.emit(
      createResourceEventName(
        this.resourceName,
        ResourceOperationNamePrefix.Update
      ),
      payload
    );
  }
  emitUpdateOne(payload: EventPayload): void {
    this.eventEmitter2.emit(
      createResourceEventName(
        this.resourceName,
        ResourceOperationNamePrefix.UpdateOne
      ),
      payload
    );
  }
  emitUpdateOneBy(payload: EventPayload): void {
    this.eventEmitter2.emit(
      createResourceEventName(
        this.resourceName,
        ResourceOperationNamePrefix.UpdateOneBy
      ),
      payload
    );
  }
  emitUpdateOneById(payload: EventPayload): void {
    this.eventEmitter2.emit(
      createResourceEventName(
        this.resourceName,
        ResourceOperationNamePrefix.UpdateOneById
      ),
      payload
    );
  }
  emitUpdateMany(payload: EventPayload): void {
    this.eventEmitter2.emit(
      createResourceEventName(
        this.resourceName,
        ResourceOperationNamePrefix.UpdateMany
      ),
      payload
    );
  }
  emitUpdateManyBy(payload: EventPayload): void {
    this.eventEmitter2.emit(
      createResourceEventName(
        this.resourceName,
        ResourceOperationNamePrefix.UpdateManyBy
      ),
      payload
    );
  }
  emitDelete(payload: EventPayload): void {
    this.eventEmitter2.emit(
      createResourceEventName(
        this.resourceName,
        ResourceOperationNamePrefix.Delete
      ),
      payload
    );
  }
  emitDeleteOne(payload: EventPayload): void {
    this.eventEmitter2.emit(
      createResourceEventName(
        this.resourceName,
        ResourceOperationNamePrefix.DeleteOne
      ),
      payload
    );
  }
  emitDeleteOneBy(payload: EventPayload): void {
    this.eventEmitter2.emit(
      createResourceEventName(
        this.resourceName,
        ResourceOperationNamePrefix.DeleteOneBy
      ),
      payload
    );
  }
  emitDeleteOneById(payload: EventPayload): void {
    this.eventEmitter2.emit(
      createResourceEventName(
        this.resourceName,
        ResourceOperationNamePrefix.DeleteOneById
      ),
      payload
    );
  }
  emitDeleteMany(payload: EventPayload): void {
    this.eventEmitter2.emit(
      createResourceEventName(
        this.resourceName,
        ResourceOperationNamePrefix.DeleteMany
      ),
      payload
    );
  }
  emitDeleteManyBy(payload: EventPayload): void {
    this.eventEmitter2.emit(
      createResourceEventName(
        this.resourceName,
        ResourceOperationNamePrefix.DeleteManyBy
      ),
      payload
    );
  }
}
