import { FC } from "react";

// Components

// Styles

import { EventContentWrapper } from "./styles";

// helpers

interface EventContentProps {
  event: any;
}

function EventContent({ event }: { event: any }) {
  return <EventContentWrapper>{event.title}</EventContentWrapper>;
}

export default EventContent;
