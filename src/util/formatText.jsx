import { Fragment } from "react"

export const formatString = (str) => {
    return str?.split('. ').map((text, index, array) => (
        <Fragment key={index}>
            {text}{index !== array.length - 1 ? '.' : ''} 
            {index !== array.length - 1 && <br />}
        </Fragment>
    ))
}