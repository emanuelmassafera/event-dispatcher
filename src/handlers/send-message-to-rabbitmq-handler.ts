import OrderPlacedEvent from "../events/order-placed";
import EventHandlerInterface from "../interfaces/event-handler.interface";
import EventInterface from "../interfaces/event.interface";

export default class SendMessageToRabbitMQHandler implements EventHandlerInterface<EventInterface> {
  handle(event: OrderPlacedEvent): void {
    console.log("SendMessageToRabbitMQHandler: ", event)
  }
}
