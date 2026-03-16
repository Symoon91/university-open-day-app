import React, { createContext, useState, useContext, useEffect } from 'react';

const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem('favorites');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const addFavorite = (item) => {
    if (!favorites.find(fav => fav.id === item.id && fav.type === item.type)) {
      setFavorites([...favorites, { ...item, timestamp: new Date().toISOString() }]);
    }
  };

  const removeFavorite = (id, type) => {
    setFavorites(favorites.filter(fav => !(fav.id === id && fav.type === type)));
  };

  const isFavorite = (id, type) => {
    return favorites.some(fav => fav.id === id && fav.type === type);
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error('useFavorites must be used within FavoritesProvider');
  }
  return context;
};
