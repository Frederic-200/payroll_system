$(document).ready(()=>{
    
    $("#btn-logout").on("click", ()=>{
        window.location.href = "index.html";
    }); 

    $("#btn-home").on("click", ()=>{
        window.location.href = "home.html";
    });

    $("#btn-option").on("click", ()=>{
        //Open Modal
    });

    $("#btn-back").on("click", ()=>{
        window.location.href = "home.html";
    });

    $(".cb-head").on("change", ()=>{
        if($(".cb-head").prop("checked") == true){
            $('.cb-item').prop('checked', true);
        }else{
            $('.cb-item').prop('checked', false);
        }
    });

    $(".btn-profile").on("click", ()=>{
        window.location.href = "profile.html";
    });
    
    $("#btn-add-employee").on("click",()=>{
        $("#modal").fadeToggle(200);
    });

    $("#btn-modal-close").on("click", ()=>{
        $("#modal").fadeToggle(200);
    });

    $("#btn-modal-cancel").on("click", ()=>{
        $("#modal").fadeToggle(200);
    });

    $("#btn-modal-confirm").on("click", ()=>{
        $("#modal").fadeToggle(200);
    });

    $("#btn-profile-back").on("click", ()=>{
        window.location.href = "home.html";
    });

});