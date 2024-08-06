import Container from "@/components/Container";
import EmptyState from "@/components/EmptyState";
import ListingCard from "@/components/Listing/ListingCard";
import getCurrentUser from "@/lib/actions/getCurrentUser";
import getListings, { IListingsParams } from "@/lib/actions/getListings";
import { safeListing } from "@/types";

interface HomeProps {
  searchParams: IListingsParams;
}

export default async function Home({ searchParams }: HomeProps) {
  const listing: safeListing[] = await getListings(searchParams);
  const currentUser = await getCurrentUser();

  if (listing.length === 0) {
    return <EmptyState showReset />;
  }

  return (
    <Container>
      <div className="pt-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-8 overflow-x-hidden">
        {listing.map((list) => {
          return (
            <ListingCard key={list.id} data={list} currentUser={currentUser} />
          );
        })}
      </div>
    </Container>
  );
}
