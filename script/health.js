(function(){


    //상단 뮤트
    $('.sound-on').on({
        click: function(e){
            e.preventDefault();
            $(this).toggleClass('on');            
        }
    });
    //가입 입력 페이지로 넘어가기
    $('.next-btn').on({

        click: function(e){
            e.preventDefault();
    
            if( $('#ok1').is(':checked')===false ){
                alert('국민건강보험공단 홈페이지 회원 약관에 동의하셔야 회원가입이 가능합니다.');
            }
            else if( $('#ok2').is(':checked')===false ){
                alert('개인정보보호법 제15조에 의한 개인정보 수집·이용에 동의하셔야 회원가입이 가능합니다.');
            }
            else if($('#ok3').is(':checked')===false ){
                alert('회원가입을 위한 고유식별정보 수집 및 이용에 동의하셔야 회원가입이 가능합니다.');
            }
            else {
                location.href = "index2.html"
            }
        }
    
    });

    
    //서브메뉴 내려오기
    $('#nav').on({
        mouseenter: function(){
            $('.sub-bg').show();
            $('.sub').show();
        },
        mouseleave: function(){
            $('.sub-bg').hide();
            $('.sub').hide();
        }

    });

    $('#nav > ul > li').on({
        mouseenter: function(){
            $(this).children().addClass('on');
        },
        mouseleave: function(){
            $(this).children().removeClass('on');
        }
    });

    
    //좌측 회원가입 누르면 약관동의 페이지로
    $('.join').on({
        click: function(e){
            e.preventDefault();
            location.href = "index.html"
        }
    })    

    // 좌측 메뉴 선택
    $('.section1 a').on({
        click: function(e){
            e.preventDefault();
            $('.section1 a').removeClass('on');
            $(this).addClass('on');
        }

    });


    // 아이디
    $('#id').on({
        keyup: function(event){
            event.preventDefault();

            //영문+숫자 6자~10자
            var regExp = /^(?=.*[A-Za-z])+(?=.*[0-9])+[A-Za-z0-9]{6,10}$/g;
            var idValue = $(this).val().toString();

            if(regExp.test(idValue)===false){
                $(this).addClass('error');
            }
            else{
                $(this).removeClass('error');
            }
        },
        focusout: function(event){
            event.preventDefault();
            var idValue = $(this).val().toString();

            if(idValue===''){
                $(this).removeClass('error');
            }
        }
    });

    $('.chkchk').on({
        click: function(e){
            e.preventDefault();
            
            var regExp = /^(?=.*[A-Za-z])+(?=.*[0-9])+[A-Za-z0-9]{6,10}$/g;

            if($('#id').val()===''){
                alert('아이디를 입력하세요!');
            }
            else if(regExp.test($('#id').val())===false){
                alert('아이디를 확인하세요!');
            }
        }
    });


    // 비밀번호
    $('#pw').on({
        keyup: function(event){
            event.preventDefault();

            //숫자 영문 기호 1개이상씩 9-12자
            var regExp = /^(?=.*[A-Za-z])+(?=.*[0-9])+(?=.*[\!\@\#\$])+[A-Za-z0-9\!\@\#\$]{9,12}$/g;
            var pwValue = $(this).val().toString();

            if(regExp.test(pwValue)===false){
                $(this).addClass('error');
            }
            else{
                $(this).removeClass('error');
            }
        },
        focusout: function(event){
            event.preventDefault();
            var pwValue = $(this).val().toString();

            if(pwValue===''){
                $(this).removeClass('error');
            }
        }
    });

    //비밀번호 확인
    $('#pw2').on({
        keyup: function(event){
            event.preventDefault();

            var regExp = /^(?=.*[A-Za-z])+(?=.*[0-9])+(?=.*[\!\@\#\$])+[A-Za-z0-9\!\@\#\$]{9,12}$/g;
            var pw2Value = $(this).val().toString();

            if(regExp.test(pw2Value)===false){
                $(this).addClass('error');
            }
            else{
                $(this).removeClass('error');
            }
        },
        focusout: function(event){
            event.preventDefault();
            var pw2Value = $(this).val().toString();

            if(pw2Value===''){
                $(this).removeClass('error');
            }
        }
    });

    //분실질문
    $('#question').on({
        change: function(e){
            e.preventDefault();

            if($(this).val()==='input'){
                $('#selfinput').addClass('on');
                $('#selfinput').focus();
            }
            else{
                $('#selfinput').removeClass('on');
            }
        }
    });

    // 전화번호
    $('#phone').on({
        keyup: function(event){
            event.preventDefault();

            //010-7942-5303
            var regExp = /^01[06789]{1}[0-9]{3,4}[0-9]{4}$/g;
            var pw2Value = $(this).val().toString();

            if(regExp.test(pw2Value)===false){
                $(this).addClass('error');
            }
            else{
                $(this).removeClass('error');
            }
        },
        focusout: function(event){
            event.preventDefault();
            var pw2Value = $(this).val().toString();

            if(pw2Value===''){
                $(this).removeClass('error');
            }
        }
    });

    //이메일
    $('#emailselect').on({
        change: function(){
            if($(this).val()!==''){
                $('#email2').val( $(this).val() ).prop('disabled','true');
                $('#email2').addClass('full');
            }
            else{
                $('#email2').prop('disabled',false);
                $('#email2').removeClass('full');
                $('#email2').val('').focus();
            }

        }
    });

    //모달켜기
    $('.popup').on({
        click: function(e){
            e.preventDefault();
            $('html').addClass('modal');
            $('#modal').addClass('on');
        }


    });

    //모달 닫기
    $('.close-btn').on({
        click: function(e){
            e.preventDefault();
            $('html').removeClass('modal');
            $('#modal').removeClass('on');
        }


    });



    

})(jQuery);