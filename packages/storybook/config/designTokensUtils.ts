export type DesignTokenTree = Record<string, unknown>;

type EmptyDesignTokenTree = Record<string, unknown>;

const hasOwnProperty = (value: object, property: string) => Object.prototype.hasOwnProperty.call(value, property);

const isPlainObject = (value: unknown): value is Record<string, unknown> => {
  if (value === null || typeof value !== 'object') {
    return false;
  }

  const prototype = Object.getPrototypeOf(value);

  return prototype === null || prototype === Object.prototype;
};

const isDesignTokenDefinition = (value: Record<string, unknown>) =>
  hasOwnProperty(value, 'value') ||
  hasOwnProperty(value, '$value') ||
  hasOwnProperty(value, 'css') ||
  hasOwnProperty(value, '$extensions');

const isHiddenDesignToken = (value: unknown) => {
  if (!isPlainObject(value) || !isPlainObject(value.$extensions)) {
    return false;
  }

  return value.$extensions['nl.nldesignsystem.hidden'] === true;
};

const createEmptyDesignTokenNode = (value: unknown): unknown => {
  if (isPlainObject(value)) {
    if (isDesignTokenDefinition(value)) {
      return {};
    }

    return Object.fromEntries(
      Object.entries(value)
        .filter(([, child]) => !isHiddenDesignToken(child))
        .map(([key, child]) => [key, createEmptyDesignTokenNode(child)]),
    );
  }

  if (Array.isArray(value)) {
    return value.map(createEmptyDesignTokenNode);
  }

  return value;
};

export const createEmptyDesignTokenTree = (definition: DesignTokenTree): EmptyDesignTokenTree =>
  createEmptyDesignTokenNode(definition) as EmptyDesignTokenTree;
