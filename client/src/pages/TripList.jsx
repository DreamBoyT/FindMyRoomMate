import { useEffect, useState } from "react";
import "../styles/List.scss";
import Loader from "../components/Loader";
import Navbar from "../components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { setTripList } from "../redux/state";
import ListingCard from "../components/ListingCard";
import Footer from "../components/Footer"

const TripList = () => {
    const [loading, setLoading] = useState(true);
    const userId = useSelector((state) => state.user?._id); // Handle potential null user
    const tripList = useSelector((state) => state.user?.tripList); // Handle potential null tripList

    const dispatch = useDispatch();

    const getTripList = async () => {
        try {
            const response = await fetch(`http://localhost:3001/users/${userId}/trips`);
            const data = await response.json();
            dispatch(setTripList(data));
            setLoading(false);
        } catch (err) {
            console.error("Fetch Trip List failed!", err.message);
            setLoading(false); // Handle error by stopping loading state
        }
    };

    useEffect(() => {
        getTripList();
    }, []);

    return loading ? (
        <Loader />
    ) : (
        <>
            <Navbar />
            <h1 className="title-list">Your Roommates List</h1>
            <div className="list">
                {tripList?.map(({ listingId, hostId, startDate, endDate, totalPrice, booking = true }) => (
                    <ListingCard
                        key={listingId._id}  // Add a key prop for efficient re-rendering
                        listingId={listingId._id}
                        creator={hostId._id}
                        listingPhotoPaths={listingId.listingPhotoPaths}
                        city={listingId.city}
                        province={listingId.province}
                        country={listingId.country}
                        category={listingId.category}
                        startDate={startDate}
                        endDate={endDate}
                        totalPrice={totalPrice}
                        booking={booking}
                    />
                ))}
            </div>
            <Footer />
        </>
    );
};

export default TripList;
