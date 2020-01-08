let user = null;

$().ready(() => {

    let parms = getUrlParms();
    get(parms.id)
        .done((res) => {
            user = res.data;
            console.log(res);
            UserCommon.display(user);
        });

    $("#edit").click(() => { 
        window.location = `user-edit.component.html?id=${user.id}`; 
    });

    $("#delete").click(() => {
        remove(user)
            .done((res) => {
                console.log("Delete:", res);
                window.location = "user-list.component.html";
            });
    });

});

