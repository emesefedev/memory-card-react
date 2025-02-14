export const totalCards = {
  0: 8, // easy
  1: 18, // medium
  2: 24 // hard
}

export const cardsGridByLevel = {
  0: {
    gridTemplateRows: `repeat(2, 1fr)`,
    gridTemplateColumns: `repeat(auto-fit, minmax(320px, 1fr))`
  },
  1: {
    gridTemplateRows: `repeat(3, 1fr)`,
    gridTemplateColumns: `repeat(auto-fit, minmax(250px, 1fr))`
  },
  2: {
    gridTemplateRows: `repeat(3, 1fr)`,
    gridTemplateColumns: `repeat(auto-fit, minmax(175px, 1fr))`
  }
}

export const cardByLevel = {
  0: {
    gap: `16px`,
    paddingTop: `48px`,
    minHeight: `400px`,
  },
  1: {
    gap: `8px`,
    paddingTop: `24px`,
    minHeight: `250px`,
  },
  2: {
    gap: `16px`,
    paddingTop: `40px`,
    minHeight: `250px`,
  }
}