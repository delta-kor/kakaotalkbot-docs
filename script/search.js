var base = "https://kkotbot-docs.kro.kr/"

function glide(pos){ $("html").animate({ scrollTop: $(pos).offset().top - 155 }, 1500, "swing"); }

$(document).ready(function(){
    if (decodeURIComponent(location.href).startsWith(base + "?")){
        var url = decodeURIComponent(location.href).substring(base.length + 1);

        if (url.startsWith("search=")){
            var search_text = url.substring("search=".length);
            //초기화
            document.getElementById('search').value = search_text;
            //이동
            var searched = false;
            var searching = true;
            var title = [];
            var contents = [];

            for (var i = 0; i < document.getElementsByClassName("content").length; i++) {
                if (searching == true) {
                    if (!!document.getElementsByClassName("content")[i].getElementsByClassName("content")) {
                        for (var j = 0; j < document.getElementsByClassName("content")[i].getElementsByClassName("content").length; j++) {
                            if (document.getElementsByClassName("content")[i].getElementsByClassName("content")[j].getElementsByTagName("p")[0].innerText.toLowerCase().replace(" ", "").trim().indexOf(search_text.toLowerCase().replace(" ", "").trim()) != -1) {
                                title.push("div#" + document.getElementsByClassName("content")[i].getElementsByClassName("content")[j].id);
                                searched = true;
                            } else {
                                contents.push("div#" + document.getElementsByClassName("content")[i].getElementsByClassName("content")[j].id);
                                searched = true;
                            }
                        }
                    } /*else*/
                    if (document.getElementsByClassName("content")[i].innerText.toLowerCase().replace(" ", "").trim().indexOf(search_text.toLowerCase().replace(" ", "").trim()) != -1) {
                        if (document.getElementsByClassName("content")[i].getElementsByTagName("p")[0].innerText.toLowerCase().replace(" ", "").trim().indexOf(search_text.toLowerCase().replace(" ", "").trim()) != -1) {
                            title.push("div#" + document.getElementsByClassName("content")[i].id);
                            searched = true;
                        } else {
                            contents.push("div#" + document.getElementsByClassName("content")[i].id);
                            searched = true;
                        }
                    }
                }
            }
            if (searched == false || document.getElementById("body").innerText.toLowerCase().replace(" ", "").trim().indexOf(search_text.toLowerCase().replace(" ", "").trim()) == -1) {
                var inko = new Inko();
                if (document.getElementById("body").innerText.toLowerCase().replace(" ", "").trim().indexOf(inko.ko2en(search_text).toLowerCase().replace(" ", "").trim()) != -1) {
                    var searched = false;
                    var searching = true;
                    var title = [];
                    var contents = [];

                    for (var i = 0; i < document.getElementsByClassName("content").length; i++) {
                        if (searching == true) {
                            if (!!document.getElementsByClassName("content")[i].getElementsByClassName("content")) {
                                for (var j = 0; j < document.getElementsByClassName("content")[i].getElementsByClassName("content").length; j++) {
                                    if (document.getElementsByClassName("content")[i].getElementsByClassName("content")[j].getElementsByTagName("p")[0].innerText.toLowerCase().replace(" ", "").trim().indexOf(inko.ko2en(search_text).toLowerCase().replace(" ", "").trim()) != -1) {
                                        title.push("div#" + document.getElementsByClassName("content")[i].getElementsByClassName("content")[j].id);
                                        searched = true;
                                    } else {
                                        contents.push("div#" + document.getElementsByClassName("content")[i].getElementsByClassName("content")[j].id);
                                        searched = true;
                                    }
                                }
                            } /*else*/
                            if (document.getElementsByClassName("content")[i].innerText.toLowerCase().replace(" ", "").trim().indexOf(inko.ko2en(search_text).toLowerCase().replace(" ", "").trim()) != -1) {
                                if (document.getElementsByClassName("content")[i].getElementsByTagName("p")[0].innerText.toLowerCase().replace(" ", "").trim().indexOf(inko.ko2en(search_text).toLowerCase().replace(" ", "").trim()) != -1) {
                                    title.push("div#" + document.getElementsByClassName("content")[i].id);
                                    searched = true;
                                } else {
                                    contents.push("div#" + document.getElementsByClassName("content")[i].id);
                                    searched = true;
                                }
                            }
                        }
                    }
                    new Toast({message: '한-영 오타 수정입니다.\n'+search_text+'->'+inko.ko2en(search_text)});
                    if (title[0]) {
                        glide(title[0]);
                    } else {
                        glide(contents[0]);
                    }
                    console.log(title.join("\n"));
                    console.log(contents.join("\n"));
                } else if (document.getElementById("body").innerText.toLowerCase().replace(" ", "").trim().indexOf(inko.en2ko(search_text).toLowerCase().replace(" ", "").trim()) != -1) {
                    var searched = false;
                    var searching = true;
                    var title = [];
                    var contents = [];
                    
                    for (var i = 0; i < document.getElementsByClassName("content").length; i++) {
                        if (searching == true) {
                            if (!!document.getElementsByClassName("content")[i].getElementsByClassName("content")) {
                                for (var j = 0; j < document.getElementsByClassName("content")[i].getElementsByClassName("content").length; j++) {
                                    if (document.getElementsByClassName("content")[i].getElementsByClassName("content")[j].getElementsByTagName("p")[0].innerText.toLowerCase().replace(" ", "").trim().indexOf(inko.en2ko(search_text).toLowerCase().replace(" ", "").trim()) != -1) {
                                        title.push("div#" + document.getElementsByClassName("content")[i].getElementsByClassName("content")[j].id);
                                        searched = true;
                                    } else {
                                        contents.push("div#" + document.getElementsByClassName("content")[i].getElementsByClassName("content")[j].id);
                                        searched = true;
                                    }
                                }
                            } /*else*/
                            if (document.getElementsByClassName("content")[i].innerText.toLowerCase().replace(" ", "").trim().indexOf(inko.en2ko(search_text).toLowerCase().replace(" ", "").trim()) != -1) {
                                if (document.getElementsByClassName("content")[i].getElementsByTagName("p")[0].innerText.toLowerCase().replace(" ", "").trim().indexOf(inko.en2ko(search_text).toLowerCase().replace(" ", "").trim()) != -1) {
                                    title.push("div#" + document.getElementsByClassName("content")[i].id);
                                    searched = true;
                                } else {
                                    contents.push("div#" + document.getElementsByClassName("content")[i].id);
                                    searched = true;
                                }
                            }
                        }
                    }
                    new Toast({message: '영-한 오타 수정입니다.\n'+search_text+'->'+inko.en2ko(search_text)});
                    if (title[0]) {
                        glide(title[0]);
                    } else {
                        glide(contents[0]);
                    }
                    console.log(title.join("\n"));
                    console.log(contents.join("\n"));
                } else {
                    location.href = base + "search_not_found?=" + encodeURIComponent(search_text);
                }
            } else if (searched == true) {
                if (title[0]) {
                    glide(title[0]);
                } else {
                    glide(contents[0]);
                }
                console.log(title.join("\n"));
                console.log(contents.join("\n"));
            }
        } else {
            console.log(url)
            location.href = base + '404.html';
        }
    }
});