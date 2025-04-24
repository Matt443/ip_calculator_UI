export function setFocusToNext(
  nodeList: Array<HTMLInputElement>,
  index: number,
): true | void {
  if (nodeList.length <= index + 1) return true;

  nodeList[++index].focus();
}
