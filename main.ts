basic.forever(function () {
    if (DFRobotMaqueenPlus.ultraSonic(PIN.P1, PIN.P2) > 60) {
        DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 250)
    } else if (DFRobotMaqueenPlus.ultraSonic(PIN.P1, PIN.P2) > 40) {
        DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 150)
    } else if (DFRobotMaqueenPlus.ultraSonic(PIN.P1, PIN.P2) > 30) {
        DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 100)
    } else if (DFRobotMaqueenPlus.ultraSonic(PIN.P1, PIN.P2) > 20) {
        DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 50)
    } else if (DFRobotMaqueenPlus.ultraSonic(PIN.P1, PIN.P2) > 10) {
        DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 25)
    } else if (DFRobotMaqueenPlus.ultraSonic(PIN.P1, PIN.P2) > 7) {
        DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 5)
    } else {
        DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 0)
    }
})
basic.forever(function () {
    if (true) {
    	
    } else if (false) {
    	
    } else if (false) {
    	
    } else if (false) {
    	
    }
})
