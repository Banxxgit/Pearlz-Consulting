AOS.init();


$('#date3').DatePicker({
    flat: true,
    date: 'today',
    calendars: 3,
    mode: 'range',
    onChange: function(formated) {
      $('#widgetField span').get(0).innerHTML = formated.join(' - ');
    }
  });

  function myFunction() {
    var element = document.getElementById("tog-btn");
    element.classList.toggle("navbar-toggle-clicked");
  }

 
  

