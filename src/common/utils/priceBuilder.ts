// util function to add dots every 3 digits in currency values
export const priceBuilder = (num: number) => {
    return num.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "1.");
}