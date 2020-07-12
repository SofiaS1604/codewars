function findRoutes(routes) {
    let array = [];
    routes.map((route) => {
        if(!routes.find(el => el[1] === route[0])){
            array.push(route[0])
            array.push(route[1])
        }
    }).map(() => {
        routes.map((el) => {
            el[0] === array[array.length - 1] &&
            array.push(el[1]);
        });
    });

    return array.join(', ')
}