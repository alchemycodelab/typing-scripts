const api = {
    saveCat(cat) {
        const json = JSON.stringify(cat);
        localStorage.setItem('cat', json);
    },
    getCat() {
        const data = localStorage.getItem('cat');
        const cat = JSON.parse(data);
        return cat;
    }
};

export default api;