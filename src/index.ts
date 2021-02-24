type Constructor = new () => object

interface ITuple {
    create(values: any[]): readonly any[]
}

class TupleError extends Error {
    constructor(message: string) {
        super(message)
        this.name = TupleError.name
    }
}

export default class $Tuple implements ITuple {
    types: Constructor[]
    private constructor(types: Constructor[]) {
        this.types = types
    }

    static initShape(types: Constructor[]) {
        return new $Tuple(types)
    }

    create(...values: any[]): readonly any[] {
        const tupleArray: any[] = []
        values.forEach((value, index) => {
            if (value instanceof this.types[index]) {
                tupleArray.push(value)
            } else {
                throw new TupleError(`${this.types[index].name} couldn't match with ${value}`)
            }
        })
        return Object.freeze(tupleArray)
    }
}

export const Tuple = $Tuple