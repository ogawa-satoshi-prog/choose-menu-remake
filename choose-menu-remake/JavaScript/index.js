function appendItem(id, name, price) {
    const tvMenu = document.getelementById("tvMenu");
    let ID = id.split(",");
    let NAME = name.split(",");
    let MENU = price.split(",");
    for(let i = 0; i < ID.length; i++) {
        //idの追加
        let idItem = document.createElement('td');
        idItem.className = "id";
        idItem.appendChild(menus[i]);
        //nameの追加
        let nameItem = document.createElement('td');
        idItem.className = "name";
        nameItem.appendChild(menus[i]);
        //priceの追加
        let priceItem = document.createElement('td');
        idItem.className = "price";
        priceItem.appendChild(menus[i]);
        //trの追加
        let newLine = document.createElement('tr');
        newLine.className = "line";
        newLine.appendChild(idItem);
        newLine.appendChild(nameItem);
        newLine.appendChild(priceItem);
        //テーブルに追加
        tvMenu.appendChild(newLine)
    }
}
