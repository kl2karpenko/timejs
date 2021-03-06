function TimeJS(){
    // method to count instance of function
  TimeJS.count++;
  
  var dateObj = new Date();
  this.day = function(){
    return alert(dateObj.getDate());
  };
 this.month = function(){
   return alert(dateObj.getMonth()+1);
 };
  this.year = function(){
   return alert(dateObj.getFullYear());
 };
  this.hours = function(){
   return alert(dateObj.getHours());
 };
  this.minutes = function(){
   return alert(dateObj.getMinutes());
 };
  this.seconds = function(){
   return alert(dateObj.getSeconds());
 };

//   method with params

this.format = function(myDate){
 var formatDate = dateObj;
  formatDate = [
    '0' + formatDate.getDate(),
    '0' + (formatDate.getMonth() + 1),
    '' + formatDate.getFullYear(),
    '0' + formatDate.getHours(),
    '0' + formatDate.getMinutes(),
    '0' + formatDate.getSeconds()
  ];
  for (var i = 0; i < formatDate.length; i++) {
    formatDate[i] = formatDate[i].slice(-2);
  }
  
  var  dateArr = myDate.split(':');
  var dArr = [];
  for (var j=0; j < dateArr.length; j++ ){
    if (dateArr[j] == 'HH'){
      dArr.push(formatDate[3]);
    }
    if (dateArr[j] == 'mm'){
      dArr.push( formatDate[4]);
    }
    if (dateArr[j] == 'ss'){
      dArr.push(formatDate[5]);
    }
    if (dateArr[j] == 'dd'){
      dArr.push(formatDate[0]);
    }
    if (dateArr[j] == 'MM'){
      dArr.push(formatDate[1]);
    }
    if (dateArr[j] == 'YY'){
      dArr.push(formatDate[2]);
    }
  }
  return alert(dArr.join(':'));
};
 
 //   method to add some time interval to instance 
 
  this.add = function(addTime, form){
    if (form == 'HH'){
      return dateObj.setHours(dateObj.getHours() + addTime);
    }
    if (form == 'mm'){
      return dateObj.setMinutes(dateObj.getMinutes() + addTime);
    }
    if (form == 'ss'){
      return dateObj.setSeconds(dateObj.getSeconds() + addTime);
    }
    if (form == 'dd'){
      return dateObj.setDate(dateObj.getDate() + addTime);
    }
    if (form == 'MM'){
      return dateObj.setMonth(dateObj.getMonth() + addTime);
    }
    if (form == 'YY'){
      return dateObj.setFullYear(dateObj.getFullYear() + addTime);
    }
  };

  this.time = new Date();
  // method isEqualTo - compare 2 instance and return if they are equal
  this.isEqualTo = function(compDate){
    var equal = this.time.getTime() === compDate.time.getTime();
    return alert(equal);
  };
  
  // method greaterThen - compare 2 instance and return if 1 grater then other
  this.greaterThen = function(compDate){
    if (this.time.getTime() > compDate.time.getTime()){
      return alert(true);
    } else return alert(false);
  };

}

TimeJS.count = 0;
TimeJS.getInstanceCount = function(){
  alert(this.count);
};

var time = new TimeJS(); //  creates an instance of the library with the current date

// get todays date, years, minutes

time.day(); 
time.year();
time.minutes();


// get current time in the appropriate format

time.format("HH"); 
time.format("HH:mm"); 
time.format("HH:mm:ss");
time.format("dd:MM:YY");
time.format("YY:MM:dd");


// adds time to current time in the appropriate format

var time2 = new TimeJS();
time2.add(2, "HH"); 
time2.add(4, "MM");
time2.add(3, "YY");
time2.format("HH:mm:ss");
time2.format("dd:MM:YY");


// shows the number of instances created by TimeJS

TimeJS.getInstanceCount();


// methods to compare 2 instance

time2.isEqualTo(time); 
time2.greaterThen(time);