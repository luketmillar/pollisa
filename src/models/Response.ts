export default interface IResponse<T> {
    id: string
    questionId: string
    value: T
}