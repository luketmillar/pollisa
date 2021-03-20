import { getHistory } from "./history"

const goTo = (url: string, newTab?: boolean) => {
    if (newTab) {
        window.open(url, '_blank')
    } else {
        getHistory().push(url)
    }
}


const fn = {
    goTo
}

export default fn