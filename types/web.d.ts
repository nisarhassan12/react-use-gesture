import { DistanceAngle, FullGestureState, Coordinates } from './states'
import { AtLeastOneOf } from './common'
import { DOMAttributes, ReactEventHandler } from 'react'

export type Handler<T extends Coordinates | DistanceAngle> = (state: FullGestureState<T>) => any
export type HandlerKey = 'onDrag' | 'onPinch' | 'onMove' | 'onHover' | 'onScroll' | 'onWheel'

export type GestureHandlers = {
  onAction: Handler<Coordinates>
  onDrag: Handler<Coordinates>
  onDragStart: Handler<Coordinates>
  onDragEnd: Handler<Coordinates>
  onHover: Handler<Coordinates>
  onMove: Handler<Coordinates>
  onMoveStart: Handler<Coordinates>
  onMoveEnd: Handler<Coordinates>
  onScroll: Handler<Coordinates>
  onScrollStart: Handler<Coordinates>
  onScrollEnd: Handler<Coordinates>
  onWheel: Handler<Coordinates>
  onWheelStart: Handler<Coordinates>
  onWheelEnd: Handler<Coordinates>
  onPinch: Handler<DistanceAngle>
  onPinchStart: Handler<DistanceAngle>
  onPinchEnd: Handler<DistanceAngle>
}

/* Handlers should also accept DomAttributes to prevent overrides */
export type GestureHandlersPartial = AtLeastOneOf<GestureHandlers> & Partial<Omit<DOMAttributes<Element>, keyof GestureHandlers>>