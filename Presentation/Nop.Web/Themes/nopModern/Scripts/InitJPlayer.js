//<![CDATA[
$(document).ready(function () {

    $("#jquery_jplayer_1").jPlayer({
        ready: function () {
            $(this).jPlayer("setMedia", {
                title: "Big Buck Bunny",
                flv: "/Themes/nopModern/Content/30S.flv",
                poster: "/Themes/nopModern/Content/poster.png"
            });
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
