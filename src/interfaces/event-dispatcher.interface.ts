import EventHandlerInterface from "./event-handler.interface";
import EventInterface from "./event.interface";

export default interface EventDispatcherInterface {
  register(event: string, handler: EventHandlerInterface): void
  notify(event: EventInterface): void
}
