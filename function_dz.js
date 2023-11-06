const node_for_click_all = document.getElementById("for_click_all")

function find_edit_all(){
    

    document.getElementsByTagName('div')[3].innerHTML='SIDOROVA'
    document.getElementsByTagName('div')[4].innerHTML='MARIYA'
    document.getElementsByTagName('div')[5].innerHTML='PAVLOVNA'
    document.getElementsByTagName('div')[7].innerHTML='01.10.1968'
}
node_for_click_all.addEventListener("click",find_edit_all)