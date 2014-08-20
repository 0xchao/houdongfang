//<![CDATA[
$(document).ready(function () {

    $("#jquery_jplayer_1").jPlayer({
        ready: function () {
            $(this).jPlayer("setMedia", {
                title: "后东方",
                flv: "/Themes/nopModern/Content/E.flv",
                poster: "/Themes/nopModern/Content/Eposter.jpg"
            }).jPlayer("play");
        },
        swfPath: "/Themes/nopModern/Scripts",
        supplied: "flv",
        size: {
            width: "100%",
            height: "640px",
            cssClass: "jp-video-fit"
        },
        smoothPlayBar: true,
        keyEnabled: true,
        remainingDuration: true,
        toggleDuration: true,
        loop: true,
        backgroundColor:"#FFFFFF"
    });

});
//]]>
