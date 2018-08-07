function loadScript(url, callback) {
    var vscript = document.createElement("script");
    vscript.type = "text/javascript";
    
    if (vscript.readyState) { // IE
        vscript['onreadystatechange'] = function () {
            if (vscript.readyState == 'loaded' ||
                vscript.readyState == 'complete') {
                vscript['onreadystatechange'] = null;
                callback();
            }
        };
    }
    else { // others
        vscript.onload = function () {
            callback();
        };
    }
    vscript.src = url;
    document.getElementsByTagName("head")[0].appendChild(vscript);
    return vscript;
}

function dsxCommonUtil() {
    //A40 for  CreateDateTimePicker
    this.A0 = -1; //m_iBType = -1; browser type
    this.A1 = 0; //m_iVer = 0;
    this.A2 = false; //m_bHasSPlayer = false;  SilverLight player
    this.A3 = true; //m_bHasFPlayer = true; Flash Player
    this.A4 = false; //m_bMobil = false;
    this.OSV = 0; // os version, for android only;
    var dsWindow = 0;
    var dsLinux = 1;
    var dsMac = 2;
    var dsiPad = 10;
    var dsiPhone = 11;
    var dsiPod = 12;
    var dsAndroid = 13;
    var dsSurface = 14;
    var dsWindowPhone = 15;
    this.A5 = dsWindow; //m_btDevice = dsWindow;

    this.pMW = 0; //this.webMode = 0;
    this.pMS = 1; //this.silverMode = 1;
    this.pMF = 2;//this.flashMode = 2;
    this.pM5 = 3; //this.HTML5Mode = 3;
    this.pMX = 4; //this.firefoxAudioAPIMode = 4;
    this.pMD = 5; //this.dashMode = 5;
    this.pMV = 6; //this.videoMode = 6; // external video mode
    this.pMR = 7; //this.screenMode = 7; // dsxtech
    this.pML = 8; // this.HLSMode = 8; // for  HLS support
    this.pMI = 9; // ICE mode
    this.A6 = 0xff; //legacyMode = 0xff;

    this.A7 = false; //m_bAndroid = false;
    var me = this;

    // some constants
    this.TSI = 0; //m_TonServerInfo = 0;// 0 for server info;
    this.TBI = 1; //m_TonBrowserInfo = 1;// 1 for browser info;
    this.TRB = 2; //m_TonStartReadBinary = 2;// 2 start reading binary
    this.TSB = 3; //m_TonStopReadBibary = 3;// 3 stop reading binary
    this.TSS = 4; //m_TonShowPhStatus = 4;// 4 show phone status only
    this.TSC = 5; //m_TonShowCallRecords = 5;// 5 show call records only
    this.TSF = 6; //m_TonShowCfg = 6; // 6 show configuation only
    this.TSP = 7; //m_TonShowMPlayer = 7;// 7 show the media player
    this.TSA = 15; //m_TonSessionAndAppID = 15;//15 for session id and appid
    this.TSL = 16;//m_TonStopLiveStreaming = 16;// 16 stop live streaming player
    this.TSH = 17; //m_TonShowSearchDlg = 17;

    // not working well with silverlight player
    // test with canvas
    //CreateSlider
    this.A8 = function (vDiv, iL, iT, iW, iH, sTopTitle, sLTitle, sRTitle, gSCall, bSD, C) {
        
    //    var m_C = null; // use canvas
        var m_L = null;
        var m_R = null;
        var mCW = 5; // center width;
        
        if (C) {
         //   m_C = document.createElement('span');
         //   m_C.style.background = 'red';
         //   m_C.style.position = 'absolute';
            m_L = document.createElement('canvas');
            m_L.style.position = 'absolute';
            m_R = document.createElement('canvas');
            m_R.style.position = 'absolute';
        }
        
        var m_gSCall = gSCall;
        var vdiv = document.createElement('div');
        vdiv.style.position = 'absolute';
        vdiv.style.left = iL + 'px';
        vdiv.style.top = iT + 'px';
        vdiv.style.width = iW + 'px';
        //     vdiv.style.height = '10px';
       // vdiv.style.backgroundColor = 'pink';
        vDiv.appendChild(vdiv);
        var hme = this;
        var vdnflag = -1; // 0 for h, 1 for L, 2 for R
        var m_iH = iH;
        var igap = 3;
        if (bSD) {
            igap = 4;
        }
        this.REP = function (L,W) {
            vdiv.style.left = L + 'px';
            vdiv.style.width = W + 'px';
            iW = W;
        }
        //SetPos
        this.A9 = function (iPos, iTotal) {
            if (m_L!=null) {
                // draw in the canvas
             
                var iw = iW - mCW;
                var x = Math.floor(iPos / iTotal * iw);
                var y = iH / 2;
                m_L.style.width = x + 'px';
                m_R.style.left = (x +mCW) + 'px';
                m_R.style.width = (iw - x) + 'px';
                /*
                var cot= m_C.getContext("2d");
                cot.fillStyle = 'grey';
                cot.beginPath();
                cot.moveTo(x, y);
                var ra = 4;
                cot.arc(x, y, ra, 0, Math.PI * 2, false);
                cot.fill();
                */
             
                vspanH.style.left = x + 'px';
               

            }
            else {
                var iper = iPos / iTotal * 100;
                vspanLC.style.width = '' + iper + '%';
                vspanRC.style.width = '' + 100 - iper + '%';
                vspanH.style.left = '' + (iper) + '%';
            }
        }
        //SetTop
        this.A10 = function (iTop) {
            vdiv.style.top = iTop + 'px';
        }
        //SetDisplayText
        this.A11 = function (sTxt) {
            if (m_L != null) {
                if (sTxt.length > 0) {
                    vdiv.innerHTML = sTxt;
                    vdiv.style.color = 'white';

                    m_L.style.width = '0px';
                    m_R.style.width = '0px';
     
                //    vdiv.removeChild(m_L);
                 //   vdiv.removeChild(m_R);
                 //   vdiv.removeChild(vspanH);
                //    m_C.width = 0;
                }
                else {
                //    m_C.width = iW;
                    //     m_C.style.background = 'red';
                    vdiv.innerHTML = "";
                    vdiv.appendChild(m_L);
                    vdiv.appendChild(m_R);
                    vdiv.appendChild(vspanH);
                }
 
                return;
            }
            if (sTxt.length > 0) {
                //    vspanLC.style.display = 'none';
                vspanLC.style.width = '100%';
                vspanLC.style.top = 0 + 'px'; //
                vspanLC.style.height = (12 + m_iH) + 'px'; //
                vspanLC.innerHTML = sTxt;
                vspanLC.style.background = 'black';
                vspanLC.style.color = 'white';

                vspanRC.style.display = 'none';
                vspanH.style.display = 'none';


            }
            else {
                vspanLC.style.width = '0%';
                vspanLC.style.top = 3 + 'px'; //
                vspanLC.style.height = m_iH + 'px'; //
                vspanLC.innerHTML = "";
                vspanLC.appendChild(vBL);
                vspanLC.style.backgroundColor = '#fff';

                vspanRC.style.display = 'block';
                vspanH.style.display = 'block';

            }
        }
        //Show
        this.A12 = function (bShow) {
            if (bShow) {
                vdiv.style.display = 'block';
            }
            else {
                vdiv.style.display = 'none';
            }
        };

        var m_bCanDrag = true;
        //EnableDrag
        this.A13 = function (bEn) {
            m_bCanDrag = bEn;
        }
        this.SLC = function (e, bLeft) {
            var x;
            if (e['offsetX'] == undefined) {
                x = e['layerX'];

            }
            else {
                x = e['offsetX'];
            }
            var x;
            if (!bLeft){
                x = x + m_L.clientWidth + mCW;
            }
            // adjust w
            x = x - mCW / 2;
            if (x < 0)
                x = 0;
            var per = x / (iW - mCW) * 100;
            m_L.style.width = x + 'px';
            m_R.style.left = (x + mCW) + 'px';
            m_R.style.width = (iW - mCW - x) + 'px';
            vspanH.style.left = x + 'px';

            if (m_gSCall != null) {
                m_gSCall(per);
            }
        };

        var vspanH = document.createElement('span');
        vspanH.style.position = 'absolute';
        if(m_L == null)
            vspanH.style.left = '50%';
        if (bSD) {
            vspanH.style.width = '14px';
            vspanH.style.height = '14px';
            vspanH.style.borderRadius = '7px';
            vspanH.style['-webkit-border-radius'] = '7px';
            mCW = 14;
        }
        else {
            vspanH.style.width = '10px';
            vspanH.style.height = '10px';
            mCW = 10;
            vspanH.style.borderRadius = '5px';
            vspanH.style['-webkit-border-radius'] = '5px';
        }
        vspanH.style.border = '1px sold rgba(0,0,0,0.8)';

        vspanH.style.background = '#fff';

        if (m_L != null) {
            vdiv.appendChild(vspanH);
            vdiv.appendChild(m_L);
            vdiv.appendChild(m_R);
         //   m_C.width = iW;
        //    m_C.height = iH; // for canvas only
            //   vspanH.style.height = iH + 'px';
            var ish = parseInt(vspanH.style.height);
            vspanH.style.top = (igap+iH/2-ish/2) + 'px';
            
            vspanH.style.width = mCW + 'px';
            m_L.style.height = iH + 'px';
            m_L.style.top = igap + 'px';
       //     m_L.style.cursor = 'pointer';
            m_L.style.backgroundColor = '#fff';
            m_R.style.height = iH + 'px';
            m_R.style.top = igap + 'px';
      //      m_R.style.cursor = 'pointer';
            m_R.style.backgroundColor = '#3c3c3c';

            m_L.title = sLTitle;
            m_R.title = sRTitle;

            // only for IE
            vdiv.onmousedown = function (e) {
                if (!m_bCanDrag)
                    return false;
                if (e.srcElement == m_L) {
                    hme.SLC(e, true);
                    return false;
                }
                else if (e.srcElement == m_R) {
                    hme.SLC(e, false);
                    return false;
                }
                 
            };
            // can't do the following with silverlight player
            /*
            m_L.onmousedown = function (e) {
                if (!m_bCanDrag)
                    return false;
                hme.SLC(e, true);
                return false;
            };
            m_R.onmousedown = function (e) {
                if (!m_bCanDrag)
                    return false;
                hme.SLC(e, false);
                return false;
            };
            */
     
            return;
        }
      

      


        var vB = document.createElement('button');
        vB.title = sTopTitle; // seems not displayed in tooltip
        vB.style.position = 'absolute';
        vB.style.left = '0px';
        vB.style.top = '0px';
        vB.style.width = '100%';
        vB.style.height = '100%';
        vB.style.backgroundColor = 'transparent';
        vB.style.border = '0px';
        vB.style.padding = '1px 6px';
        vB.onclick = function (e) {
            return false;
        };
        vdiv.appendChild(vB);

        var vslidiv = document.createElement('div');
        vslidiv.style.position = 'absolute';
     
        vslidiv.style.height = (igap * 2 + iH) + 'px';
        vslidiv.style.width = '100%';
        vdiv.appendChild(vslidiv);

        var vspanU = document.createElement('span');
        vspanU.style.position = 'absolute';
        vspanU.style.width = '100%';
        vspanU.style.top = igap + 'px';
        vspanU.style.heigth = iH + 'px';
        vslidiv.appendChild(vspanU);

        var vspanLC = document.createElement('span');
        vspanLC.style.position = 'absolute';
        vspanLC.style.width = '0%';
        vspanLC.style.top = igap + 'px'; //
        vspanLC.style.height = iH + 'px'; //
        vspanLC.style.backgroundColor = '#fff';

        var vBL = document.createElement('button');
        vBL.title = sLTitle; // "Decrement Volume Level";
        vBL.style.position = 'absolute';
        vBL.style.width = '100%';
        vBL.style.height = '100%';
        vBL.style.border = '0px';
        vBL.style.top = '0px';
        vBL.style.left = '0px';
        vBL.style.backgroundColor = 'transparent';
        vBL.style.padding = '0px';
        vBL.style.cursor = 'pointer';
        vBL.onclick = function (e) {
            return false;
        };

        //SliderClicked
        this.A14 = function (e, bLeft) {
            var x;
            if (e['offsetX'] == undefined) {
                x = e['layerX'];

            }
            else {
                x = e['offsetX'];
            }
            var w;
            if (bLeft)
                w = x; // vspanLC.clientWidth - x;
            else {
                w = x + vspanLC.clientWidth;
            }
            var per = (w - 5) / vspanHC.clientWidth * 100;
            if (per < 0)
                per = 0;
            if (per > 100)
                per = 100;
            var vtm = '' + per + '%';
            vspanLC.style.width = vtm;
            vtm = '' + (100 - per) + '%';
            vspanRC.style.width = vtm;
            // little bit different;
            vtm = '' + per + '%';
            vspanH.style.left = vtm;
            if (m_gSCall != null) {
                m_gSCall(per);
            }
        };

        vspanLC.onmousedown = function (e) {
            if (!m_bCanDrag)
                return;
            hme.A14(e,true); //SliderClicked(e, true);
        };


        vspanLC.appendChild(vBL);
        vslidiv.appendChild(vspanLC);

        var vspanRC = document.createElement('span');
        vspanRC.style.position = 'absolute';
        vspanRC.style.width = '100%';
        vspanRC.style.top = igap + 'px'; //
        vspanRC.style.height = iH + 'px'; //
        vspanRC.style.right = '0px'; //
        vspanRC.style.backgroundColor = '#3c3c3c';

        vspanRC.onmousedown = function (e) {
            if (!m_bCanDrag)
                return;
            hme.A14(e, false); //SliderClicked(e, false);
        };

        var vBR = document.createElement('button');
        vBR.title = sRTitle; // "Increment Volume Level";
        vBR.style.position = 'absolute';
        vBR.style.width = '100%';
        vBR.style.height = '100%';
        vBR.style.border = '0px';
        vBR.style.top = '0px';
        vBR.style.left = '0px';
        vBR.style.cursor = 'pointer';
        vBR.style.padding = '0px';
        vBR.style.backgroundColor = 'transparent';
        vBR.onclick = function (e) {
            return false;
        };


        vspanRC.appendChild(vBR);
        vslidiv.appendChild(vspanRC);

        var vspanHC = document.createElement('span'); // span header container
        vspanHC.style.position = 'absolute';
        vspanHC.style.left = '0px';
        vspanHC.style.right = '10px';
        vspanHC.style.top = '1px';

        //       vspanHC.style.height = '4px';
        //        vspanHC.style.backgroundColor = 'black';

     


        vspanHC.appendChild(vspanH);
        vslidiv.appendChild(vspanHC);

    }

    //hasSP
    this.A15 = function ()  // if have silverlight player
    {

        var bhas = false;
        try {
            var slControl = new ActiveXObject('AgControl.AgControl');
            bhas = true;
        }
        catch
       (e) {        // Error. Silverlight not installed.    
            try {
                if (navigator.plugins["Silverlight Plug-In"]) {
                    bhas = true;

                }
            }
            catch (e) {        // Error. Silverlight not installed.   
            }
        }
        return bhas;

    }
    //hasFP
    this.A16 = function () // flash player
    {
        return false; // disable now
        var bhas = false;
        try {
            var fo = new ActiveXObject('ShockwaveFlash.ShockwaveFlash');
            if (fo) {
                bhas = true;
            }
        }
        catch (e) {
            if (navigator.mimeTypes
       		 && navigator.mimeTypes['application/x-shockwave-flash'] != undefined
        		&& navigator.mimeTypes['application/x-shockwave-flash']['enabledPlugin']) {
                bhas = true;
            }
        }
        return bhas;
    }
   // hasWebAudioAPI
    this.A17 = function () {
        if (this.A0 == -1) {
            this.A21();//  this.GetBrowserInfo();
        }
        var bhave = false;
        var s1 = "Context";
        var s2 = "Audio";
        var s3 = 'webkit';
        if (!window.AudioContext) 
   //     if (!window[s2+s1]) 
        {
            if (!window.webkitAudioContext) 
      //      if (!window[s3+s2+s1]) 
            {
            }
            else
                bhave = true;
        }
        else
            bhave = true;
        if ((this.A0 >= 0 && this.A0 <= 3) || this.A0 == 5) { // only for firefox,chrome, and safari,vivadi
            return bhave;
        }
        return false;
    }
    //getBType
    this.A18 = function () {
        if (this.A0 < 0) {
            this.A21(); //   this.GetBrowserInfo();

        }
        return this.A0;
    }



    //Point
    this.A19 = function () {
        this.x = 0;
        this.y = 0;
    }
    //GetTOffset
    this.A20 = function () {
        var d = new Date();
        return d.getTimezoneOffset();
    }
   // GetBrowserInfo
    this.A21 = function () {
        var user = navigator.userAgent;
        var i = user.indexOf("Firefox");
        var stmp;
        var k;
        if (i != -1) {
            this.A0 = 1; // firefox
            // get version
            k = i+8; // Firefox/xx.0
            stmp = user.slice(k, user.length);
            k = stmp.indexOf(".");
            if (k >= 0) {
                stmp = stmp.substr(0, k);
                this.A1 = parseInt(stmp);
            }
        }
        else {
            i = user.indexOf("MSIE");
            if (i != -1) {
                this.A0 = 0;
                this.A1 = 9;
                k = user.indexOf("MSIE") + 4;
                stmp = user.slice(k, user.length);
                k = stmp.indexOf(".");
                if (k >= 0) {
                    stmp = stmp.substr(0, k);
                    this.A1 = parseInt(stmp);
                }
            }
            else {
                i = user.indexOf("Vivaldi");
                if (i != -1) {
                    this.A0 = 5;
                }
            }
        }
        if (i < 0) {
            i = user.indexOf("Edge/");
            if (i < 0) {
                i = user.indexOf("Chrome");
                if (i != -1) {
                    this.A0 = 2;
                    i += 7; // Chrome/xx.0
                    stmp = user.slice(i, user.length);
                    k = stmp.indexOf(".");
                    if (k >= 0) {
                        stmp = stmp.substr(0, k);
                        this.A1 = parseInt(stmp);
                    }
                }
            }
            else {
                // microsoft edge
                this.A0 = 0;
                this.A1 = 12;
            }
        }
        if (i < 0) {
            if (user.indexOf("Safari") != -1)
                this.A0 = 3;
            else if (user.indexOf("Opera") != -1)
                this.A0 = 4;
            else if (user.indexOf("rv:") != -1) //IE 11 or above
            {
                this.A0 = 0;
                k = user.indexOf("rv:") + 3;
                stmp = user.slice(k, user.length);
                k = stmp.indexOf(".");
                if (k >= 0) {
                    stmp = stmp.substr(0, k);
                    this.A1 = parseInt(stmp);
                }
            }
            else {
                //  this.A0 = 5; // others
                if (this.A0 == -1)
                    this.A0 = 255;

            }
        }

        //       alert("b Type " + this.A0);

        i = user.indexOf("Mobil");
        if (i != -1) {
            this.A4 = true;
        }

        i = user.indexOf("Linux");
        if (i != -1) {
            this.A5 = dsLinux;
        }

        i = user.indexOf("Mac");
        if (i != -1) {
            this.A5 = dsMac;
        }


        i = user.indexOf("iPad");
        if (i != -1) {
            this.A5 = dsiPad;
        }
        else {
            i = user.indexOf("iPhone");
            if (i != -1) {
                this.A5 = dsiPhone;
            }
            else {
                i = user.indexOf("iPod");
                if (i != -1) {
                    this.A5 = dsiPod;
                }
                else {
                    i = user.indexOf("Android");
                    if (i != -1) {
                        this.A5 = dsAndroid;
                        // get version of android
                        var stmp = user.slice(i+7, user.length);
                        var k = stmp.indexOf(".");
                        if (k >= 0) {
                            stmp = stmp.substr(0, k);
                            this.OSV = parseInt(stmp);
                        }
                    }
                    else if (user.indexOf("Tablet PC") >= 0) {
                        if (user.indexOf("Windows") >= 0 && user.indexOf('Touch') >=0) {
                            this.A5 = dsSurface;
                        }
                    }
                    else if (user.indexOf('Windows Phone') >=0 ) {
                        this.A5 = dsWindowPhone;
                    }
                }
            }
        }

        // testing
         //  this.A5 = dsSurface;

    }

    // support unicode pwd;
    // reverse it using unicode and get binary array, then change to hex code
   // SimpleEncryptPWD
    this.A22 = function (PWD) {
        var cnt = PWD.length;
        var bar = new Uint8Array(cnt * 2);
        for(var i=0;i<cnt;i++)
        {
            var c = PWD.charCodeAt(cnt - 1 - i);
            bar[2 * i] = (c >> 8) & 0xff;
            bar[2 * i + 1] = c & 0xff;
        }
        return this.A24(bar);//ConvertBinaryToHex(bar);
    }
    //binPWD is in hexcode format
   // SimpleDecryptPWD
    this.A23 = function (binPWD) {
        // change to binary
        var cnt = binPWD.length/2;
        var bou = new Uint8Array(cnt);
        var a = "a".charCodeAt(0);
        var f = "f".charCodeAt(0);
        for (var i = 0; i < icnt; i++) {
            var H,c1,v;
            for (var n = 0; n < 2; n++) {
                if(n==0)
                    c1 = binPWD.charCodeAt(2 * i);
                else
                    c1 = binPWD.charCodeAt(2 * i + 1);
                if (c1 >= 0x30 && c1 <= 0x39) // 0-9
                {
                    v = c1 - 0x30;
                }
                else if (c1 >= a && c1 <= f) {
                    v = c1 - a + 10;
                }
                if (n == 0) {
                    H = v * 16;
                }
                else {
                    bou[i] = H + v;
                }
            }
        }
        // swap all direction
        cnt = cnt / 2; // unicode
        var s = "";
        for (var i = 0; i < cnt; i++) {
            var c = bou[2 * (cnt - 1 - i)] * 256 + bou[2 * (cnt - 1 - i) + 1];
            s += String.fromCharCode(c);
        }
        return s;
    }

    // bIn is binary
    //ConvertBinaryToHex
    this.A24= function (bIn) {
        var cnt = bIn.length;
        var shex = "0123456789abcdef";
        var vout = "";
        for (var i = 0; i < cnt; i++) {
            var h = (bIn[i] & 0xF0) >> 4;
            var low = bIn[i] & 0x0F;
            vout += String.fromCharCode(shex.charCodeAt(h));
            vout += String.fromCharCode(shex.charCodeAt(low));
        }
        return vout;
    }
    // vInput is string
    //ConvertToHex
    this.A25 = function (vInput) {
        var shex = "0123456789abcdef";
        var ilen = vInput.length;
        var i;
        var vout = "";
        for (i = 0; i < ilen; i++) {
            var c = vInput.charCodeAt(i);
            var h = (c & 0xF0) >> 4;
            var low = c & 0x0F;
            vout += String.fromCharCode(shex.charCodeAt(h));
            vout += String.fromCharCode(shex.charCodeAt(low));
        }
        return vout;

    }



    // who is using this function
    // GetPosition
    this.A26 = function (e) {
        var vme = null;

        var pt = new this.A19(); //this.Point();

        if (e.view != null) {
            vme = e.view.document.window;
        }
        ////Ie7 and IE 8 only
        if (e.srcElement != null && e.srcElement.document != null)
            vme = e.srcElement.document.window;



        if (vme != undefined) {
            //work in IE, Google
            pt.x = e.clientX + vme.offsetLeft + vme.clientLeft;
            pt.y = e.clientY + vme.offsetTop + vme.clientTop;

        }
        else {
            pt.x = e.clientX;
            pt.y = e.clientY;
        }
        pt.x = parseInt(pt.x); // float point possible;
        pt.y = parseInt(pt.y);
        return pt;
    };
    var v64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

    //Base64
    this.A27 = function () {
        this.m_ar64 = [];
        this.m_arBack = [];
        var vlen = v64.length;
        var i;
        for (i = 0; i < vlen; i++) {
            this.m_ar64[i] = v64.charCodeAt(i);
            this.m_arBack[this.m_ar64[i]] = i;
        }
        // binary binput to convert to 64based string
        // performance issue. using String.fromCharCode(null,array)?? seems IE is very fast if not in debug mode
        //Encode
        // bad performance with 30 MB
        /*
        this.A28 = function (bInput, iOft, iLen) {
            // each 3 convert to 4;
            var vout = "";
            var vlen = iLen; //bInput.length;
            var vleft = vlen % 3;
            var vf = parseInt(vlen / 3);
            var k;
            var a, b;
            for (k = 0; k < vf; k++) {
                a = bInput[k * 3 + iOft];
                vout += String.fromCharCode(this.m_ar64[a >> 2]);
                b = bInput[k * 3 + 1 + iOft];
                a = ((a & 0x03) << 4) + (b >> 4);
                vout += String.fromCharCode(this.m_ar64[a]);
                a = bInput[k * 3 + 2 + iOft];
                b = ((b & 0x0f) << 2) + (a >> 6);
                vout += String.fromCharCode(this.m_ar64[b]);
                vout += String.fromCharCode(this.m_ar64[a & 0x3f]);
            }
            //check left;
            if (vleft == 1) { // two equal signs
                a = bInput[vf * 3 + iOft];
                vout += String.fromCharCode(this.m_ar64[a >> 2]);
                a = ((a & 0x03) << 4);
                vout += String.fromCharCode(this.m_ar64[a]);
                vout += "==";
            }
            else if (vleft == 2) { // one equal sign
                a = bInput[k * 3 + iOft];
                vout += String.fromCharCode(this.m_ar64[a >> 2]);
                b = bInput[k * 3 + 1 + iOft];
                a = ((a & 0x03) << 4) + (b >> 4);
                vout += String.fromCharCode(this.m_ar64[a]);
                b = ((b & 0x0f) << 2);
                vout += String.fromCharCode(this.m_ar64[b]);
                vout += "=";

            }
            return vout;
        }
        */
        // use another way
        // seems better in chrome
        this.A28 = function (bInput, iOft, iLen) {
            // each 3 convert to 4;
            var vout = new Array("");
            var vlen = iLen; //bInput.length;
            var vleft = vlen % 3;
            var vf = parseInt(vlen / 3);
            var k;
            var a, b;
            var tmp = "";
            for (k = 0; k < vf; k++) {
                a = bInput[k * 3 + iOft];
                // vout += String.fromCharCode(this.m_ar64[a >> 2]);
                tmp += String.fromCharCode(this.m_ar64[a >> 2]);
                //vout.push(String.fromCharCode(this.m_ar64[a >> 2]));
                b = bInput[k * 3 + 1 + iOft];
                a = ((a & 0x03) << 4) + (b >> 4);
                // vout += String.fromCharCode(this.m_ar64[a]);
                tmp += String.fromCharCode(this.m_ar64[a]);
                //vout.push(String.fromCharCode(this.m_ar64[a]));
                a = bInput[k * 3 + 2 + iOft];
                b = ((b & 0x0f) << 2) + (a >> 6);
                //  vout += String.fromCharCode(this.m_ar64[b]);
                //vout.push(String.fromCharCode(this.m_ar64[b]));
                tmp += String.fromCharCode(this.m_ar64[b]);
                // vout += String.fromCharCode(this.m_ar64[a & 0x3f]);
                // vout.push(String.fromCharCode(this.m_ar64[a & 0x3f]));
                tmp += String.fromCharCode(this.m_ar64[a & 0x3f]);
                if ((k % 4) == 0) {
                    vout.push(tmp);
                    tmp = "";
                }
            }
            if (tmp.length != 0) {
                vout.push(tmp);
            }
            //check left;
            if (vleft == 1) { // two equal signs
                a = bInput[vf * 3 + iOft];
                // vout += String.fromCharCode(this.m_ar64[a >> 2]);
                vout.push(String.fromCharCode(this.m_ar64[a >> 2]));
                a = ((a & 0x03) << 4);
                // vout += String.fromCharCode(this.m_ar64[a]);
                vout.push(String.fromCharCode(this.m_ar64[a]));
                //vout += "==";
                vout.push("==");
            }
            else if (vleft == 2) { // one equal sign
                a = bInput[k * 3 + iOft];
                // vout += String.fromCharCode(this.m_ar64[a >> 2]);
                vout.push(String.fromCharCode(this.m_ar64[a >> 2]));
                b = bInput[k * 3 + 1 + iOft];
                a = ((a & 0x03) << 4) + (b >> 4);
                //vout += String.fromCharCode(this.m_ar64[a]);
                vout.push(String.fromCharCode(this.m_ar64[a]));
                b = ((b & 0x0f) << 2);
                // vout += String.fromCharCode(this.m_ar64[b]);
                vout.push(String.fromCharCode(this.m_ar64[b]));
                //vout += "=";
                vout.push("=");

            }
            return vout.join("");
        }

        // 64 bit convert to binary array
        //Decode
        this.A29 = function (bSInput) {
            var vlen = bSInput.length;
            if ((vlen % 4) != 0 || vlen == 0)
                return null;
            var voutlen = vlen / 4 * 3;
            // check the last two 
            var e = "=";
            var c = e.charCodeAt(0);
            var clast = bSInput.charCodeAt(vlen - 1);
            var slast = bSInput.charCodeAt(vlen - 2);
            var vleft = 0;
            if (clast == c) {
                if (slast == c) {
                    vleft = 1;
                }
                else
                    vleft = 2;
            }
            if (vleft != 0)
                voutlen -= (3 - vleft);
            var vf = vlen / 4;
            var vdex = 0;
            var vout = new Uint8Array(voutlen);
            var k;
            for (k = 0; k < vf; k++) {
                var a1 = bSInput.charCodeAt(4 * k);
                a1 = this.m_arBack[a1];
                var a2 = bSInput.charCodeAt(4 * k + 1);
                a2 = this.m_arBack[a2];
                var a3 = bSInput.charCodeAt(4 * k + 2);
                a3 = this.m_arBack[a3];
                var a4 = bSInput.charCodeAt(4 * k + 3);
                a4 = this.m_arBack[a4];
                vout[vdex] = (a1 << 2) + (a2 >> 4);
                vdex++;
                if (vdex >= voutlen)
                    break;
                vout[vdex] = ((a2 & 0x0f) << 4) + (a3 >> 2);
                vdex++;
                if (vdex >= voutlen)
                    break;
                vout[vdex] = ((a3 & 0x03) << 6) + a4;
                vdex++;
            }
            return vout;
        }
    }

    // data_t* FindInsertIndex(data_t* pInputItem,int& iNeedInsertIndex,pSortCompareFunc pCompareFunc)
    // sort an array and find array between 
    // iS; start; iE; end not in cluded
    // this routine is used for two arrays creating a ring sorted array
   // FindInsertIndexFromRange
    this.A30 = function (pAr,iS,iE, pInputItem, iNeedInsertIndex, pCompareFunc) {
        var icount = iE - iS;// pAr.length;
        var ifront = iE; //icount;
        var iback = iS; //0;
        iNeedInsertIndex[0] = -1;
        var imiddle;
        //data_t *pexist=NULL;
        var pexist = null;
        //data_t *ptmp;
        var ptmp;
        var icom;
        while (ifront != iback) {
            ptmp = pAr[iback];
            icom = pCompareFunc(pInputItem, ptmp);
            if (icom < 0) {
                iNeedInsertIndex[0] = iback;
                break;
            }
            else if (icom == 0) {
                iNeedInsertIndex[0] = iback;
                pexist = ptmp;
                break;
            }
            else {
                ptmp = pAr[ifront - 1];
                icom = pCompareFunc(pInputItem, ptmp);
                if (icom > 0) {
                    iNeedInsertIndex[0] = ifront;
                    break;
                }
                else if (icom == 0) {
                    pexist = pAr[ifront - 1];
                    iNeedInsertIndex[0] = ifront - 1;
                    break;
                }
            }
            imiddle = iback + Math.floor((ifront - iback) / 2);
            ptmp = pAr[imiddle];
            icom = pCompareFunc(pInputItem, ptmp);
            if (icom < 0) {
                ifront = imiddle + 1;
            }
            else if (icom > 0) {
                iback = imiddle;
            }
            else {
                iNeedInsertIndex[0] = imiddle;
                pexist = ptmp;
                break;
            }
            if (ifront == (iback + 2)) {
                ptmp = pAr[iback];
                icom = pCompareFunc(pInputItem, ptmp);

                if (icom == 0) {
                    pexist = pAr[iback];
                    iNeedInsertIndex[0] = iback;
                } else {
                    icom = pCompareFunc(pInputItem, pAr[iback + 1]);
                    if (icom == 0) {
                        pexist = pAr[iback + 1];
                        iNeedInsertIndex[0] = iback + 1;
                    }
                    else {
                        iNeedInsertIndex[0] = ifront - 1;
                    }
                }
                break;
            }
        }
        return pexist;

    }


    // data_t* FindInsertIndex(data_t* pInputItem,int& iNeedInsertIndex,pSortCompareFunc pCompareFunc)
    //FindInsertIndex 
    this.A31 = function (pAr, pInputItem, iNeedInsertIndex, pCompareFunc) {
        var icount = pAr.length;
        var ifront = icount;
        var iback = 0;
        iNeedInsertIndex[0] = -1;
        var imiddle;
        //data_t *pexist=NULL;
        var pexist = null;
        //data_t *ptmp;
        var ptmp;
        var icom;
        while (ifront != iback) {
            ptmp = pAr[iback];
            icom = pCompareFunc(pInputItem,ptmp );
            if (icom < 0) {
                iNeedInsertIndex[0] = iback;
                break;
            }
            else if (icom == 0) {
                iNeedInsertIndex[0] = iback;
                pexist = ptmp;
                break;
            }
            else {
                ptmp = pAr[ifront - 1];
                icom = pCompareFunc(pInputItem,ptmp );
                if (icom > 0) {
                    iNeedInsertIndex[0] = ifront;
                    break;
                }
                else if (icom == 0) {
                    pexist = pAr[ifront - 1];
                    iNeedInsertIndex[0] = ifront - 1;
                    break;
                }
            }
            imiddle = iback + Math.floor((ifront - iback) / 2);
            ptmp = pAr[imiddle];
            icom = pCompareFunc(pInputItem,ptmp );
            if (icom < 0) {
                ifront = imiddle + 1;
            }
            else if (icom > 0) {
                iback = imiddle;
            }
            else {
                iNeedInsertIndex[0] = imiddle;
                pexist = ptmp;
                break;
            }
            if (ifront == (iback + 2)) {
                ptmp = pAr[iback];
                icom = pCompareFunc(pInputItem,ptmp );

                if (icom == 0) {
                    pexist = pAr[iback];
                    iNeedInsertIndex[0] = iback;
                } else {
                    icom = pCompareFunc(pInputItem,pAr[iback + 1]);
                    if (icom == 0) {
                        pexist = pAr[iback + 1];
                        iNeedInsertIndex[0] = iback + 1;
                    }
                    else {
                        iNeedInsertIndex[0] = ifront - 1;
                    }
                }
                break;
            }
        }
        return pexist;

    }
   // LinkedItem
    this.A32 = function () {
        this.O = null; // object
        this.N = null; // next linkedItem
        this.P = null; // previous Item;
    }
    //LinkedArray
    this.A33 = function () {
        var F = null; // first item;
        var L = null; // last item
        var No = 0; // number of items;
        // add to last
        this.Add = function (O) {
            var t = new me.A32(); // new me.LinkedItem();
            t.O = O;

            if (No == 0) {
                F = t;
                L = t;
            }
            else {
                L.N = t;
                t.P = L; // link to previous
                L = t;
            }
            No++;
        }
        this.Fi = function () { // get first item;
            return F;
        }
        this.La = function () { // get last item
            return L;
        }

        this.GFR = function () { // get first and remove
            if (No > 0) {
                var t = F;
                F = F.N;
                if(F!=  null)
                    F.P = null;
                No--;
                return t.O;
            }
            return null;
        }
        this.No = function () {
            return No;
        }
        this.RN = function (Node) { // remove a node
            Node.O = null;
            if (Node.P != null) {
                Node.P.N = Node.N;
            }
            if (Node.N != null) {
                Node.N.P = Node.P;
            }
            if (Node == F) {
                F = Node.N;
            }
            if (Node == L) {
                L = Node.P;
            }
            No--;
        }
       // RemoveAll
        this.A34 = function () {
            while (No > 0) { // do we need this to remove memory
                F = F.N;
                No--;
            }
        }

    }


}

dsxCommonUtil.extend = function (subClass, baseClass) {
    function inheritance() { }
    inheritance.prototype = baseClass.prototype;

    subClass.prototype = new inheritance();
    subClass.prototype.constructor = subClass;
    subClass.baseConstructor = baseClass;
    subClass.superClass = baseClass.prototype;
}

var gdsxCommonUtil = new dsxCommonUtil();