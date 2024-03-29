!function (e) {
    var t = {};
    function a(i) {
        if (t[i]) return t[i].exports;
        var r = t[i] = {i: i, l: !1, exports: {}};
        return e[i].call(r.exports, r, r.exports, a), r.l = !0, r.exports
    }

    a.m = e, a.c = t, a.d = function (e, t, i) {
        a.o(e, t) || Object.defineProperty(e, t, {enumerable: !0, get: i})
    }, a.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
    }, a.t = function (e, t) {
        if (1 & t && (e = a(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var i = Object.create(null);
        if (a.r(i), Object.defineProperty(i, "default", {
            enumerable: !0,
            value: e
        }), 2 & t && "string" != typeof e) for (var r in e) a.d(i, r, function (t) {
            return e[t]
        }.bind(null, r));
        return i
    }, a.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return a.d(t, "a", t), t
    }, a.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, a.p = "/", a(a.s = 13)
}({
    13: function (e, t, a) {
        e.exports = a(14)
    }, 14: function (e, t) {
        !function (e, t) {
            function a(a) {
                a = t.extend({
                    wrapper: ".web-qn-uploader",
                    addFileButton: ".add-file-button",
                    inputSelector: "",
                    isImage: !1,
                    preview: [],
                    server: "",
                    updateServer: "",
                    autoUpload: !1,
                    sortable: !1,
                    deleteUrl: "",
                    deleteData: {},
                    thumbHeight: 160,
                    disabled: !1,
                    autoUpdateColumn: !1,
                    disableRemove: 1,
                    dimensions: {},
                    lang: {
                        exceed_size: "文件大小超出",
                        interrupt: "上传暂停",
                        upload_failed: "上传失败，请重试",
                        selected_files: "选中:num个文件，共:size。",
                        selected_has_failed: '已成功上传:success个文件，:fail个文件上传失败，<a class="retry"  href="javascript:"";">重新上传</a>失败文件或<a class="ignore" href="javascript:"";">忽略</a>',
                        selected_success: "共:num个(:size)，已上传:success个。",
                        dot: "，",
                        failed_num: "失败:fail个。",
                        pause_upload: "暂停上传",
                        go_on_upload: "继续上传",
                        start_upload: "开始上传",
                        upload_success_message: "已成功上传:success个文件",
                        go_on_add: "继续添加",
                        Q_TYPE_DENIED: "对不起，不允许上传此类型文件",
                        Q_EXCEED_NUM_LIMIT: "对不起，已超出文件上传数量限制，最多只能上传:num个文件",
                        F_EXCEED_SIZE: "对不起，当前选择的文件过大",
                        Q_EXCEED_SIZE_LIMIT: "对不起，已超出文件大小限制",
                        F_DUPLICATE: "文件重复",
                        confirm_delete_file: "您确定要删除这个文件吗？"
                    },
                    upload: {
                        formData: {_id: null},
                        thumb: {
                            width: 160,
                            height: 160,
                            quality: 70,
                            allowMagnify: !0,
                            crop: !0,
                            preserveHeaders: !1,
                            type: "image/jpeg"
                        }
                    }
                }, a);
                var i = t(a.selector), r = a.upload.formData.upload_column || "webup" + Math.floor(1e4 * Math.random()),
                    n = a.upload.formData._relation, s = a.elementName;
                void 0 !== a.upload.formData._id && a.upload.formData._id || (a.upload.formData._id = r + Math.floor(1e4 * Math.random()));
                var l, o, d, c, u, f, p, m, h, v, b, _ = e.Dcat, g = a.isImage, w = _.helpers.len(a.preview),
                    y = i.find(a.inputSelector), I = function (e) {
                        return s.replace(/[\[\]]*/g, "_") + "-" + e
                    }, k = function (e) {
                        return t("#" + I(e))
                    }, E = a.addFileButton, x = {}, F = {}, N = 0, C = 0, D = "pedding", A = {},
                    S = (v = new Image, b = !0, v.onload = v.onerror = function () {
                        1 == this.width && 1 == this.height || (b = !1)
                    }, v.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==", b),
                    T = (function () {
                        var e;
                        try {
                            e = (e = navigator.plugins["Shockwave Flash"]).description
                        } catch (t) {
                            try {
                                e = new ActiveXObject("ShockwaveFlash.ShockwaveFlash").GetVariable("$version")
                            } catch (t) {
                                e = "0.0"
                            }
                        }
                        e = e.match(/\d+/g), parseFloat(e[0] + "." + e[1], 10)
                    }(), function (e) {
                        return e.type.match(/^image/)
                    }), U = _.Translator(a.lang), L = U.trans.bind(U), z = [];

                function M(e) {
                    var i, s, l = WebUploader.formatSize(e.size), d = e.name || null;
                    g ? (i = t('<li id="'.concat(I(e.id), '" title="').concat(d, '" >\n                    <p class="file-type">').concat(e.ext.toUpperCase() || "FILE", '</p>\n                    <p class="imgWrap "></p>\n                    <p class="title" style="">').concat(e.name, '</p>\n                    <p class="title" style="margin-bottom:20px;">(<b>').concat(l, "</b>)</p>\n                    </li>")), s = t('<div class="file-panel">\n                    <a class="btn btn-sm btn-white" data-file-act="cancel"><i class="feather icon-x red-dark" style="font-size:13px"></i></a>\n                    <a class="btn btn-sm btn-white" data-file-act="delete" style="display: none">\n                    <i class="feather icon-trash red-dark" style="font-size:13px"></i></a>\n                    <a class="btn btn-sm btn-white" data-file-act="preview" ><i class="feather icon-zoom-in"></i></a>\n                    <a class=\'btn btn-sm btn-white\' data-file-act=\'order\' data-order="1" style="display: none"><i class=\'feather icon-arrow-up\'></i></a>\n                    <a class=\'btn btn-sm btn-white\' data-file-act=\'order\' data-order="0" style="display: none"><i class=\'feather icon-arrow-down\'></i></a>\n\n                    </div>').appendTo(i)) : (i = t('\n                    <li id="'.concat(I(e.id), '" title="').concat(e.nam, '">\n                    <p class="title" style="display:block">\n                        <i class="feather icon-check green _success icon-success"></i>\n                        ').concat(e.name, " (").concat(l, ")\n                    </p>\n                    </li>\n                ")), s = t('\n<span style="right: 45px;" class="file-action d-none" data-file-act=\'order\' data-order="1"><i class=\'feather icon-arrow-up\'></i></span>\n<span style="right: 25px;" class="file-action d-none" data-file-act=\'order\' data-order="0"><i class=\'feather icon-arrow-down\'></i></span>\n<span data-file-act="cancel" class="file-action" style="font-size:13px">\n    <i class="feather icon-x red-dark"></i>\n</span>\n<span data-file-act="delete" class="file-action" style="display:none">\n    <i class="feather icon-trash red-dark"></i>\n</span>\n').appendTo(i));
                    var c = i.find("p.imgWrap"), u = t('<p class="error"></p>'), f = function (e, t) {
                        var a = "";
                        switch (e) {
                            case"exceed_size":
                                a = L("exceed_size");
                                break;
                            case"interrupt":
                                a = L("interrupt");
                                break;
                            default:
                                a = L("upload_failed")
                        }
                        x[t.id] = t, u.text(a).appendTo(i)
                    };
                    if (i.appendTo(o), setTimeout((function () {
                        i.css({margin: "5px"})
                    }), 50), "invalid" === e.getStatus()) f(e.statusText, e); else {
                        if (g) {
                            var p = m.makeThumb(e, (function (e, a) {
                                var r;
                                if (c.empty(), e) return i.find(".title").show(), void i.find(".file-type").show();
                                S ? (r = t('<img src="' + a + '">'), c.append(r)) : i.find(".file-type").show()
                            }));
                            try {
                                p.once("load", (function () {
                                    e._info = e._info || p.info(), e._meta = e._meta || p.meta();
                                    var t = e._info.width, i = e._info.height;
                                    if (!function (e) {
                                        if (!g || !T(e) || !_.helpers.len(a.dimensions)) return !0;
                                        var t = a.dimensions, i = e._info.width, r = e._info.height,
                                            n = _.helpers.isset;
                                        if (n(t, "width") && t.width != i || n(t, "min_width") && t.min_width > i || n(t, "max_width") && t.max_width < i || n(t, "height") && t.height != r || n(t, "min_height") && t.min_height > r || n(t, "max_height") && t.max_height < r || n(t, "ratio") && t.ratio != i / r) return !1;
                                        return !0
                                    }(e)) return _.error("The image dimensions is invalid."), m.removeFile(e), !1;
                                    p.resize(t, i)
                                }))
                            } catch (t) {
                                return setTimeout((function () {
                                    m.removeFile(e)
                                }), 10)
                            }
                        }
                        A[e.id] = [e.size, 0], e.rotation = 0
                    }
                    e.on("statuschange", (function (t, a) {
                        "progress" === a || "queued" === a && (s.find('[data-file-act="cancel"]').hide(), s.find('[data-file-act="delete"]').show()), "error" === t || "invalid" === t ? (f(e.statusText, e), A[e.id][1] = 1) : "interrupt" === t ? f("interrupt", e) : "queued" === t ? A[e.id][1] = 0 : "progress" === t ? u.remove() : "complete" === t && (g ? i.append('<span class="success"><em></em><i class="feather icon-check"></i></span>') : i.find("._success").show()), i.removeClass("state-" + a).addClass("state-" + t)
                    })), (g ? s.find("a") : s).on("click", (function () {
                        switch (t(this).data("file-act")) {
                            case"cancel":
                                return void m.removeFile(e);
                            case"deleteurl":
                            case"delete":
                                if (!e.serverId) e.serverId = e.file.serverId;
                                if (a.disableRemove) return V(e.serverId), m.removeFile(e);
                                _.confirm(L("confirm_delete_file"), e.serverId, (function () {
                                    var i = a.deleteData;
                                    if (i.key = e.serverId, !i.key) return V(e.serverId), m.removeFile(e);
                                    i._column = r, i._relation = n, _.loading(), t.post({
                                        url: a.deleteUrl,
                                        data: i,
                                        success: function (t) {
                                            console.log()
                                            if (_.loading(!1), t.status) return V(e.serverId), void m.removeFile(e);
                                            X(t)
                                        }
                                    })
                                }));
                                break;
                            case"preview":
                                _.helpers.previewImage(c.find("img").attr("src"), null, e.name);
                                break;
                            case"order":
                                t(this).attr("data-id", e.serverId), K.apply(this)
                        }
                    }))
                }

                function O(e) {
                    var t = k(e.id);
                    delete A[e.id], P(), t.off().find(".file-panel").off().end().remove()
                }

                function P() {
                    var e, a = 0, i = 0, r = p.find(".progress-bar");
                    t.each(A, (function (e, t) {
                        i += t[0], a += t[0] * t[1]
                    })), e = i ? a / i : 0, e = Math.round(100 * e) + "%", r.text(e), r.css("width", e), j()
                }

                function j() {
                    var e, t = "";

                    function a() {
                        (e = m.getStats()).successNum && (t = L("selected_success", {
                            num: N,
                            size: WebUploader.formatSize(C),
                            success: e.successNum
                        })), e.uploadFailNum && (t += (t ? L("dot") : "") + L("failed_num", {fail: e.uploadFailNum}))
                    }

                    m && ("ready" === D ? (e = m.getStats(), N ? t = L("selected_files", {
                        num: N,
                        size: WebUploader.formatSize(C)
                    }) : a()) : "confirm" === D ? (e = m.getStats()).uploadFailNum && (t = L("selected_has_failed", {
                        success: e.successNum,
                        fail: e.uploadFailNum
                    })) : a(), c.html(t))
                }

                function Q(e, t) {
                    var r;
                    if (t = t || {}, e !== D) {
                        switch (u && (u.removeClass("state-" + D), u.addClass("state-" + e)), D = e) {
                            case"pedding":
                                if (a.disabled) return;
                                f.removeClass("element-invisible"), o.hide(), d.addClass("element-invisible"), g && (l.removeAttr("style"), l.find(".queueList").removeAttr("style")), $();
                                break;
                            case"ready":
                                f.addClass("element-invisible"), i.find(E).removeClass("element-invisible"), o.show(), a.disabled || d.removeClass("element-invisible"), $(), g && l.find(".queueList").css({
                                    border: "1px solid #d3dde5",
                                    padding: "5px"
                                }), setTimeout(J, 1);
                                break;
                            case"uploading":
                                i.find(E).addClass("element-invisible"), p.show(), u.text(L("pause_upload"));
                                break;
                            case"paused":
                                p.show(), u.text(L("go_on_upload"));
                                break;
                            case"confirm":
                                if (m && (p.hide(), i.find(E).removeClass("element-invisible"), u.text(L("start_upload")), (r = m.getStats()).successNum && !r.uploadFailNum)) return void Q("finish");
                                break;
                            case"finish":
                                m && ((r = m.getStats()).successNum ? (_.success(L("upload_success_message", {success: r.successNum})), setTimeout((function () {
                                    1 == a.upload.fileNumLimit && (m.request("get-stats").numOfSuccess = 0)
                                }), 10)) : (D = "done", location.reload()));
                                break;
                            case"decrOriginalFileNum":
                                w > 0 && w--;
                                break;
                            case"incrOriginalFileNum":
                                w++;
                                break;
                            case"decrFileNumLimit":
                                if (!m) return;
                                "-1" == (n = m.option("fileNumLimit")) && (n = 0), 0 == (s = n >= (s = t.num || 1) ? n - s : 0) && (s = "-1"), m.option("fileNumLimit", s);
                                break;
                            case"incrFileNumLimit":
                                if (!m) return;
                                var n, s;
                                "-1" == (n = m.option("fileNumLimit")) && (n = 0), s = n + (s = t.num || 1), m.option("fileNumLimit", s);
                                break;
                            case"init":
                                u.addClass("state-" + D), P(), w || a.disabled ? (f.addClass("element-invisible"), a.disabled ? l.addClass("disabled") : d.show(), Q("ready")) : g && (l.removeAttr("style"), l.find(".queueList").css("margin", "0")), $()
                        }
                        j()
                    }
                }

                function X(e) {
                    var t = "Unknown error!";
                    e && e.data && (t = e.data.message || t), _.error(t)
                }

                function q(e) {
                    if (e) {
                        var t = F[e];
                        V(e), delete F[e], m && !t.fake && m.removeFile(t), Q("decrOriginalFileNum"), Q("incrFileNumLimit"), _.helpers.len(F) || _.helpers.len(A) || Q("pedding")
                    }
                }

                function B() {
                    var e = y.val();
                    return e ? e.split(",") : []
                }

                function W(e) {
                    var t = B();
                    t.push(e), Z(t)
                }

                function Z(e) {
                    e = e.filter((function (e, t, a) {
                        return a.indexOf(e) === t
                    })).filter((function (e) {
                        return !!e
                    })), y.val(e.join(",")).trigger("change")
                }

                function V(e) {
                    var t;
                    if (t = e, z = z.filter((function (e) {
                        return e.serverId != t
                    })), !e) return y.val("");
                    Z(B().filter((function (t) {
                        return t != e
                    })))
                }

                function R(e) {
                    e.serverId && -1 === Y(e.serverId) && z.push(e)
                }

                function Y(e) {
                    for (var t in z) if (z[t].serverId === e) return t;
                    return -1
                }

                function G(e, t) {
                    var a = parseInt(Y(e)), i = z[a], r = z[a - 1], n = z[a + 1];
                    if (t) {
                        if (0 === a) return;
                        z[a - 1] = i, z[a] = r
                    } else {
                        if (!n) return;
                        z[a + 1] = i, z[a] = n
                    }
                    !function () {
                        var e = [];
                        for (var t in z) z[t] && e.push(z[t].serverId);
                        Z(e)
                    }()
                }

                function H() {
                    for (var e in o.html(""), z) z[e] && ee(z[e])
                }

                function $() {
                    m.refresh()
                }

                function J() {
                    y.parents(".form-group,.form-label-group,.form-field").find(".with-errors").html("")
                }

                function K() {
                    var e = t(this), a = e.parents("li").first(), i = e.data("id"), r = e.data("order"), n = a.prev(),
                        s = a.next();
                    if (r) {
                        if (!n.length) return;
                        return G(i, r), void H()
                    }
                    s.length && (G(i, r), H())
                }

                function ee(e) {
                    var i = "";
                    i += "<li title='" + e.serverPath + "'>", !g && a.sortable && (i += '\n<p style="right: 45px" class="file-action" data-file-act=\'order\' data-order="1" data-id=\''.concat(e.serverId, "'><i class='feather icon-arrow-up'></i></p>\n<p style=\"right: 25px\" class=\"file-action\" data-file-act='order' data-order=\"0\" data-id='").concat(e.serverId, "'><i class='feather icon-arrow-down'></i></p>\n")), g ? i += "<p class='imgWrap'><img src='".concat(e.serverUrl, "'></p>") : a.disabled || (i += '<p class="file-action" data-file-act="delete" data-id="'.concat(e.serverId, '"><i class="feather icon-trash red-dark"></i></p>')), i += "<p class='title' style=''><i class='feather icon-check text-white icon-success text-white'></i>", i += e.serverPath, i += "</p>", g && (i += "<p class='title' style='margin-bottom:20px;'> </p>", i += "<div class='file-panel' >", a.disabled || (i += "<a class='btn btn-sm btn-white' data-file-act='deleteurl' data-id='".concat(e.serverId, "'><i class='feather icon-trash red-dark' style='font-size:13px'></i></a>")), i += "<a class='btn btn-sm btn-white' data-file-act='preview' data-url='".concat(e.serverUrl, "' ><i class='feather icon-zoom-in'></i></a>"), a.sortable && (i += "\n<a class='btn btn-sm btn-white' data-file-act='order' data-order=\"1\" data-id='".concat(e.serverId, "'><i class='feather icon-arrow-up'></i></a>\n<a class='btn btn-sm btn-white' data-file-act='order' data-order=\"0\" data-id='").concat(e.serverId, "'><i class='feather icon-arrow-down'></i></a>\n")), i += "</div>"), i = t(i += "</li>"), g || (i.find(".file-type").show(), i.find(".title").show(), l.css("background", "transparent"));
                    var s = function () {
                        var s = t(this).data("id"), l = a.deleteData;
                        if (a.disableRemove) return i.remove(), q(s);
                        _.confirm(L("confirm_delete_file"), e.serverId, (function () {
                            l.key = s, l._column = r, l._relation = n, _.loading(), t.post({
                                url: a.deleteUrl,
                                data: l,
                                success: function (e) {
                                    if (_.loading(!1), e.status) return i.remove(), void q(s);
                                    X(e)
                                }
                            })
                        }))
                    };
                    i.find('[data-file-act="deleteurl"]').click(s), i.find('[data-file-act="delete"]').click(s), a.sortable && i.find('[data-file-act="order"').click(K), i.find('[data-file-act="preview"]').click((function () {
                        var e = t(this).data("url");
                        _.helpers.previewImage(e)
                    })), F[e.serverId] = e, W(e.serverId), o.append(i), g && (setTimeout((function () {
                        i.css("margin", "5px")
                    }), h ? 0 : 400), h = 1)
                }
                function URLSafeBase64Encode(data) {
                    var b64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
                    var o1, o2, o3, h1, h2, h3, h4, bits, i = 0,
                        ac = 0,
                        enc = '',
                        tmp_arr = [];

                    if (!data) {
                        return data;
                    }

                    data = utf8_encode(data + '');

                    do { // pack three octets into four hexets
                        o1 = data.charCodeAt(i++);
                        o2 = data.charCodeAt(i++);
                        o3 = data.charCodeAt(i++);

                        bits = o1 << 16 | o2 << 8 | o3;

                        h1 = bits >> 18 & 0x3f;
                        h2 = bits >> 12 & 0x3f;
                        h3 = bits >> 6 & 0x3f;
                        h4 = bits & 0x3f;

                        // use hexets to index into b64, and append result to encoded string
                        tmp_arr[ac++] = b64.charAt(h1) + b64.charAt(h2) + b64.charAt(h3) + b64.charAt(h4);
                    } while (i < data.length);

                    enc = tmp_arr.join('');

                    switch (data.length % 3) {
                        case 1:
                            enc = enc.slice(0, -2) + '==';
                            break;
                        case 2:
                            enc = enc.slice(0, -1) + '=';
                            break;
                    }

                    return enc.replace(/\//g, '_').replace(/\+/g, '-');
                }
                function utf8_encode(argString) {

                    if (argString === null || typeof argString === 'undefined') {
                        return '';
                    }

                    var string = (argString + '');
                    var utftext = '',
                        start, end, stringl = 0;

                    start = end = 0;
                    stringl = string.length;
                    for (var n = 0; n < stringl; n++) {
                        var c1 = string.charCodeAt(n);
                        var enc = null;

                        if (c1 < 128) {
                            end++;
                        } else if (c1 > 127 && c1 < 2048) {
                            enc = String.fromCharCode(
                                (c1 >> 6) | 192, (c1 & 63) | 128
                            );
                        } else if (c1 & 0xF800 ^ 0xD800 > 0) {
                            enc = String.fromCharCode(
                                (c1 >> 12) | 224, ((c1 >> 6) & 63) | 128, (c1 & 63) | 128
                            );
                        } else { // surrogate pairs
                            if (c1 & 0xFC00 ^ 0xD800 > 0) {
                                throw new RangeError('Unmatched trail surrogate at ' + n);
                            }
                            var c2 = string.charCodeAt(++n);
                            if (c2 & 0xFC00 ^ 0xDC00 > 0) {
                                throw new RangeError('Unmatched lead surrogate at ' + (n - 1));
                            }
                            c1 = ((c1 & 0x3FF) << 10) + (c2 & 0x3FF) + 0x10000;
                            enc = String.fromCharCode(
                                (c1 >> 18) | 240, ((c1 >> 12) & 63) | 128, ((c1 >> 6) & 63) | 128, (c1 & 63) | 128
                            );
                        }
                        if (enc !== null) {
                            if (end > start) {
                                utftext += string.slice(start, end);
                            }
                            utftext += enc;
                            start = end = n + 1;
                        }
                    }

                    if (end > start) {
                        utftext += string.slice(start, stringl);
                    }

                    return utftext;
                }

                return this.uploader = m, this.options = a, this.build = function () {
                    console.log(i.find(a.wrapper))
                    l = i.find(a.wrapper), o = t('<ul class="filelist"></ul>').appendTo(l.find(".queueList")), d = l.find(".statusBar"), c = d.find(".info"), u = l.find(".upload-btn"), f = l.find(".placeholder"), p = d.find(".upload-progress").hide(), this.uploader = m = WebUploader.create(a.upload), m.on("dndAccept", (function (e) {
                        for (var t = !1, a = e.length, i = 0; i < a; i++) if (~"text/plain;application/javascript ".indexOf(e[i].type)) {
                            t = !0;
                            break
                        }
                        return !t
                    })), a.upload.fileNumLimit > 1 && !a.disabled && m.addButton({
                        id: E,
                        label: '<i class="feather icon-folder"></i>  ' + L("go_on_add")
                    }), m.onUploadProgress = function (e, t) {
                        A[e.id][1] = t, P()
                    }, m.onBeforeFileQueued = function (e) {
                    }, m.onFileQueued = function (e) {
                        console.log(d)
                        N++, C += e.size, 1 === N && (f.addClass("element-invisible"), d.show()), M(e), Q("ready"), P(), !a.disabled && a.autoUpload && m.upload()
                    }, m.onFileDequeued = function (e) {
                        N--, C -= e.size, N || _.helpers.len(F) || Q("pedding"), O(e)
                    }, m.on("all", (function (e, i, s) {
                        switch (e) {
                            case"uploadFinished":
                                Q("confirm"), function () {
                                    var e = B(), i = m.getStats().successNum, s = t.extend({}, a.formData);
                                    if (i && e && a.autoUpdateColumn) {
                                        if (n) {
                                            if (!n[1]) return;
                                            s[n[0]] = {}, s[n[0]][n[1]] = {}, s[n[0]][n[1]][r] = e.join(",")
                                        } else s[r] = e.join(",");
                                        delete s._relation, delete s.upload_column, t.post({
                                            url: a.updateServer,
                                            data: s
                                        })
                                    }
                                }();
                                break;
                            case"startUpload":
                                Q("uploading");
                                break;
                            case"stopUpload":
                                Q("paused");
                                break;
                            case"uploadSuccess":
                                console.log(a,e, i, s)
                                if (a.chunked == true && parseInt(i.size) > parseInt(a.chunkSize) && a.server.indexOf("qiniup.com")!==-1){
                                    let b = i.ctx.join(",");
                                    t.ajax({
                                        type: 'POST',
                                        url: a.host + '/mkfile/' + i.size + '/key/' + URLSafeBase64Encode(i.key),
                                        data: b,
                                        contentType: "text/plain",
                                        contentLength: b.length,
                                        beforeSend: function (XMLHttpRequest) {
                                            XMLHttpRequest.setRequestHeader("Authorization", 'UpToken ' + a.token);
                                        },
                                        success: function(res){
                                            i.file = i.file ? i.file : [];
                                            i.file.serverId = i.key, i.file.serverName = i.name, i.file.serverPath = i.key, i.file.serverUrl = i.domain + i.key || null, R(i.file), W(i.domain + i.key);
                                            var l = k(i.id);
                                            console.log(l)
                                            g || (l.find(".file-action").hide(), l.find('[data-file-act="delete"]').show()), a.sortable && l.find('[data-file-act="order"]').removeClass("d-none").show()
                                        }
                                    });
                                }
                            case"uploadAccept":
                                console.log(a,e, i, s)
                                if (a.server.indexOf("qiniup.com")!==-1) var uploadType = 'qiniu';
                                switch (uploadType) {
                                    case "qiniu":
                                        if ((!s || !s.key) && (!s || !s.ctx)) return X(s), x[i.file.id] = i.file, !1;
                                        if (s.ctx && s.checksum) return;
                                        i.file = i.file ? i.file : [];
                                        i.file.serverId = i.key, i.file.serverName = i.name, i.file.serverPath = i.key, i.file.serverUrl = i.domain + i.key || null, R(i.file), W(i.domain + i.key);
                                        break;
                                    default:
                                        if (!s || !s.status) return X(s), x[i.file.id] = i.file, !1;
                                        if (s.data && s.data.merge) return;
                                        i.file = i.file ? i.file : [];
                                        i.file.serverId = s.data.id, i.file.serverName = s.data.name, i.file.serverPath = s.data.path, i.file.serverUrl = s.data.url || null, R(i.file), W(s.data.id);
                                }
                                var l = k(i.file.id);
                                console.log(l)
                                g || (l.find(".file-action").hide(), l.find('[data-file-act="delete"]').show()), a.sortable && l.find('[data-file-act="order"]').removeClass("d-none").show()
                        }
                    })), m.onError = function (e) {
                        switch (e) {
                            case"Q_TYPE_DENIED":
                                _.error(L("Q_TYPE_DENIED"));
                                break;
                            case"Q_EXCEED_NUM_LIMIT":
                                _.error(L("Q_EXCEED_NUM_LIMIT", {num: a.upload.fileNumLimit}));
                                break;
                            case"F_EXCEED_SIZE":
                                _.error(L("F_EXCEED_SIZE"));
                                break;
                            case"Q_EXCEED_SIZE_LIMIT":
                                _.error(L("Q_EXCEED_SIZE_LIMIT"));
                                break;
                            case"F_DUPLICATE":
                                _.warning(L("F_DUPLICATE"));
                                break;
                            default:
                                _.error("Error: " + e)
                        }
                    }, u.on("click", (function () {
                        if (t(this).hasClass("disabled")) return !1;
                        "ready" === D || "paused" === D ? m.upload() : "uploading" === D && m.stop()
                    })), c.on("click", ".retry", (function () {
                        m.retry()
                    })), c.on("click", ".ignore", (function () {
                        for (var e in x) m.removeFile(e, !0), delete x[e]
                    })), Q("init")
                }, this.preview = function () {
                    for (var e in a.preview) {
                        var t, i = a.preview[e].path;
                        i.indexOf(".") && (t = i.split(".").pop());
                        var r = {
                            serverId: a.preview[e].id,
                            serverUrl: a.preview[e].url,
                            serverPath: i,
                            ext: t,
                            fake: 1
                        };
                        Q("incrOriginalFileNum"), Q("decrFileNumLimit"), ee(r), R(r)
                    }
                }, this.setState = Q, this.refreshButton = $, this.getFileView = k, this.getFileViewSelector = I, this.addFileView = M, this.removeUploadFileView = O, this.isImage = T, this.getColumn = function () {
                    return r
                }, this
            }

            Dcat.QnUploader = function (e) {
                return new a(e)
            }
        }(window, jQuery)
    }
});
