let products=[];
let currentPage=1;
let pageSize=10;
let sortField=null;
let sortDir='asc';
function setProducts(list){products=list||[]}
function getProducts(){return products.slice()}
function setPageSize(n){pageSize=Number(n||10)}
function getPageSize(){return pageSize}
function setCurrentPage(n){currentPage=Number(n||1)}
function getCurrentPage(){return currentPage}
function toggleSort(field){if(sortField!==field){sortField=field;sortDir='asc'}else{sortDir=sortDir==='asc'?'desc':'asc'}}
function getSort(){return {field:sortField,dir:sortDir}}
function getFiltered(q){const s=(q||'').toLowerCase();if(!s)return products.slice();return products.filter(p=>(p.title||'').toLowerCase().includes(s))}
function getSorted(list){const sort=getSort();if(!sort.field)return list.slice();const dir=sort.dir==='asc'?1:-1;return list.slice().sort((a,b)=>{let va,vb;if(sort.field==='title'){va=(a.title||'').toLowerCase();vb=(b.title||'').toLowerCase()}else{va=Number(a.price||0);vb=Number(b.price||0)}if(va<vb)return-1*dir;if(va>vb)return 1*dir;return 0})}
function getPaged(list){const total=list.length;const pages=Math.max(1,Math.ceil(total/pageSize));if(currentPage>pages)currentPage=pages;const start=(currentPage-1)*pageSize;return {slice:list.slice(start,start+pageSize),pages}}
window.State={setProducts,getProducts,setPageSize,getPageSize,setCurrentPage,getCurrentPage,toggleSort,getSort,getFiltered,getSorted,getPaged}
