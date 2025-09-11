import { Injectable } from '@nestjs/common';
import { CommonResourceClass } from './common-resource-class.js';

export function EventListener(): ClassDecorator {
  return (target) => {
    CommonResourceClass()(target);
    Injectable()(target);
  };
}
