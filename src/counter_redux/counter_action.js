export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";

let increment = () => {
    return {
        type : INCREMENT,
        payload:"I am Increment"
    };
}

let decrement = () => {
    return {
        type : DECREMENT,
        payload:"I am decrement"
    };
}

export {increment, decrement}

