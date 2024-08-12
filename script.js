$(document).ready(() => {
    $('#education').on('click', () => {
        if (!$('#education').hasClass('active__li')) {
            $('#education').addClass('active__li');
            $('#skills').removeClass('active__li');
            $('#skillView').removeClass('tab__shown');
            $('#educationView').addClass('tab__shown');
            $('.svg2').fadeOut(300);
            $('.svg1').fadeIn(300);
        } else {
            $('#education').removeClass('active__li');
            $('#educationView').removeClass('tab__shown');
            $('.svg2').fadeIn(300);
        }
    });

    $('#skills').on('click', () => {
        if (!$('#skills').hasClass('active__li')) {
            $('#skills').addClass('active__li');
            $('#education').removeClass('active__li');
            $('#educationView').removeClass('tab__shown');
            $('#skillView').addClass('tab__shown');
            $('.svg1').fadeOut(300); 
            $('.svg2').fadeIn(300); 
        } else {
            $('#skills').removeClass('active__li');
            $('#skillView').removeClass('tab__shown');
            $('.svg1').fadeIn(300);
        }
    });
    $('#showNav').on('click',()=>{
        $('#sideMenu').css('right' , '0')
    });
    $('#hideNav').on('click',()=>{
        $('#sideMenu').css('right','-170px')
    });
    
    $('#contact__form').on('submit' , (e)=>{
        e.preventDefault();
        emailjs.sendForm('service_n0zvro5','template_yzjne0h','#contact__form','gmFZzbjPmlfBjiHF-').then(()=>{
            $('#contact__msg').text('Message sent successfully ✅');
            setTimeout(()=>{
                $('#contact__msg').text('')
            },5000)
            $('#contact__form').trigger("reset");
        }, ()=>{
        $('#contact__msg').text('Error sending message');
        setTimeout(()=>{
            $('#contact__msg').text('')
            },5000)
            $('#contact__form').trigger("reset");
            });
    });
    $('#sideMenu>li>a').on('click' , ()=>{
        $('#sideMenu').css('right','-170px')
    })
    
});

