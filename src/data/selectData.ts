import { SelectOption } from '../components/Select'

export const regionOptions: SelectOption[] = [
  { label: 'Все регионы', value: 'Все регионы' },
  { label: 'Бразилия', value: 'Бразилия' },
  { label: 'Колумбия', value: 'Колумбия' },
  { label: 'Эфиопия', value: 'Эфиопия' },
  { label: 'Коста-Рика', value: 'Коста-Рика' },
]

export const roastingOptions: SelectOption[] = [
  { label: 'Любая обжарка', value: 'Любая обжарка' },
  { label: 'Светлая', value: 'Светлая' },
  { label: 'Тёмная', value: 'Тёмная' },
  { label: 'Средняя', value: 'Средняя' },
]

export const weightOptions: SelectOption[] = [
  { label: 'Любой вес', value: 'Любой вес' },
  { label: '250 г', value: '250' },
  { label: '1 кг', value: '1000' },
]
