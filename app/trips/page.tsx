import EmptyState from "@/components/EmptyState";
import React from "react";
import getCurrentUser from "@/lib/actions/getCurrentUser";
import getReservation from "@/lib/actions/getReservations";
import TripsClient from "./TripsClient";

type Props = {};

const TripsPage = async (props: Props) => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return <EmptyState title="Unauthorized" subtitle="Please login" />;
  }

  const reservations = await getReservation({
    userId: currentUser.id,
  });

  if (reservations.length === 0) {
    return (
      <EmptyState
        title="No trips found"
        subtitle="Looks like you havent reserved any trips."
      />
    );
  }

  return <TripsClient reservations={reservations} currentUser={currentUser} />;
};

export default TripsPage;
