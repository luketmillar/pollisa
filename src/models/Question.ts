export interface IQuestion {
    id: string
    prompt: string
}

export interface ITrueFalseQuestion extends IQuestion {
    type: 'true-false'
}

export interface IOption {
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
    placeholder: string
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


export type QuestionType = 'true-false' | 'radio' | 'checkboxes' | 'short-response' | 'long-response' | 'number-response' | 'slider-response'
export const QuestionTypes: Array<{ type: QuestionType, name: string }> = [
    {
        type: 'true-false',
        name: 'True/False'
    },
    {
        type: 'radio',
        name: 'Multiple Choice'
    },
    {
        type: 'checkboxes',
        name: 'Multiple Options'
    },
    {
        type: 'short-response',
        name: 'Short reponse'
    }
]
type Question = ITrueFalseQuestion | IRadioQuestion | ICheckboxQuestion | IShortResponse | ILongResponse | INumberResponse | ISliderResponse
export default Question