import { SetStateAction } from "react";
import { Choice } from "../interfaces";


export function updatingSelectedChoiceStatus(oldChoice:Choice) {
    return {...oldChoice, status: oldChoice.status === "unselected" ? "selected": "unselected"}
}

export   function updatingRestChoiceStatus(oldChoice: Choice, multiChoice: boolean) {
    return multiChoice ? oldChoice : {...oldChoice, status: "unselected"};
}


export function handleChoiceClick (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, 
    id: number, setter: React.Dispatch<SetStateAction<Choice[]>>, isMultiChoices:boolean) {
    setter(prevChoices => {
      const updatedChoices: Choice[] = [];
      for (let i = 0; i < prevChoices.length; i++) 
        updatedChoices[i] = id === prevChoices[i].id 
        ? updatingSelectedChoiceStatus(prevChoices[i])
        : updatingRestChoiceStatus(prevChoices[i], isMultiChoices);
      return updatedChoices;
    })
  }
