

$(function(){
    
    
    var OSName = "Unknown";
    if (window.navigator.userAgent.indexOf("Windows NT 10.0")!= -1) OSName="Windows 10";
    if (window.navigator.userAgent.indexOf("Windows NT 6.2") != -1) OSName="Windows 8";
    if (window.navigator.userAgent.indexOf("Windows NT 6.1") != -1) OSName="Windows 7";
    if (window.navigator.userAgent.indexOf("Windows NT 6.0") != -1) OSName="Windows Vista";
    if (window.navigator.userAgent.indexOf("Windows NT 5.1") != -1) OSName="Windows XP";
    if (window.navigator.userAgent.indexOf("Windows NT 5.0") != -1) OSName="Windows 2000";
    if (window.navigator.userAgent.indexOf("Mac")            != -1) OSName="Mac/iOS";
    if (window.navigator.userAgent.indexOf("X11")            != -1) OSName="UNIX";
    if (window.navigator.userAgent.indexOf("Linux")          != -1) OSName="Linux";
    
    if (OSName != "Mac/iOS"){
        //avenir 
        $('header, #bioScreen, #skillScreen, #experienceScreen, #projectScreen, #educationScreen, #contactScreen').css('font-family', 'Avenir Next');
    }
    $('.index-btn').click(function() {
        $('.active').removeClass('active');
        var clickedIndex = $('.index-btn').index($(this));
        $('.project').eq(clickedIndex).addClass('active');
    });
    
    $('header').hover(function(){
        $('header').css('background-color', 'white');
        $('#headerMenuOptions').css('color', 'black');
    }, function(){
        $('header').css('background-color', '#4d4b4c');
        $('#headerMenuOptions').css('color', 'white');
    });
    
    // internal links
    
    $('#bio').click(function(){
        $('html, body').animate({
            scrollTop:$('#bioScreen').offset().top -100
        }, 1000);
    });
    
    $('#skills').click(function(){
        $('html, body').animate({
            scrollTop:$('#skillScreen').offset().top -100
        }, 1000);
    });
    
    $('#exp').click(function(){
        $('html, body').animate({
            scrollTop:$('#experienceScreen').offset().top -100
        }, 1000);
    });
    
    $('#prj').click(function(){
        $('html, body').animate({
            scrollTop:$('#projectScreen').offset().top -100
        }, 1000);
    });
    
    $('#edu').click(function(){
        $('html, body').animate({
            scrollTop:$('#educationScreen').offset().top -100
        }, 1000);
    });
    
    $('#cnt').click(function(){
        $('html, body').animate({
            scrollTop:$('#contactScreen').offset().top -100
        }, 1000);
    });
    
    $('#nametag').click(function(){
        $('html, body').animate({
            'scrollTop':0
        }, 1000);
    });
    
    // external links
    
    $('#github').click(function(){
        window.open('https://github.com/sultansidhu', '_blank');
    });
    
    $('#linkedin').click(function(){
        window.open('https://linkedin.com/in/sultan-sidhu', '_blank');
    });
    
    $('.a3c').click(function(){
        window.open('https://github.com/sultansidhu/Breakout_A3C', '_blank');
    });
    
    $('.ras').click(function(){
        window.open('https://github.com/sultansidhu/CSC399', '_blank');
    });
    
    $('.vsy').click(function(){
        window.open("https://github.com/sultansidhu/VeriSynth", '_blank');
    });
    
    $('.gcn').click(function(){
        window.open('https://github.com/sultansidhu/GameCentre', '_blank');
    });
    
    $('.university').click(function(){
        window.open('https://web.cs.toronto.edu', '_blank');
    });
    
    $('.schoolCAN').click(function(){
        window.open('http://schools.peelschools.org/sec/mississauga/Pages/default.aspx', '_blank');
    });
    
    $('.schoolIND').click(function(){
        window.open('http://www.britishcoedschool.com', '_blank');
    });
    
    // Some contact form shenanigans
    
    $('.container-right button').click(function(event){
        
        var name = $('#name').val();
        var email = $('#email').val();
        var subject = $('#subject').val();
        var message = $('#message').val();
        var status = $('#caution');
        
        if (subject.length <= 2){
            status.text('Subject is too short!');
            event.preventDefault(); // prevents form submission before validation
        }
        
        if (message.length < 1){
            status.text('Please write a message!');
            event.preventDefault(); // prevents form submission before validation
        }
        
        if (email.length > 5 && email.includes('@') && email.includes('.')){
            console.log('email is valid');
        } else {
            status.text('Email is invalid!');
            event.preventDefault(); // prevents form submission before validation
        }

    });
    
    
    // Some other shenanigans
    
    
    
});



