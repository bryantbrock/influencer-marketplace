import isObject from 'lodash/isObject';
import isArray from 'lodash/isArray';
import camelCase from 'lodash/camelCase';
import transform from 'lodash/transform';

export const recurseKeysToCamel = (obj: object) =>
  transform(obj, (acc, value, key, target) => {
    const camelKey = isArray(target) ? key : camelCase(key);

    acc[camelKey] = isObject(value) ? recurseKeysToCamel(value) : value;
  });
