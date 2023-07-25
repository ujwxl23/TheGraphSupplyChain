import { newMockEvent } from "matchstick-as"
import { ethereum } from "@graphprotocol/graph-ts"
import {
  DateAndLocationSet,
  DateUnloaded
} from "../generated/SupplyChain/SupplyChain"

export function createDateAndLocationSetEvent(
  depatureDate: string,
  depaturePlace: string,
  arrivalDate: string,
  arrivalPlace: string
): DateAndLocationSet {
  let dateAndLocationSetEvent = changetype<DateAndLocationSet>(newMockEvent())

  dateAndLocationSetEvent.parameters = new Array()

  dateAndLocationSetEvent.parameters.push(
    new ethereum.EventParam(
      "depatureDate",
      ethereum.Value.fromString(depatureDate)
    )
  )
  dateAndLocationSetEvent.parameters.push(
    new ethereum.EventParam(
      "depaturePlace",
      ethereum.Value.fromString(depaturePlace)
    )
  )
  dateAndLocationSetEvent.parameters.push(
    new ethereum.EventParam(
      "arrivalDate",
      ethereum.Value.fromString(arrivalDate)
    )
  )
  dateAndLocationSetEvent.parameters.push(
    new ethereum.EventParam(
      "arrivalPlace",
      ethereum.Value.fromString(arrivalPlace)
    )
  )

  return dateAndLocationSetEvent
}

export function createDateUnloadedEvent(
  unloadedDate: string,
  unloadedLocation: string
): DateUnloaded {
  let dateUnloadedEvent = changetype<DateUnloaded>(newMockEvent())

  dateUnloadedEvent.parameters = new Array()

  dateUnloadedEvent.parameters.push(
    new ethereum.EventParam(
      "unloadedDate",
      ethereum.Value.fromString(unloadedDate)
    )
  )
  dateUnloadedEvent.parameters.push(
    new ethereum.EventParam(
      "unloadedLocation",
      ethereum.Value.fromString(unloadedLocation)
    )
  )

  return dateUnloadedEvent
}
