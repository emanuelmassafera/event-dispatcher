import EventDispatcher from "../src/event-dispatcher"
import OrderPlacedEvent from "../src/events/order-placed"
import SendMessageToRabbitMQHandler from "../src/handlers/send-message-to-rabbitmq-handler"

describe("Domain event tests", () => {
  it("should register an event", () => {
    const eventDispatcher = new EventDispatcher()
    const eventHandler = new SendMessageToRabbitMQHandler()

    eventDispatcher.register("OrderPlacedEvent", eventHandler)

    expect(eventDispatcher.getEventHandlers["OrderPlacedEvent"]).toBeDefined()
    expect(eventDispatcher.getEventHandlers["OrderPlacedEvent"].length).toBe(1)
  })

  it("should notify when an event occurs", () => {
    const eventDispatcher = new EventDispatcher()
    const eventHandler = new SendMessageToRabbitMQHandler()
    const spyEventHandler = jest.spyOn(eventHandler, "handle")

    eventDispatcher.register("OrderPlacedEvent", eventHandler)

    const event = new OrderPlacedEvent({
      orderId: "123",
      customerId: "123",
      productId: "123",
      quantity: 1,
      total: 100
    })

    eventDispatcher.notify(event)

    expect(spyEventHandler).toHaveBeenCalled()
  })
})
