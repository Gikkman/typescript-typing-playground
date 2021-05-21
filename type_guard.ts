type Template = {
    name?: string;
}

type User = {
    name: string;
}

function foo() : User {
    const subject:Template = {};
    subject.name = "Name here";
    if(isComplete(subject)) return subject;
    throw 'Handle Error'

}

function isComplete<G extends Record<keyof any, any>>(arg: G): arg is Required<G> {
    for(const key in arg) {
        const val = arg[key];
        if(val === undefined || val === null) return false;
    }
    return true;
}

const fooData = foo();
console.log(fooData);
