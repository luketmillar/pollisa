import styled from 'styled-components'
import { Colors } from 'styles'


const Input = styled.input`
    outline: none;
    
    font-size: 18px;

    border: 2px solid transparent;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.15);

    padding: 10px 20px;
    height: 52px;
    border-radius: 12px;

    color: ${Colors.black};
    background-color: transparent;
    border: 2px solid #CDCDCD;
    box-shadow: none;
    :hover {
        border-color: #BABABA;
    }
    :focus {
        border-color: ${Colors.blue.regular};
    }
`

export default Input