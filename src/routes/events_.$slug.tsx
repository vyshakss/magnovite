import { createFileRoute, redirect, notFound } from "@tanstack/react-router";
import { EVENTS_DATA } from "@/data/eventsData";

/**
 * Pretty event links: /events/<slug> → /events?event=<slug>
 *
 * EventsPage selects an event via a search param, but postbuild.js pre-generates
 * a physical dist/events/<slug>/index.html for every event so that strict static
 * servers (e.g. python -m http.server) can serve those URLs on refresh or when
 * someone opens a shared link. Without this route the server would hand back the
 * page and the router would then 404 on a path it has no match for.
 *
 * This uses a named param ($slug) rather than a splat ($) on purpose: a splat
 * matches zero or more segments, so it also matched /events itself and made
 * every <Link to="/events"> ambiguous. A named param matches exactly one
 * segment, leaving the /events route alone.
 *
 * The trailing underscore in the filename (events_) opts this out of nesting
 * under the /events route, so /events keeps rendering its own page rather than
 * becoming a layout with an <Outlet />.
 *
 * Redirecting from beforeLoad runs before any render, so there is no 404 flash.
 */
export const Route = createFileRoute("/events_/$slug")({
  beforeLoad: ({ params }) => {
    // Strip any trailing slash so /events/antrix/ behaves like /events/antrix.
    const slug = (params.slug ?? "").replace(/\/+$/, "");

    // Unknown slugs get the real 404 rather than landing on the events grid
    // with a silently ignored query param.
    if (!EVENTS_DATA.some((event) => event.slug === slug)) {
      throw notFound();
    }

    throw redirect({ to: "/events", search: { event: slug }, replace: true });
  },
});
