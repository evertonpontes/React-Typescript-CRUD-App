interface IDataBook {
    id?: number;
    label: string;
    author: string;
    gender: string;
    published: string;
    imgURL: string;
}

class Book {

    registers: IDataBook[]

    constructor() {
        this.registers = []
    }

    create({ label, published, author, gender, imgURL }: IDataBook) {

        let id = this.registers.length + 1
        this.registers.push({
            id: id,
            label: label,
            author: author,
            gender: gender,
            published: published,
            imgURL: imgURL
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

    updateOne({ id, label, published, author, gender, imgURL }: IDataBook) {
        
        let find = this.registers.find(el => el.id === id)

        if (find === undefined || find === null) throw new ReferenceError('Register not found')

        else {

            this.registers.map(el => {
                if (el.id === id) {
                    el.label = label || el.label
                    el.published = published || el.published
                    el.author = author || el.author
                    el.gender = gender || el.gender
                    el.imgURL = imgURL || el.imgURL
                }
            })
        }
        
    }
}

const tbBook = new Book()

const registers: IDataBook[] = [
    {
        label: 'The Hunger Games',
        author: 'Suzanne Collins',
        gender: 'Dystopia',
        published: 'September 14, 2008',
        imgURL: 't.ly/UbXO'
    },

    {
        label: 'The Chronicles of Narnia',
        author: 'C.S. Lewis',
        gender: 'Fantasy',
        published: 'January 1, 1956',
        imgURL: 't.ly/9_GU'
    },

    {
        label: 'The Call of Cthulhu and Other Weird Stories',
        author: 'H.P. Lovecraft',
        gender: 'Horror',
        published: 'January 1, 1926',
        imgURL: 't.ly/kgVA'
    },

    {
        label: "Alice's Adventures in Wonderland / Through the Looking-Glass",
        author: 'Lewis Carroll',
        gender: 'Fantasy',
        published: 'December 27, 1871',
        imgURL: 't.ly/PGDl'
    },

    {
        label: 'Dracula',
        author: 'Bram Stoker',
        gender: 'Horror',
        published: 'May 26, 1897',
        imgURL: 'shorturl.at/psCVZ'
    },

    {
        label: 'The Alchemist',
        author: 'Paulo Coelho',
        gender: 'Fantasy',
        published: 'January 1, 1988',
        imgURL: 'shorturl.at/mxyVY'
    },

    {
        label: 'The Lord of the Rings: The Fellowship of the Ring',
        author: 'J.R.R. Tolkien',
        gender: 'Adventure',
        published: 'July 29, 1954',
        imgURL: 'shorturl.at/ijsGK'
    },

    {
        label: 'The Lord of the Rings: The Two Towers',
        author: 'J.R.R. Tolkien',
        gender: 'Adventure',
        published: 'November 11, 1954',
        imgURL: 'shorturl.at/ahlMQ'
    },
]

registers.map(reg => {

    tbBook.create({
        label: reg.label,
        published: reg.published,
        author: reg.author,
        gender: reg.gender,
        imgURL: reg.imgURL
    })
})


const myDb = {
    tbBook: tbBook
}

export default myDb