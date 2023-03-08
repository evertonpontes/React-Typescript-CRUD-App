interface IDataBook {
    id?: number;
    label: string;
    year: number;
}

class Book {

    registers: IDataBook[]

    constructor() {
        this.registers = []
    }

    create({ label, year }: IDataBook) {

        let id = this.registers.length + 1
        this.registers.push({
            id: id,
            label: label,
            year: year
        })
    }

    findAll() {

        if (this.registers.length !== 0) {
            return this.registers
        } else {
            throw new ReferenceError('Database is empty')

        }

    }

    findOne(id: number) {

        let result = this.registers.find(el => el.id === id)

        if (result === undefined || result === null) {
            throw new ReferenceError('Register not found')
        } else {
            return result
        }

    }

    delete() {
        this.registers = []
    }

    deleteOne(id: number) {

        let find = this.registers.find(el => el.id === id)

        if (find === undefined || find === null) throw new ReferenceError('Register not found')

        else {

            let el = (el: IDataBook) => {
                return el.id !== id
            }

            let result = this.registers.filter(el)

            this.registers = result
        }

    }

    updateOne({ id, label, year }: IDataBook) {
        
        let find = this.registers.find(el => el.id === id)

        if (find === undefined || find === null) throw new ReferenceError('Register not found')

        else {

            this.registers.map(el => {
                if (el.id === id) {
                    el.label = label || el.label
                    el.year = year || el.year
                }
            })
        }
        
    }
}

const tbBook = new Book()

const registers = [
    {
        label: 'The Shawshank Redemption',
        year: 1994
    },
    {
        label: 'The Godfather',
        year: 1972
    },
    {
        label: 'The Godfather: Part II',
        year: 1974
    },
    {
        label: '12 Angry Men',
        year: 1957
    },
    {
        label: 'The Lord of the Rings: The Return of the King',
        year: 2003,
    }, {
        label: 'The Lord of the Rings: The Fellowship of the Ring',
        year: 2001,
    },
    {
        label: 'Star Wars: Episode V - The Empire Strikes Back',
        year: 1980,
    }
]

registers.map(reg => {

    tbBook.create({
        label: reg.label,
        year: reg.year
    })
})


const myDb = {
    tbBook: tbBook
}

export default myDb