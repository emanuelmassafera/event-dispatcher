import EventDispatcherInterface from "./interfaces/event-dispatcher.interface";
import EventHandlerInterface from "./interfaces/event-handler.interface";
import EventInterface from "./interfaces/event.interface";

export default class EventDispatcher implements EventDispatcherInterface {
  private eventHandlers: { [eventName: string]: EventHandlerInterface[] } = {}

  get getEventHandlers(): { [eventName: string]: EventHandlerInterface[] } {
    return this.eventHandlers
  }

  register(eventName: string, handler: EventHandlerInterface<EventInterface>): void {
    if (!this.eventHandlers[eventName]) {
      this.eventHandlers[eventName] = []
    }

    this.eventHandlers[eventName].push(handler)
  }

  notify(event: EventInterface): void {
    const eventName = event.constructor.name

    if (this.eventHandlers[eventName]) {
      this.eventHandlers[eventName].forEach(handler => handler.handle(event))
    }
  }
}
