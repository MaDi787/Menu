import React from 'react'

const Categories = ({ categories, chooseCategory }) => {
  return (
    <div className='btn-container'>
      {categories.map((category) => {
        return (
          <button
            type='button'
            className='btn'
            key={category}
            onClick={() => chooseCategory(category)}
          >
            {category}
          </button>
        )
      })}
    </div>
  )
}

export default Categories
