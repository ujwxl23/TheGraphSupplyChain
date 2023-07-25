import {
  DateAndLocationSet as DateAndLocationSetEvent,
  DateUnloaded as DateUnloadedEvent
} from "../generated/SupplyChain/SupplyChain"
import { DateAndLocationSet, DateUnloaded } from "../generated/schema"

export function handleDateAndLocationSet(event: DateAndLocationSetEvent): void {
  let entity = new DateAndLocationSet(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.depatureDate = event.params.depatureDate
  entity.depaturePlace = event.params.depaturePlace
  entity.arrivalDate = event.params.arrivalDate
  entity.arrivalPlace = event.params.arrivalPlace

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleDateUnloaded(event: DateUnloadedEvent): void {
  let entity = new DateUnloaded(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.unloadedDate = event.params.unloadedDate
  entity.unloadedLocation = event.params.unloadedLocation

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
