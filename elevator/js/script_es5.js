var Elevator = (function() {
  var ELEVATOR = [];
  var FLOOR;
  var container;

  var init = info => {
    container = document.querySelector(info.id);

    if ( info.elevator > 0 ) {
      var i = 0
      do {
        ELEVATOR.push({
          idx : i++,
          current_floor : 0,
          prev_floor : 0
        })
      } while ( i < info.elevator )
    } else {
      warn("elevator 잘못 입력함");
      return false;
    }

    if ( info.floor > 0 ) FLOOR = info.floor - 1;
    else {
      warn("floor 잘못 입력함");
      return false;
    }

    setElevatorPosition();
    addClickEvent();
  }

  var addClickEvent = function() {
    var floorBtn = container.querySelectorAll(".floor .moveFloor");

    floorBtn.forEach(function(v, i) {
      floorBtn[i].addEventListener("click", function() {
        var goFloor = floorBtn[i].parentNode.children[0].value - 1 ;
        clickFloor = Math.abs(i - FLOOR);

        if (!isNaN(goFloor)) {
          var moveElevatorIdx = selectElevator();
          compareFloor(moveElevatorIdx, clickFloor);
          addClass(moveElevatorIdx);
          changeCurrentFloor(moveElevatorIdx, goFloor);
          setElevatorPosition(moveElevatorIdx);
        }
      })
    })
  }

  var compareFloor = function(moveElevatorIdx,clickFloor) {
    ELEVATOR.forEach(function (v, i) {
      if (i === moveElevatorIdx) v.prev_floor = clickFloor;
      v.compare_floor = Math.abs(Number(v.current_floor) - Number(clickFloor));
    })
  }

  var selectElevator = function() {
    var minData = ELEVATOR.reduce( function(previous, current) { 
      if (previous.compare_floor > current.compare_floor) {
        return current;
      } else {
        if ( previous.compare_floor != current.compare_floor) {
          return previous;
        } else {
          return previous.idx > current.idx ? current : previous;
        }
      }
    });
    
    return minData.idx;
  }

  var addClass = function(idx) {
    var elevatorList = container.querySelectorAll(".movement .machine");
    elevatorList.forEach(function(v) {
      v.classList.remove("active");
    })
    elevatorList[idx].classList.add("active");
  }

  var setElevatorPosition = function() {
    setBottomPosition("prev_floor");

    setTimeout(function() {
      setBottomPosition("current_floor");
    }, 1000)
  };

  var setBottomPosition = function(floorName) {    
    var floorH = Number(container.querySelector(".floor").offsetHeight + 1);
    var elevator = container.querySelectorAll(".machine .ele");
    
    elevator.forEach( function(v, i) {
      if (floorName === "current_floor") v.style.bottom = (ELEVATOR[i].current_floor * floorH) + "px";
      else v.style.bottom = (ELEVATOR[i].prev_floor * floorH) + "px";      
    })
  }

  var changeCurrentFloor = function(moveElevatorIdx, goFloor) {
    ELEVATOR.some(function(v,i) {
      if ( v.idx === moveElevatorIdx) {
        v.current_floor = goFloor;
        return true;
      }
    });
  };

  return function(info){
    init(info);
  };
})();

var warn = function(msg) {
  console.log("error : " + msg);
}
