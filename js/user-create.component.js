let user = null;

$().ready(() => {

    $("#save").click(() => { 
        let usr = UserCommon.save(); 
        create(usr)
            .done((res) => {
                console.log("Create:", res);
                window.location = "user-list.component.html";
            })
            .fail((err) => {
                console.error(res);
            });    
        });

});