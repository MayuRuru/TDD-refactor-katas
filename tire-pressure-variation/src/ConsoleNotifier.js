export default class ConsoleNotifier{
    notifyActiveState() {
        console.log("Alarm activated!");
    }

    notifyInactiveState() {
        console.log("Alarm deactivated!");
    }
}