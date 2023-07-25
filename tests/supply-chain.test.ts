import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import {} from "@graphprotocol/graph-ts"
import { DateAndLocationSet } from "../generated/schema"
import { DateAndLocationSet as DateAndLocationSetEvent } from "../generated/SupplyChain/SupplyChain"
import { handleDateAndLocationSet } from "../src/supply-chain"
import { createDateAndLocationSetEvent } from "./supply-chain-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let depatureDate = "Example string value"
    let depaturePlace = "Example string value"
    let arrivalDate = "Example string value"
    let arrivalPlace = "Example string value"
    let newDateAndLocationSetEvent = createDateAndLocationSetEvent(
      depatureDate,
      depaturePlace,
      arrivalDate,
      arrivalPlace
    )
    handleDateAndLocationSet(newDateAndLocationSetEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("DateAndLocationSet created and stored", () => {
    assert.entityCount("DateAndLocationSet", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "DateAndLocationSet",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "depatureDate",
      "Example string value"
    )
    assert.fieldEquals(
      "DateAndLocationSet",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "depaturePlace",
      "Example string value"
    )
    assert.fieldEquals(
      "DateAndLocationSet",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "arrivalDate",
      "Example string value"
    )
    assert.fieldEquals(
      "DateAndLocationSet",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "arrivalPlace",
      "Example string value"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
