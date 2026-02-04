const API_BASE='https://api.escuelajs.co/api/v1/products';
function fetchProducts(){return fetch(API_BASE).then(r=>r.json()).then(d=>Array.isArray(d)?d:[])}
function updateProduct(id,payload){return fetch(`${API_BASE}/${id}`,{method:'PUT',headers:{'Content-Type':'application/json'},body:JSON.stringify(payload)}).then(r=>{if(!r.ok)throw new Error('');return r.json()})}
function createProduct(payload){return fetch(API_BASE,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(payload)}).then(r=>{if(!r.ok)throw new Error('');return r.json()})}
window.API={fetchProducts,updateProduct,createProduct}
