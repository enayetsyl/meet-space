
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const MyBookings = () => {
  const user = useSelector((state: RootState) => state.auth.user);

  return (
    <div><h1>Welcome, {user?.name}</h1></div>
  )
}

export default MyBookings