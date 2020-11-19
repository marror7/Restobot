    (function($) {
    "use strict"; // Start of use strict
  
    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: (target.offset().top - 71)
          }, 1000, "easeInOutExpo");
          return false;
        }
      }
    });
  
    // Scroll to top button appear
    $(document).scroll(function() {
      var scrollDistance = $(this).scrollTop();
      if (scrollDistance > 100) {
        $('.scroll-to-top').fadeIn();
      } else {
        $('.scroll-to-top').fadeOut();
      }
    });
  
    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function() {
      $('.navbar-collapse').collapse('hide');
    });
  
    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
      target: '#mainNav',
      offset: 80
    });
  
    // Collapse Navbar
    var navbarCollapse = function() {
      if ($("#mainNav").offset().top > 100) {
        $("#mainNav").addClass("navbar-shrink");
      } else {
        $("#mainNav").removeClass("navbar-shrink");
      }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);
  
    // Floating label headings for the contact form
    $(function() {
      $("body").on("input propertychange", ".floating-label-form-group", function(e) {
        $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
      }).on("focus", ".floating-label-form-group", function() {
        $(this).addClass("floating-label-form-group-with-focus");
      }).on("blur", ".floating-label-form-group", function() {
        $(this).removeClass("floating-label-form-group-with-focus");
      });
    });
  
  })(jQuery); // End of use strict
  /*** Sign Up ***/

$(document).ready(function () {
  /***** Email Validation ****/

  function validateEmail(sEmail) {
      var filter = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/;
      if (filter.test(sEmail)) {
          return true;
      } else {
          return false;
      }
  }
  $("#email").focusout(function () {
      var sEmail = $('#email').val();
      if ($.trim(sEmail).length == 0) {
          $(this).css("border-color", "#cd2d00");
          $('#submit').attr('disabled', true);
          $("#error_email").text("Please enter valid email address");

          e.preventDefault();
      }
      if (validateEmail(sEmail)) {
          $(this).css("border-color", "#2eb82e");
          $('#submit').attr('disabled', false);
          $("#error_email").text("");;
      } else {
          $(this).css("border-color", "#cd2d00");
          $('#submit').attr('disabled', true);
          $("#error_email").text("Invalid email address");
          e.preventDefault();
      }
  });
  /***** Login Data Validation ****/


  $("#username").focusout(function () {
      if ($(this).val() == '') {
          $(this).css("border-color", "#cd2d00");
          $('#submit').attr('disabled', true);
          $("#error_username").text("* You have to enter your Username!");
      } else {
          $(this).css("border-color", "#2eb82e");
          $('#submit').attr('disabled', false);
          $("#error_username").text("");
      }
  });
  $("#password").focusout(function () {
      if ($(this).val() == '') {
          $(this).css("border-color", "#cd2d00");
          $('#submit').attr('disabled', true);
          $("#error_password").text("* You have to enter your Password!");
      } else {
        var filter = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/;
        if (filter.test(sEmail)) {
          $(this).css("border-color", "#2eb82e");
          $('#submit').attr('disabled', false);
          $("#error_password").text("");
        } else {
            return false;
        }
      }
  });
  $("#confirm").focusout(function () {
      if ($("#confirm").val() !== $("#password").val()) {
          $("#confirm").css("border-color", "#cd2d00");
          $('#submit').attr('disabled', true);
          $("#error_confirm").text("Passwords Do not match!");
      } else {
          $(this).css("border-color", "#2eb82e");
          $('#submit').attr('disabled', false);
          $("#error_confirm").text("");
      }
  });

  /***+* Submit Validation ****/
  $("#submit").click(function () {
      if ($("#name").val() == '') {
          $("#name").css("border-color", "#cd2d00");
          $('#submit').attr('disabled', true);
          $("#error_name").text("* You have to enter your first name!");
      }
      if ($("#lastname").val() == '') {
          $("#lastname").css("border-color", "#cd2d00");
          $('#submit').attr('disabled', true);
          $("#error_lastname").text("* You have to enter your Last name!");
      }
      if ($("#dob").val() == '') {
          $("#dob").css("border-color", "#cd2d00");
          $('#submit').attr('disabled', true);
          $("#error_dob").text("* You have to enter your Date of Birth!");
      }
      if ($("#email").val() == '') {
          $("#email").css("border-color", "#FF0000");
          $('#submit').attr('disabled', true);
          $("#error_email").text("* You have to enter your Email  !");
      }
      if ($("#username").val() == '') {
          $("#username").css("border-color", "#cd2d00");
          $('#submit').attr('disabled', true);
          $("#error_username").text("* You have to enter your Username!");
      }
      if ($("#password").val() == '') {
          $("#password").css("border-color", "#cd2d00");
          $('#submit').attr('disabled', true);
          $("#error_password").text("Enter a Password");
      }
      if ($("#confirm").val() == '') {
          $("#confirm").css("border-color", "#cd2d00");
          $('#submit').attr('disabled', true);
          $("#error_confirm").text("Confirm Password");
      }

  });
  
  var countryOptions = '';
  var stateOptions = '';
  var cityOptions = '';

  $.getJSON('countries.json', function(data){
    countryOptions += '<option value="">Select country</option>';
    $.each(data, function(key, country){
      countryOptions += '<option value="'+country.id+'">'+country.name+'</option>';
    });
    $('#country').html(countryOptions);
  });

  $(document).on('change', '#country', function(){
   
    var country_id = $(this).val();
    if(country_id != '')
    {
      $.getJSON('states.json', function(data){
        stateOptions = '<option value="">Select state</option>';
        $.each(data, function(key, state){
          if(country_id == state.country_id)
          {
            stateOptions += '<option value="'+state.id+'">'+state.name+'</option>';
          }
        });
        $('#state').html(stateOptions);
      });
    }
    else
    {
       $('#state').html('<option value="">Select state</option>');
       $('#city').html('<option value="">Select city</option>');
    }
  });
  
  $(document).on('change', '#state', function(){
    var state_id = $(this).val();
    if(state_id != '')
    {
      $.getJSON('cities.json', function(data){
        cityOptions = '<option value="">Select city</option>';
        $.each(data, function(key, city){
          if(state_id == city.state_id)
          {
            cityOptions += '<option value="'+city.id+'">'+city.name+'</option>';
          }
        });
        $('#city').html(cityOptions);
      });
    }
    else
    {
       $('#city').html('<option value="">Select city</option>');
    }
  });
});