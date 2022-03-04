const hello = () => "hello";
const word = () => "word"

function* generator(){

    yield hello();
    yield word();

    return `${hello()}, ${word()}!`
}

const r = generator();

const run = () => console.log(r.next());
