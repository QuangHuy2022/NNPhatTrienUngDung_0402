document.addEventListener('DOMContentLoaded',()=>{Events.bindEvents();API.fetchProducts().then(list=>{State.setProducts(list);Render.render()}).catch(()=>{State.setProducts([]);Render.render()})})
