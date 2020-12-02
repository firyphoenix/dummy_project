export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";

let increment = () => {
    return {
        type : INCREMENT
    };
}

let decrement = () => {
    return {
        type : DECREMENT
    };
}

export {increment, decrement}

