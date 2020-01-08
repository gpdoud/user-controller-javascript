class UserCommon {
    
    static display = (user) => {
        $("#pid").val(user.id);
        $("#pusername").val(user.username);
        $("#ppassword").val(user.password);
        $("#pfirstname").val(user.firstname);
        $("#plastname").val(user.lastname);
        $("#pphone").val(user.phoneNumber);
        $("#pemail").val(user.email);
        $("#padmin").prop("checked", user.isAdmin);
        $("#previewer").prop("checked", user.isReviewer);
    }

    static save = () => {
        let user = {};
        user.id = $("#pid").val();
        user.username = $("#pusername").val();
        user.password = $("#ppassword").val();
        user.firstname = $("#pfirstname").val();
        user.lastname = $("#plastname").val();
        user.phoneNumber = $("#pphone").val();
        user.email = $("#pemail").val();
        user.isAdmin = $("#padmin").prop("checked");
        user.isReviewer = $("#previewer").prop("checked");
        return user;
    };

}