function fmtMoney(v){return new Intl.NumberFormat('vi-VN',{style:'currency',currency:'VND'}).format(Number(v||0))}
function downloadCsv(rows,filename){const csv=rows.join('\n');const blob=new Blob([csv],{type:'text/csv;charset=utf-8;'});const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download=filename;document.body.appendChild(a);a.click();a.remove();URL.revokeObjectURL(url)}
window.Utils={fmtMoney,downloadCsv}
