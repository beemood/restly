import { Delete } from '@nestjs/common';
import { InvalidResourceOperationNameError } from '../../errors/invalid-resource-operation-name.error.js';
import {
  inferResourceOperationNameFromOperationName,
  ResourceOperationNamePrefix,
} from '../../names/resource-operation-name.js';
import { DeleteMany, DeleteOne, DeleteOneById } from './delete.js';
import { Find, FindMany, FindOne, FindOneById } from './get.js';
import {
  Create,
  CreateMany,
  CreateOne,
  Save,
  SaveMany,
  SaveOne,
} from './post.js';
import { Update, UpdateMany, UpdateOne, UpdateOneById } from './put.js';

export function AutoWireMethod(): MethodDecorator {
  return (...args) => {
    const methodName = args[1].toString();
    const operationName =
      inferResourceOperationNameFromOperationName(methodName);

    if (operationName == undefined) {
      throw new InvalidResourceOperationNameError(methodName);
    }

    switch (operationName) {
      case ResourceOperationNamePrefix.Find: {
        Find()(...args);

        break;
      }
      case ResourceOperationNamePrefix.FindOne: {
        FindOne()(...args);

        break;
      }

      case ResourceOperationNamePrefix.FindOneById: {
        FindOneById()(...args);

        break;
      }
      case ResourceOperationNamePrefix.FindMany: {
        FindMany()(...args);

        break;
      }

      case ResourceOperationNamePrefix.Create: {
        Create()(...args);
        break;
      }
      case ResourceOperationNamePrefix.CreateOne: {
        CreateOne()(...args);

        break;
      }
      case ResourceOperationNamePrefix.CreateMany: {
        CreateMany()(...args);

        break;
      }
      case ResourceOperationNamePrefix.Save: {
        Save()(...args);

        break;
      }
      case ResourceOperationNamePrefix.SaveOne: {
        SaveOne()(...args);

        break;
      }
      case ResourceOperationNamePrefix.SaveMany: {
        SaveMany()(...args);

        break;
      }
      case ResourceOperationNamePrefix.Update: {
        Update()(...args);

        break;
      }
      case ResourceOperationNamePrefix.UpdateOne: {
        UpdateOne()(...args);

        break;
      }

      case ResourceOperationNamePrefix.UpdateOneById: {
        UpdateOneById()(...args);

        break;
      }
      case ResourceOperationNamePrefix.UpdateMany: {
        UpdateMany()(...args);

        break;
      }

      case ResourceOperationNamePrefix.Delete: {
        Delete()(...args);

        break;
      }
      case ResourceOperationNamePrefix.DeleteOne: {
        DeleteOne()(...args);

        break;
      }

      case ResourceOperationNamePrefix.DeleteOneById: {
        DeleteOneById()(...args);

        break;
      }
      case ResourceOperationNamePrefix.DeleteMany: {
        DeleteMany()(...args);

        break;
      }
      case ResourceOperationNamePrefix.FindOneBy:
      case ResourceOperationNamePrefix.FindManyBy:
      case ResourceOperationNamePrefix.UpdateOneBy:
      case ResourceOperationNamePrefix.UpdateManyBy:
      case ResourceOperationNamePrefix.DeleteManyBy:
      case ResourceOperationNamePrefix.DeleteOneBy: {
        throw new InvalidResourceOperationNameError(
          `Cannot autowire ${methodName}`
        );
      }
      default: {
        throw new InvalidResourceOperationNameError(
          `Cannot autowire ${methodName}`
        );
      }
    }
  };
}
