/**
 * Created by 胡茜 on 2017/8/21.
 */

$(function () {

    ////////////////////////////////////////shortcut////////////////////////////////////
    var oSDrop = $('.s-sub').find('.s-h');
    var oMDrop = $('.s-main').find('.s-h');

    oSDrop.hover(
        function () {
            oSDrop.find('.s-b').show();
            oSDrop.find('.s-ha').css('background','url("images/str2.png") no-repeat right center');
        },
        function () {
            oSDrop.find('.s-b').hide();
            oSDrop.find('.s-ha').css('background','url("images/str1.png") no-repeat right center');
        }
    );

    oMDrop.hover(
        function () {
            oMDrop.find('.s-b').show();
        },
        function () {
            oMDrop.find('.s-b').hide();
        }
    );


    ////////////////////////////////////////header////////////////////////////////////
    var oIpt = $('.search-bar').find('input').eq(0);
    oIpt.on({
        'click' : function () {
            $('.search-key').hide();
        },
        'blur' : function () {
            if (oIpt.val() == '')
                $('.search-key').show();
        }
    });


    ////////////////////////////////////////hot-board////////////////////////////////////
    var oBoard = $('.board-list');
    var aBImg = oBoard.find('img');
    var aBtn = $('.board-btns').find('span');
    for (var i=0; i<aBImg.length; i++)
    {
        aBImg[i].src = boardData[i];
    }
    var wImg = aBImg.eq(0).width();
    oBoard.width(wImg*boardData.length);

    var num = 0;
    var btimer = null;
    fnBoard();
    function fnBoard() {
        clearInterval(btimer);
        btimer = setInterval(function () {
            num++;
            if (num == aBImg.length)
            {
                num = 1;
                oBoard.css('left', 0);
                aBtn.eq(0).attr('class','b-active');
            }
            oBoard.animate({left: -wImg*num}, 3000, function () {
                aBtn.attr('class','');
                aBtn.eq(num).attr('class','b-active');
            });
        }, 5000);
    }

    $('.board-btns, .board-list').hover(
        function () {
            clearInterval(btimer);
        },
        function () {
            fnBoard();
        }
    );

    aBtn.hover(
        function () {
            aBtn.attr('class','');
            $(this).attr('class','b-active');
            oBoard.animate({left: -wImg*$(this).index()});
        },
        function () {
            num = $(this).index();
        }
    );


    ////////////////////////////////////////slide////////////////////////////////////
    var aSLi = $('.slide').children('ul').children('li');
    var aSBox = $('.p-box');
    for (var i=0; i<aSBox.length; i++)
    {
        for (var j=0; j<4; j++)
        {
            var oSItem = aSBox.eq(i).find('a').eq(j);
            oSItem.css('background', 'url('+ slideData[i][j].src +') no-repeat 9px 13px');
            oSItem.find('p').eq(0).html(slideData[i][j].name);
            oSItem.find('p').eq(1).html(slideData[i][j].price);
        }
    }

    aSLi.hover(
        function () {
            aSLi.attr('class', '');
            $(this).attr('class','s-active');
            //alert($(this).find('.item-panel').offsetParent()[0].tagName);
            $(this).find('.item-panel').show();
        },
        function () {
            $('.item-panel').hide();
            aSLi.attr('class', '');
        }
    );


    ///////////////////////////////channel-menu  m-main////////////////////////////////
    var oTell = $('.m-tell').find('ul');
    var aLi = oTell.find('li');
    var hLi = aLi.eq(0).height();
    var ttimer = null;
    var n = 0;
    fnTell();
    function fnTell() {
        clearInterval(ttimer);
        ttimer = setInterval(function () {
            //alert(hLi);
            n++;
            if (n == aLi.length)
            {
                n = 1;
                oTell.css('top', 0);
            }
            oTell.animate({top: -hLi*n}, 200, 'linear');
        }, 2000);
    }

    aLi.hover(
        function () {
            clearInterval(ttimer);
        },
        function () {
            n = $(this).index();
            fnTell();
        }
    );


    ///////////////////////////////channel-menu  m-list////////////////////////////////
    var aA = $('.m-list').find('a');
    for (var i=0; i<aA.length; i++)
    {
        aA.eq(i).css('background', 'url('+ mListData[i]+') no-repeat');
    }


    ///////////////////////////////////////hs-wrap////////////////////////////////////
    $('.w-left').find('a').css('background', 'url(' + hsData[0].src + ') no-repeat');
    var aWa = $('.w-main').find('a');
    for (var i=0; i<aWa.length; i++)
    {
        aWa.eq(i).find('img').attr('src', hsData[i+1].src);
        aWa.eq(i).find('h3').html(hsData[i+1].name);
        aWa.eq(i).find('p').eq(0).html(hsData[i+1].info);
        aWa.eq(i).find('p').eq(1).html(hsData[i+1].price);
    }


    /////////////////////////////////////goods-wrap///////////////////////////////////
    var oGUl = $('.g-contanier');
    var aGa = oGUl.find('a');
    var oPre = $('.g-pre');
    var oNext = $('.g-next');
    var gLeft = oGUl.offset().left;
    var gWLi = oGUl.find('li').width();
    for (var i=0; i<aGa.length; i++)
    {
        aGa.eq(i).find('img').attr('src', goodsData[i].src);
        aGa.eq(i).find('h3').html(goodsData[i].name);
        aGa.eq(i).find('p').eq(0).html(goodsData[i].info);
        aGa.eq(i).find('p').eq(1).html(goodsData[i].price);
    }

    var j = 0;
    oPre.click(function () {
        j--;
        if(j==0)
            $(this).addClass('noclick');
        else
            oGUl.animate({left: -gWLi*5*j}, 3000);

    });
    oNext.click(function () {
        j++;
        if (j==2)
        {
            oGUl.animate({left: 1200-gWLi*13}, 3000);
            $(this).addClass('noclick');
        }
        else
            oGUl.animate({left: -gWLi*5*j}, 3000);

    });

    /////////////////////////////////////channel-floor///////////////////////////////////
    var aFa = $('.f-list').find('a');
    var aFBtn = $('.f-btns').find('span');
    for (var i=0; i<aFa.length; i++)
    {
        aFa.eq(i).css('background', 'url(' + floorData[i] + ') no-repeat');
    }
    var ftimer = null;
    var findex = 0;
    clearInterval(ftimer);
    ftimer = setInterval(function () {
        aFBtn.attr('class', '');
        aFa.eq(findex).animate({'opacity': 0}, 500, 'linear');
        if (findex == aFa.length-1)
            findex = -1;
        aFa.eq(findex+1).animate({'opacity': 1}, 500, 'linear');
        aFBtn.eq(findex+1).attr('class', 'f-active');
        findex++;
    }, 4000);




    //////////////////////////////////channel-body phone/////////////////////////////////
    var aPa = $('.b-main').eq(0).find('a');
    aPa.eq(0).find('img').attr('src', phoneData[0].src);
    for (var i=1; i<aPa.length; i++)
    {
        aPa.eq(i).find('img').attr('src', phoneData[i].src);
        aPa.eq(i).find('h3').html(phoneData[i].name);
        aPa.eq(i).find('p').eq(0).html(phoneData[i].info);
        aPa.eq(i).find('p').eq(1).html(phoneData[i].price);
    }



    //////////////////////////////////channel-body pad//////////////////////////////////
    var aPaa = $('.b-main').eq(1).find('a');
    aPaa.eq(0).find('img').attr('src', padData[0].src);
    for (var i=1; i<aPaa.length; i++)
    {
        aPaa.eq(i).find('img').attr('src', padData[i].src);
        aPaa.eq(i).find('h3').html(padData[i].name);
        aPaa.eq(i).find('p').eq(0).html(padData[i].info);
        aPaa.eq(i).find('p').eq(1).html(padData[i].price);
    }



});