import { Choice } from "../interfaces";

export function getSelectedChoicesIds(choicesArr: Choice[]):number[] {
    const idsArr: number[] = [];
    for (let i = 0; i < choicesArr.length; i++) {
      if (choicesArr[i].status === "selected")
        idsArr.push(choicesArr[i].id);
    }
    return idsArr;
  }