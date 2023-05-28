class WhatsAppBtn {
    constructor({
        phone: t,
        phones: e,
        text: s,
        backgroundColor: a,
        callTo: i,
        iconColor: l,
        position: c,
        positionText: n,
        style: o,
        width: h,
        ga: p,
        fb: $,
        pi: r
    }) {
        this.phone = t, this.phones = e || "", this.text = s || "", this.backgroundColor = a || "#4DC247", this.callTo = i || "", this.iconColor = l || "#fff", this.positionText = n || "tl", this.position = c || "lb", this.style = o || "", this.width = h || "60", this.ga = p || "", this.fb = $ || "", this.pi = r || "", this.url = window.location.href
    }
    renderButton() {
        let t = this.backgroundColor,
            e = this.iconColor,
            s = this.width,
            a = document.createElement("div");
        a.className = "jam_whatsapp", a.classList.add(this.position), a.classList.add(this.positionText), a.classList.add("dn"), null != this.style && a.setAttribute("style", this.style), document.body.appendChild(a);
        let i = document.createElement("link");
        i.setAttribute("href", "//cdn.jsdelivr.net/gh/sircam-html/ipfs.pg@main/static-data/whatsapp.min.css"), i.setAttribute("rel", "stylesheet"), i.setAttribute("type", "text/css"), document.body.appendChild(i);
        let l = this.phones,
            c = "",
            n = "",
            o = l.length > 1,
            h = this.text;
        if (h = (h = h.replace("[url]", "%0a%0a" + this.url)).replace(/[\u00A0-\u9999<>\&]/g, function(t) {
                return "&#" + t.charCodeAt(0) + ";"
            }), "" == l || l.length < 1) c = `https://wa.me/${this.phone}?text=${h}`, n = "link_whatsapp";
        else {
            c = "#", n = "link_whatsapp_toggle";
            let p = document.createElement("div");
            p.setAttribute("class", "jam_whatsapp_chatBox");
            let $ = `<div class='jam_whatsapp_chatBox_header'><div class="header_title">${this.callTo}</div><div class="header_close"><a href="#" class="link_whatsapp_close"><span></span></a></div></div>`;
            for (var r of ($ += '<div class="jam_whatsapp_chatBox_items">', l)) {
                let _ = r.split(":"),
                    d = _[0],
                    u = _[1];
                $ += `<div class="jam_whatsapp_chatBox_item"><a href="https://wa.me/${u}?text=${h}" class="link_whatsapp" target="_blank"><span class="item_name">${d}</span><span class="item_number">${u}</span></a></div>`
            }
            $ += "</div>", p.innerHTML = $, a.appendChild(p)
        }
        if (void 0 !== this.callTo && "" != this.callTo) {
            let w = document.createElement("div");
            w.setAttribute("class", "jam_whatsapp_text"), w.innerText = this.callTo, a.appendChild(w)
        }
        let v = document.createElement("a");
        v.setAttribute("href", c), v.setAttribute("class", n), v.setAttribute("style", "text-decoration: none"), v.setAttribute("target", "_blank"), a.appendChild(v);
        let g = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        g.setAttribute("id", "jam_whatsapp_widget"), g.setAttribute("viewBox", "0 0 32 32"), g.setAttribute("width", s), g.setAttribute("height", s), v.appendChild(g);
        let m = document.querySelector("#jam_whatsapp_widget"),
            b = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        b.setAttribute("id", "whatsapp_icon_path"), b.setAttribute("cx", "15.8"), b.setAttribute("cy", "15.8"), b.setAttribute("r", "15.2"), b.setAttribute("fill", t), m.appendChild(b);
        let f = document.createElementNS("http://www.w3.org/2000/svg", "path");
        f.setAttribute("d", "M18.9,17c-0.3,0-1,1.3-1.4,1.3c-0.1,0-0.2,0-0.3-0.1c-0.8-0.4-1.4-0.8-2-1.4 c-0.5-0.5-1.1-1.2-1.4-1.8c0-0.1-0.1-0.1-0.1-0.2c0-0.3,0.9-0.9,0.9-1.4c0-0.1-0.7-2-0.8-2.2c-0.1-0.3-0.2-0.5-0.6-0.5 c-0.2,0-0.3,0-0.5,0c-0.3,0-0.5,0.1-0.7,0.3c-0.6,0.6-1,1.2-1,2.1v0.1c0,0.9,0.4,1.9,1,2.6c1.2,1.7,2.4,3.2,4.3,4.1 c0.6,0.3,1.9,0.8,2.6,0.8c0.8,0,2-0.5,2.3-1.2c0.1-0.3,0.2-0.7,0.2-1c0-0.1,0-0.1,0-0.2C21.3,18.2,19.1,17,18.9,17z M16.2,24.2 c-1.6,0-3.3-0.5-4.6-1.4l-3.3,1l1.1-3.1c-1-1.4-1.6-3.2-1.6-5c0-4.7,3.8-8.4,8.4-8.4s8.4,3.8,8.4,8.4 C24.6,20.4,20.8,24.2,16.2,24.2z M16.2,5.6C10.6,5.6,6,10.1,6,15.7c0,1.8,0.5,3.7,1.5,5.2l-1.8,5.4l5.6-1.8 c4.9,2.7,11.1,0.9,13.8-4c0.8-1.5,1.3-3.2,1.3-4.9C26.3,10.1,21.8,5.6,16.2,5.6L16.2,5.6z"), f.setAttribute("id", "whatsapp_icon_path"), f.setAttribute("fill", e), m.appendChild(f);
        let A = this.ga,
            y = this.fb,
            x = this.pi;
        if (1 == o) {
            let C = document.querySelector(".jam_whatsapp a.link_whatsapp_toggle"),
                k = document.querySelector(".jam_whatsapp a.link_whatsapp_close");
            C.addEventListener("click", function(t) {
                t.preventDefault(), document.querySelector(".jam_whatsapp_chatBox").classList.toggle("show")
            }), k.addEventListener("click", function(t) {
                t.preventDefault(), document.querySelector(".jam_whatsapp_chatBox").classList.remove("show")
            })
        }
        document.querySelectorAll(".jam_whatsapp a.link_whatsapp").forEach(t => {
            t.addEventListener("click", function() {
                null != A && ("function" == typeof gtag ? (gtag("event", A[1], {
                    event_category: A[0],
                    event_label: A[2]
                }), console.log("push GTAG event " + A[2])) : "function" == typeof A ? (A("send", "event", A[0], A[1], A[2]), console.log("push GA event " + A[2])) : console.log("No GA install or detected")), null != y && ("function" == typeof fbq ? (fbq("track", y[0], {
                    content_name: y[1]
                }), console.log("push FB event " + y[1])) : console.log("No Pixel install or detected")), null != x && ("function" == typeof pintrk ? (pintrk("track", x[0], {
                    lead_type: x[1]
                }), console.log("push Pinteres event " + x[1])) : console.log("No Pinterest Pixel detected"))
            })
        }), setTimeout(function() {
            document.querySelector(".jam_whatsapp").classList.remove("dn")
        }, 1e3), void 0 !== this.callTo && "" != this.callTo && (document.querySelector(".jam_whatsapp_text").style.display = "block")
    }
}