let mouse = null;
let isTool = false;
let isRunning = false;
const SPAN_LIST = 'span[data-isVisible = "true"]';

$(function () {
    $("#toast_con").css("left", `${$(document).width() / 2 - ($("#toast_con").width() / 2)}px`);
    $('span#list').dequeue();

    $('aside, aside *, span#list').not('#docs').hover(function (event) {
        if(isTool == false){
            if (Math.floor(Number($(SPAN_LIST).css('left').replace('px', ''))) <= '30' && $(SPAN_LIST).css('opacity') == '0' && $(SPAN_LIST).css('display') == 'none') {
                $('span#list').dequeue();
                $('body').css('overflow', 'hidden');
                $('body').css('touch-action', 'none');
                $(SPAN_LIST).css({ 'left': '0', 'opacity': '0', 'display': 'none' });
                $(SPAN_LIST).css({ 'display': 'block', 'visibility': 'visible' });
                if (window.innerWidth > 800) {
                    $('span#list').animate({ 'left': '10rem' }, 300);
                } else {
                    $('span#list').animate({ 'left': '5rem' }, 300);
                }
                setTimeout(function () {
                    $(SPAN_LIST).animate({ 'opacity': '1' }, 300);
                }, 570);
            }
        }else{
            $('aside').css('width', $('aside').width());
            event.preventDefault();
        }
    });

    $('aside').mouseleave(function () {
        $('span#list, input').dequeue();
        $('body').css('overflow', 'visible');
        $('aside, aside *').css('overflow', '');
        $('body').css('touch-action', 'auto');
        if (window.innerWidth > 800) {
            $('span#list').css({ 'left': '10rem' });
        } else {
            $('span#list').css({ 'left': '5rem' });
        }
        $('span#list').animate({ 'opacity': '0' }, 300);
        $('span#list').animate({ 'left': '0' }, 300);
        setTimeout(function () {
            $('span#list').css({ 'display': 'none' });
        }, 600);
    });

    $("dl span dd, li.sA").click(function (event) {
        $(SPAN_LIST + ', form').dequeue();
        var offset = $("div#" + event.target.id.replace("d", "")).offset();
        $('article').animate({ opacity: "0" }, 700);
        setTimeout(function () {
            $("html").scrollTop(offset.top - '115');
            $('article').animate({ opacity: "1" }, 700);
        }, 700);
    });

    $("#docs").click(function() {
        location.reload();
    });

    $(".sdb").on("click", function () {
        if (window.innerWidth < 800) {
            isOpen.side = false;
            $("div#sideBar").css("display", "none");
            $("div#side").css("display", "none");
        }
    });

    $("li.a").click(function () {
        window.open($(this).attr('id'));
    });

    $("img.sttc").attr("title", "정적인 속성이나 메서드입니다.");
    $("img.prttp").attr("title", "프로토타입 속성이거나 프로토타입 메서드입니다.");

    $(document).keydown(function (e) {
        if (e.which == 191 && $('input#search_txt').is(':focus') == false) {
            toolbar();
        }
    });

    function toolbar() {
        $('section#tool').dequeue();
        if(isTool == false) {
            $('span#list, input').dequeue();
            $('section#tool').css({'display' : 'block', 'visibilty' : 'visible', 'opacity' : '0'});
            $('section#tool').animate({'opacity' : '1'}, 300);
            isTool = true;
            $('body').css('overflow', 'hidden');
            $('body').css('touch-action', 'none');
        }else{
            $('section#tool').css({'visibilty' : 'visible', 'opacity' : '1'});
            $('section#tool').animate({'opacity' : '0'}, 300);
            setTimeout(function(){
                $('section#tool').css({'display' : 'none'});
            }, 300);
            isTool = false;
            $('aside').removeAttr('style');
            $('body').css('overflow', 'auto');
            $('body').css('touch-action', 'auto');
        }
    }
});
