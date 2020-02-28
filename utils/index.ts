export const findByDataTest = (component: React.FC, attribute: string) =>
  //@ts-ignore
  component.find(`[data-test="${attribute}"]`);
