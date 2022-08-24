import { useParams } from "react-router-dom";
import NavBar from "./NavBar/NavBar";
function AdminDashboard() {
  const currentUser = useParams();
  return (
    <>
      <NavBar username={currentUser.username} />
    </>
  );
}
export default AdminDashboard;
