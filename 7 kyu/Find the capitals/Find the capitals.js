let capitals = (word) =>
    word.split("").filter((el) => el === el.toUpperCase()).map((el) => word.indexOf(el));