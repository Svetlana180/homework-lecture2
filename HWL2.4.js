
const vovelsCounter = (str) => {
    const vovels = ['a', 'e', 'i', 'o', 'u']
    let counter = 0
    for(letter of str.toLowerCase()){
        if(vovels.includes(letter)){
            counter = counter + 1
        }
    }
    return counter
}
console.log("Result  is : " + vovelsCounter('The current directory is AD-123'));
console.log("Finish");
