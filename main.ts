makerbit.onIrButton(IrButton.Light, IrButtonAction.Pressed, function () {
    mbit_Robot.RGB_Car_Big(255, 0, 100)
})
makerbit.onIrButton(IrButton.Right, IrButtonAction.Pressed, function () {
    mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_Right, 60)
})
makerbit.onIrButton(IrButton.Left, IrButtonAction.Pressed, function () {
    mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_Left, 60)
})
makerbit.onIrButton(IrButton.Down, IrButtonAction.Pressed, function () {
    mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_Back, 60)
})
makerbit.onIrButton(IrButton.Up, IrButtonAction.Pressed, function () {
    mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_Run, 60)
})
makerbit.onIrButton(IrButton.Power, IrButtonAction.Pressed, function () {
    mbit_Robot.CarCtrl(mbit_Robot.CarState.Car_Stop)
})
makerbit.connectIrReceiver(DigitalPin.P8)
