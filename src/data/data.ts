
import { Category } from './models'

interface category {
    id: string
    title: string
    color: string
}

export const CATEGORIES: Array<category> = [
    new Category({ 'id': 'C1', 'title': 'Work', 'color': '#0214f4' }),
    new Category({ 'id': 'C2', 'title': 'Personal', 'color': '#0214f4' }),
    new Category({ 'id': 'C3', 'title': 'Sport', 'color': 'green' }),
    new Category({ 'id': 'C4', 'title': 'Learning', 'color': 'purple' }),
    new Category({ 'id': 'C5', 'title': 'Relax', 'color': 'coral' }),
    new Category({ 'id': 'C6', 'title': 'Reading', 'color': '#41f02d' }),
]