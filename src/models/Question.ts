export interface IQuestion {
    id: string
    prompt: string
}

export interface ITrueFalseQuestion extends IQuestion {
    type: 'true-false'
}

interface IOption {
    value: any
    label: string
}
export interface IRadioQuestion extends IQuestion {
    type: 'radio'
    options: IOption[]
}

export interface ICheckboxQuestion extends IQuestion {
    type: 'checkboxes'
    options: IOption[]
}

export interface IShortResponse extends IQuestion {
    type: 'short-response'
}

export interface ILongResponse extends IQuestion {
    type: 'long-response'
}

export interface INumberResponse extends IQuestion {
    type: 'number-response'
    min: number
    max: number
}

export interface ISliderResponse extends IQuestion {
    type: 'slider-response'
    min: number
    max: number
}

type Question = ITrueFalseQuestion | IRadioQuestion | ICheckboxQuestion | IShortResponse | ILongResponse | INumberResponse | ISliderResponse
export default Question