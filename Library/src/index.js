
export function heavy(values) {

    if(values?.length && ((typeof values) === 'string')){
        return Array.from(new Set(values)).join('');
    }

    if(values?.length && ((typeof values) === 'object')){

        return Array.from(new Set(values));
    }

    throw new Error("Wrong data type");
    
}