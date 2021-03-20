import styled, { css } from 'styled-components'
import { Colors } from 'styles'

type ButtonVariant = 'primary' | 'secondary'

const Primary = css`
    background: ${Colors.blue.regular};
    border-color: rgba(255,255,255, 0.05);
    color: ${Colors.white};
    :hover {
        background: ${Colors.blue.hover};
    }
    :active {
        background: ${Colors.blue.down};
    }
`

const Secondary = css`
    background: ${Colors.gray.regular};
    border-color: rgba(255,255,255, 0.05);
    color: ${Colors.white};
    :hover {
        background: ${Colors.gray.hover};
    }
    :active {
        background: ${Colors.gray.down};
    }
`

const getVariantCss = (variant: ButtonVariant) => {
    switch (variant) {
        case 'primary':
            return Primary
        case 'secondary':
            return Secondary
    }
}

const Button = styled.button<{ variant: ButtonVariant }>`
    border: none;
    width: 100%;
    
    font-size: 18px;
    padding: 14px 32px;
    box-sizing: border-box;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.15);
    border-radius: 12px;
    border: 2px solid transparent;
    outline: none;
    ${props => getVariantCss(props.variant)}
`

export default Button