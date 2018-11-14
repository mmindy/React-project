var Elevator = (function() {
  var WRAPPER;
  var ELEVATOR = [];
  var FLOOR;

  var init = info => {
    WRAPPER = document.querySelector(info.id);

    if ( info.elevator > 0 ) {
      var i = 0
      do {
        ELEVATOR.push({
          idx : i++,
          current_floor : 0
        })
      } while ( i < info.elevator )
    } else {
      warn("elevator 잘못 입력함");
      return false;
    }

    if ( info.floor > 0 ) FLOOR = info.floor;
    else {
      warn("floor 잘못 입력함");
      return false;
    }

    setElevatorPosition();
    addEvent();
  }

  var addEvent = function() {
    var floorBtn = WRAPPER.querySelectorAll(".floor .moveFloor");
    floorBtn.forEach(function(v, i) {
      floorBtn[i].addEventListener("click", function() {
        var goFloor = floorBtn[i].parentNode.children[0].value - 1 ;
        
        if (!isNaN(goFloor)) {
          var moveMachineIdx = compareFloor(i);
          changeCurrentFloor(moveMachineIdx, goFloor);
          addClass(moveMachineIdx);
          setElevatorPosition();
        }
      })
    })
  }

  var compareFloor = function(clickFloor) {
    var compareData = ELEVATOR.slice();
    clickFloor = Math.abs(clickFloor - FLOOR);

    compareData.forEach(function (v) {
      v.compare_floor = Math.abs(Number(v.current_floor) - Number(clickFloor));
    })
    
    var minData = compareData.reduce( function (previous, current) { 
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

  var changeCurrentFloor = function(moveMachineIdx, goFloor) {
    ELEVATOR.some(function(v,i) {
      if ( v.idx === moveMachineIdx) {
        v.current_floor = goFloor;
        return true;
      }
    });
  };

  var addClass = function(idx) {
    var machineList = WRAPPER.querySelectorAll(".movement .machine");
    machineList.forEach(function(v) {
      v.classList.remove("active");
    })
    machineList[idx].classList.add("active");
  }

  var setElevatorPosition = function() {
    var floorH = Number(WRAPPER.querySelector(".floor").offsetHeight);
    var movement = WRAPPER.querySelectorAll(".machine .ele");

    movement.forEach( function(v, i) {
      v.style.bottom = (ELEVATOR[i].current_floor * floorH) + "px";
    })
  };

  return function(info){
    init(info);
  };
})();

var warn = function(msg) {
  console.log("error : " + msg);
}
