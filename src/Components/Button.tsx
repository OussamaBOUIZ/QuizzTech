import styled from 'styled-components'

interface PropsType {
  children: React.ReactNode,
  cta?: boolean,
  status?:string
}

const StyledButton = styled.button<PropsType>`
    border-radius: ${({cta}) => cta ? "18px": "20px"};
    padding: ${({cta}) => cta ? "1em 3em": ".3em 1em"};
    font-size:${({cta}) => cta ? "1.4em": "1.2em"};
    font-weight: 500;
    color: ${({cta}) => cta ? "#fff" : "#293264" };
    border-width: ${({status}) => status === 'unselected' ? "2.5px" : "0" };
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

export default function Button({children, cta, status}: PropsType) {
  return (
    <StyledButton cta={cta} status={status}>
        {children}
    </StyledButton>
  )
}