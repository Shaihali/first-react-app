

export const Icons = ({color, like}) => {
    return (
        <>
            <svg onClick = {like} version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 1024 1024">
                <path fill={color} d="M513.344 267.040c0 0-64-136.384-208-136.384-157.344 0-240 133.344-240 266.656 0 221.344 448 496 448 496s445.312-272 445.312-496c0-136-85.312-266.656-237.312-266.656s-208 136.384-208 136.384z"></path>
            </svg>
        </>
    )
}