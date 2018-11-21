var Elevator = (function() {
  var BUILDING_INFO = {};
  var ELEVATOR = [];
  var container;
  
  var setInfo = function(info) {
    if ( typeof info !== "object") {
      warn("info 형식 오류");
      return false;
    }

    if (typeof info.id !== "string") {
      warn("info id는 string으로");
      return false;
    }

    if ( isNaN(info.elevator) || isNaN(info.floor) ) {
      warn("info elevator와 floor는 number로");
      return false;
    }

    container = document.querySelector(info.id);

    BUILDING_INFO = {
      floor : info.floor,
      elevator : info.elevator
    }

    for (var i = 0; i < BUILDING_INFO.elevator; i++ ){
      ELEVATOR.push({
        idx : i,
        current_floor : 0,
        prev_floor : 0
      })
    }

    var elevator = container.querySelectorAll(".elevator .movement");
    ELEVATOR.forEach(function(v, i) {
      elevator[i].dataset.elevatorId = v.idx;
    })
  }

  var addClickEvent = function() {
    var moveButton = container.querySelectorAll(".floorWrap .moveBtn");
    moveButton.forEach(function(v,i) {
      v.addEventListener("click", function() {
        var goFloor = v.parentNode.children[0].value - 1 ;
        var clickFloor = Math.abs(i - BUILDING_INFO.floor) - 1;

        compareFloor(clickFloor);
        var moveElevator = assignElevator();
        setElvatorPosition(moveElevator, clickFloor, goFloor);
      })
    })
  }
  
  var compareFloor = function(clickFloor) {
    ELEVATOR.forEach(function(v) {
      v.compare_floor = Math.abs(v.current_floor - clickFloor);
    })
  }
  
  var assignElevator = function() {
    return ELEVATOR.reduce(function(prev, curr) {
      if( prev.compare_floor > curr.compare_floor ) return curr;
      else if ( prev.compare_floor < curr.compare_floor ) return prev;
      else return prev.idx <= curr.idx ? prev : curr;
    })
  }

  var setElvatorPosition = function(moveElevator, clickFloor, goFloor) {
    ELEVATOR.forEach(function(v) {
      if ( v.idx === moveElevator.idx ) {
        v.prev_floor = clickFloor;
        v.current_floor = goFloor;
      }
    })
    
    addActiveClass(moveElevator);

    setStyleBottom("prev");
    
    setTimeout(function() {
      setStyleBottom("current");
    }, 1000);
  }

  var addActiveClass = function(moveElevator) {
    var elevator = container.querySelectorAll(".elevator .movement");
    elevator.forEach(function(v) {
      v.classList.remove("active");
      if (Number(v.dataset.elevatorId) === moveElevator.idx) v.classList.add("active");
    })
  };

  var setStyleBottom = function(floorName) {
    var floorHeight = container.querySelectorAll('.floor')[0].offsetHeight + 1;
    var elevator = container.querySelectorAll(".elevator .movement");

    ELEVATOR.forEach(function(v,i) {
      var elevatorId = Number(elevator[i].dataset.elevatorId);
      if (v.idx === elevatorId) {
        if ( floorName === "prev") elevator[i].style.bottom = floorHeight * v.prev_floor 
        else elevator[i].style.bottom = floorHeight * v.current_floor 
      }
    })
  }

  return function(info){
    setInfo(info);
    addClickEvent();
  };
})();

var warn = function(msg) {
  console.log("error : " + msg);
}
