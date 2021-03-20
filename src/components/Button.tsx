import styled, { css } from 'styled-components'
import { Colors } from 'styles'

type ButtonVariant = 'primary' | 'secondary' | 'clear'

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

const Clear = css`
    color: ${Colors.black};
    background-color: transparent;
    border: 2px solid #CDCDCD;
    box-shadow: none;
    :hover {
        background: #CDCDCD;
        border-color: rgba(255,255,255, 0.05);
    }
    :active {
        background: #BABABA;
        border-color: rgba(255,255,255, 0.05);
    }
`

const getVariantCss = (variant: ButtonVariant = 'secondary') => {
    switch (variant) {
        case 'primary':
            return Primary
        case 'secondary':
            return Secondary
        case 'clear':
            return Clear
    }
}

type ButtonSize = 'regular' | 'small'

const Regular = css`
    padding: 10px 40px;
    height: 52px;
    border-radius: 12px;
`

const Small = css`
    padding: 6px 24px;
    height: 40px;
    border-radius: 8px;
`

const getSizeCss = (size: ButtonSize = 'regular') => {
    switch (size) {
        case 'regular':
            return Regular
        case 'small':
            return Small
    }
}

const Button = styled.button<{ variant?: ButtonVariant, size?: ButtonSize }>`
    outline: none;
    
    font-size: 18px;

    border: 2px solid transparent;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.15);

    ${props => getVariantCss(props.variant)}
    ${props => getSizeCss(props.size)}

    :disabled {
        opacity: 0.3;
    }
`

export default Button