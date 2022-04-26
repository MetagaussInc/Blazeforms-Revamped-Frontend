type EventTriggerName = "click" |
"make-smaller" |
"make-larger" |
"delete";


interface TriggerEventType {
  eventName:EventTriggerName,
  bindedData?: {[key: string]: any}
}

export {
  EventTriggerName,
  TriggerEventType
}
