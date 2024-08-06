import EmptyState from "@/components/EmptyState";
import React from "react";
import getCurrentUser from "@/lib/actions/getCurrentUser";
import getReservation from "@/lib/actions/getReservations";
import ReservationsClient from "./ReservationsClient";
import { Suspense } from "react";

type Props = {};

const ReservationsPage = async (props: Props) => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return <EmptyState title="Unauthorized" subtitle="Please login" />;
  }

  const reservations = await getReservation({
    authorId: currentUser.id,
  });

  if (reservations.length === 0) {
    return (
      <EmptyState
        title="No Reservation found"
        subtitle="Looks like you have no reservations on your properties."
      />
    );
  }

  return (
    <ReservationsClient reservations={reservations} currentUser={currentUser} />
  );
};

export default ReservationsPage;
