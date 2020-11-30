import image from "./assets/images/1.jpg"

export type TBook = {
    id: number
    header: string
    description: string
    lastUpdate: string
    content: string
    image: string
}

export const books: TBook[] = [
    {
        id: 1,
        header: 'Волшебство не вызывает привыкания-3',
        description: 'Третья часть невероятных приключений Тимофея Бухлина.',
        lastUpdate: 'Last updated 3 mins ago',
        content: 'Бла бла',
        image: image,
    },
    {
        id: 2,
        header: 'Волшебство не вызывает привыкания-3',
        description: 'Третья часть невероятных приключений Тимофея Бухлина.',
        lastUpdate: 'Last updated 3 mins ago',
        content: 'Бла бла',
        image: image,
    },
    {
        id: 3,
        header: 'Волшебство не вызывает привыкания-3',
        description: 'Третья часть невероятных приключений Тимофея Бухлина.',
        lastUpdate: 'Last updated 3 mins ago',
        content: 'Бла бла',
        image: image,
    },
    {
        id: 4,
        header: 'Волшебство не вызывает привыкания-3',
        description: 'Третья часть невероятных приключений Тимофея Бухлина.',
        lastUpdate: 'Last updated 3 mins ago',
        content: 'Бла бла',
        image: image,
    },
]


/**************************/

export type TComment = {
    id: number;
    author: string;
    text: string;
    time: string;
}

export const comments: TComment[] = [
    {
        id: 1,
        author: "Антон Текшин",
        text:"Волшебство не вызывает привыкания-3",
        time:"21:01"
    },
    {
        id: 2,
        author: "Антон Текшин",
        text:"Волшебство не вызывает привыкания-3",
        time:"21:10"
    }
]

export default comments;