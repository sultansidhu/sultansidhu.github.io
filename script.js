

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
    
    $('#crs').click(function(){
        $('html, body').animate({
            scrollTop:$('#courseworkScreen').offset().top -100
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
    
    
    // This is for course descriptions
    
    
    $(".courseListLeft li").hover(function(){
        //alert("CURRENT ITEM'S ID IS " + this.id);
        var description = $("#courseDes");
        switch(this.id){
            case "207":
                description.text("A course on collaborative software development. We created an android app, written in Java, in a team of 5. Throughout this course I gained exposure to Java, Android development, Software development methodologies and intelligent software design strategies.");
                break;
            case "236":
                description.text("A course on the theoretical face of computer science. We learned about finite state machines, theory of computation, various flavours of induction, algorithm correctness and complexity analysis.");
                break;
            case "263":
                description.text("One of my favourite courses! This course brought with it the mental challenge of reasoning about data structures and algorithms. I gained exposure to various types of data structures like heaps, trees, etc. and analyzed various graph algorithms.");
                break;
            case "258":
                description.text("A course on the underlying implementation of a computer. In the words of our professor, this course is a 'mini computer engineering degree'. We learned about combinational and sequential circuits, progressing onto memory management system on the lowest level. We also studied the implementation of the computer's CPU.");
                break;
            case "209":
                description.text("An extremely useful course about systems programming in C. We developed low level software using software like the GDB debugger and Makefile. We also learned about many low level features of computers.");
                break;
            case "301":
                description.text("A course on collaborative software engineering. Students create independent projects in teams of up to 7, with full freedom of languages and frameworks to use. Also helps the students gain exposure to AGILE software development. A continuation of CSC 207.");
                break;
            case "309":
                description.text("A course on web development. Students create independent projects in teams of 4-5. I learned various web frameworks, like Node.js, Angular.js, React.js, and HTML/CSS with Bootstrap.");
                break;
            case "369":
                description.text("A continuation of CSC 209, offering a deeper look at the operating system. Offers insight into the concept of a process and concurrency problems: synchronization, mutual exclusion, deadlock. Additional topics include memory management, file systems, process scheduling, threads, and protection.");
                break;
            case "384":
                description.text("Theories and algorithms that capture (or approximate) some of the core elements of computational intelligence. Topics include: search; logical representations and reasoning, classical automated planning, representing and reasoning with uncertainty, learning, decision making (planning) under uncertainty.");
            case "324":
                description.text("A course on the principles of programming languages. Explores the functional programming paradigm through Haskell and Racket. Also introduces functional programming libraries in Python.");
                break;
            case "373":
                description.text("Standard algorithm design techniques: divide-and-conquer, greedy strategies, dynamic programming, linear programming, randomization, network flows, approximation algorithms. Also includes a brief introduction to NP-completeness: polynomial time reductions, examples of various NP-complete problems, self-reducibility.");
                break;
            case "311":
                description.text("An introduction to methods for automated learning of relationships on the basis of empirical data. Classification and regression using nearest neighbour methods, decision trees, linear models, and neural networks. Clustering algorithms. Problems of overfitting and of assessing accuracy. Basics of reinforcement learning.");
                break;
            case "343":
                description.text("Introduction to database management systems. The relational data model. Relational algebra. Querying and updating databases: the query language SQL. Application programming with SQL. Integrity constraints, normal forms, and database design. Elements of database system technology: query processing, transaction management.");
                break;
        }
    }, function(){
        var description = $("#courseDes");
        description.text(" ");
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



