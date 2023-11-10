import styled from 'styled-components'

interface PropsType {
  children: React.ReactNode,
  cta?: boolean,
  status?:string,
  onClick?: React.EventHandler<React.MouseEvent<HTMLButtonElement>>
}
/**
          <Button cta>Start Quizz</Button>
          <Button cta>Check answers</Button>
          <Button cta>Play again</Button>
          <Button status='unselected'>Start Quizz</Button>
          <Button status='correct'>Adios</Button>
          <Button status='uncorrect'>Start Quizz</Button>
          <Button status='selected'>Hola</Button>
 */

const StyledButton = styled.button<PropsType>`
    border-radius: ${({cta}) => cta ? "18px": "14px"};
    padding: ${({cta}) => cta ? ".6em 2.5em": ".2em 1em"};
    font-size:${({cta}) => cta ? "1.4rem": "1.1rem"};
    font-weight: 500;
    color: ${({cta}) => cta ? "#fff" : "#293264" };
    border-width: ${({status}) => status === 'unselected' ? "1px" : "0" };
    border-color: ${({cta}) => cta ? "#fff" : "#4D5B9E" };
    cursor: pointer;
    background: ${({status}) => {
      if (status === 'selected') return "#D6DBF5";
      else if (status === 'unselected') return "#fff";
      else if (status === 'correct') return '#94D7A2';
      else if (status === 'uncorrect') return '#F8BCBC';
      return "#4D5B9E";
    }};
    opacity: ${({status}) => status === 'uncorrect' ? '.7': '1'};
`

export default function Button({children, cta, status, onClick}: PropsType) {
  return (
    <StyledButton cta={cta} status={status} onClick={onClick}>
        {children}
    </StyledButton>
  )
}
