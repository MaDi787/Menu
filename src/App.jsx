import { useState } from 'react'
import menu from './data'
import Menu from './Menu'
import Title from './Title'
import Categories from './Categories'

const allCategories = ['all', ...new Set(menu.map((item) => item.category))]

const App = () => {
  const [items, setItems] = useState(menu)
  const [categories, setCategories] = useState(allCategories)

  const chooseCategory = (category) => {
    if (category === 'all') {
      setItems(menu)
      return
    }
    const newItems = menu.filter((item) => item.category === category)
    setItems(newItems)
  }

  return (
    <main>
      <section className='menu'>
        <Title text='our menu' />
        <Categories categories={categories} chooseCategory={chooseCategory} />
        <Menu items={items} />
      </section>
    </main>
  )
}
export default App
