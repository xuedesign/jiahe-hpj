       (function () {
            var options = {
            facebook: "783553025052670", // Facebook page ID
            line: "//line.me/R/ti/p/%40fij8467d", // Line QR code URL
            //call_to_action: "聯絡我", // Call to action
            button_color: "#E4C273", // Color of button
            position: "right", // Position may be 'right' or 'left'
            order: "facebook,line", // Order of buttons
            };

        var proto = document.location.protocol, host = "getbutton.io", url = proto + "//static." + host;
        var s = document.createElement('script'); s.type = 'text/javascript'; s.async = true; s.src = url + '/widget-send-button/js/init.js';
        s.onload = function () { WhWidgetSendButton.init(host, proto, options); };
        var x = document.getElementsByTagName('script')[0]; x.parentNode.insertBefore(s, x);
    })();