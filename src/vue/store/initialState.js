const initialState = {
    info: {
        duration: -1,
        currentTime: -1,
        sessionTimeLeft: -1,
        lastUpdateTime: -1,
        drivers: [{ id: 1234, name: "Margot The Grand Destroyer of Asses", drivingTimeLeft: 123 }], // [{id: 0, name: 'Driver 1', drivingTimeLeft: 1345}]
        currentDriverId: null,
        carModel: "Car model",
        trackName: "Track name",
    },
    strategy: {
        flag: "AC_NO_FLAG",
        racingTimers: {
            stintLeft: 0,
            bestLap: 0,
            previousLap: 0,
            currentLap: 0,
            currentPred: 0,
            deltaToBest: 0,
            gapToFront: 0,
            gapToBehind: 0,
        },
        pitMenu: {
            damage: 0,
            repairTime: 0,
            repairBody: true,
            repairSuspension: true,
            tyres: {
                change: true,
                selectedType: "Wet",
                pressures: [0, 0, 0, 0],
            },
            fuelToAdd: 0,
            changeBrakes: false,
            penaltyTime: 0,
        },
        fuel: {
            tankSize: 120,
            usedThisStint: 0,
            remaining: 120,
            perLap: 0,
        },
        tyres: {
            lastPitValues: [0, 0, 0, 0],
            // in psi*10 : 259 for 25.9 psi
        },
    },
    telemetry: {
        electronics: {
            tc: 0,
            tc2: 0,
            abs: 0,
            bbias: 0,
            emap: 0,
        },
        brakes: {
            life: {
                pads: 0,
                discs: 0,
            },
            temps: [0, 0, 0, 0],
        },
        tyres: {
            type: null,
            currentSet: null,
            rainTyres: null,
            age: 0,
            livePressures: [0, 0, 0, 0],
            pressuresHistory: [],
            avgPressuresDuringStint: [0, 0, 0, 0],
            wear: [0, 0, 0, 0],
            coreT: [0, 0, 0, 0],
            slipAngle: [0, 0, 0, 0],
            slipRatio: [0, 0, 0, 0],
        },
    },
    weather: {
        events: [],
        liveData: {
            windDirection: 0,
            windSpeed: 0,
            airTemp: 0,
            roadTemp: 0,
            trackStatus: null,
        },
    }
}

export default initialState